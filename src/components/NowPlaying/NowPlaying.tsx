'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './NowPlaying.module.scss';

type NowPlayingData = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

const POLL_INTERVAL = 30_000;

const isSafeSpotifyUrl = (url: string | undefined): url is string =>
  !!url && url.startsWith('https://open.spotify.com/');

const NowPlaying: FC = () => {
  const [data, setData] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    let cancelled = false;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const load = async () => {
      try {
        const res = await fetch('/api/now-playing');
        const json = (await res.json()) as NowPlayingData;
        if (!cancelled) setData(json);
      } catch {}
    };

    const start = () => {
      if (intervalId !== null) return;
      load();
      intervalId = setInterval(load, POLL_INTERVAL);
    };
    const stop = () => {
      if (intervalId === null) return;
      clearInterval(intervalId);
      intervalId = null;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelled = true;
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  if (!data?.isPlaying || !data.title) return null;
  const href = isSafeSpotifyUrl(data.songUrl) ? data.songUrl : undefined;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.nowPlaying}
      aria-label={`Anatolii is currently listening to ${data.title} by ${data.artist} on Spotify`}
      title="What I'm listening to on Spotify right now"
    >
      {data.albumImageUrl && (
        <Image
          src={data.albumImageUrl}
          alt=""
          width={36}
          height={36}
          className={styles.cover}
          unoptimized
        />
      )}
      <span className={styles.equalizer} aria-hidden>
        <span /><span /><span />
      </span>
      <span className={styles.text}>
        <span className={styles.label}>Listening on Spotify</span>
        <span className={styles.song}>
          <strong>{data.title}</strong> — {data.artist}
        </span>
      </span>
    </a>
  );
};

export default NowPlaying;
