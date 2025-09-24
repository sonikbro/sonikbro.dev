import type { Metadata } from "next";
import { getAllPosts } from "@api/posts";
import ContentList from "@components/ContentList/ContentList";

export const metadata: Metadata = {
  title: "Posts",
  description: "All posts",
};

export default function Posts() {
  const posts = getAllPosts();

  return (
    <ContentList items={posts} path="posts" />
  );
};
