"use client";

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

const GISCUS_REPO = 'sonikbro/sonikbro.dev' as const;
const GISCUS_REPO_ID = 'R_kgDOHedqfQ';
const GISCUS_CATEGORY = 'Announcements';
const GISCUS_CATEGORY_ID = 'DIC_kwDOHedqfc4C6Kkg';

interface IProps {
  slug: string;
}

export default function Comments({ slug }: IProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo={GISCUS_REPO}
      repoId={GISCUS_REPO_ID}
      category={GISCUS_CATEGORY}
      categoryId={GISCUS_CATEGORY_ID}
      mapping="specific"
      term={slug}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  );
}
