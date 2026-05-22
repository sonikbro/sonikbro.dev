'use client';

import { useEffect, useState } from 'react';
import styles from './PostStats.module.scss';

type StatsMap = Record<string, { comments: number; reactions: number }>;
type State = { loading: true } | { loading: false; map: StatsMap };

let cache: State = { loading: true };
let inflight: Promise<StatsMap> | null = null;
const subscribers = new Set<(state: State) => void>();

function loadStats() {
  if (!cache.loading) return;
  if (inflight) return;

  inflight = fetch('/api/post-stats')
    .then(r => (r.ok ? r.json() : ({} as StatsMap)))
    .catch(() => ({} as StatsMap))
    .then((map: StatsMap) => {
      cache = { loading: false, map };
      subscribers.forEach(cb => cb(cache));
      return map;
    });
}

function usePostStats(slug: string) {
  const [state, setState] = useState<State>(cache);

  useEffect(() => {
    if (!cache.loading) {
      setState(cache);
      return;
    }
    const cb = (s: State) => setState(s);
    subscribers.add(cb);
    loadStats();
    return () => {
      subscribers.delete(cb);
    };
  }, []);

  if (state.loading) return { loading: true as const };
  return {
    loading: false as const,
    comments: state.map[slug]?.comments ?? 0,
    reactions: state.map[slug]?.reactions ?? 0,
  };
}

interface IProps {
  slug: string;
}

export default function PostStats({ slug }: IProps) {
  const stats = usePostStats(slug);

  if (stats.loading) {
    return (
      <span className={styles.stats} aria-hidden>
        <span className={styles.skeleton} />
        <span className={styles.skeleton} />
      </span>
    );
  }

  return (
    <span className={styles.stats}>
      <span title="comments">💬 {stats.comments}</span>
      <span title="reactions">❤️ {stats.reactions}</span>
    </span>
  );
}
