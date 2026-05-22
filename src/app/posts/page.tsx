import type { Metadata } from "next";
import { getAllPosts } from "@api/posts";
import ContentList from "@components/ContentList/ContentList";
import { siteUrl } from '@utils/site';

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about web development, tools, and software engineering by Anatolii",
  alternates: {
    canonical: `${siteUrl}/posts`,
  },
};

export default function Posts() {
  const posts = getAllPosts();

  return (
    <ContentList
      items={posts}
      path={"posts"}
      title={"All posts"}
      showStats
    />
  );
};
