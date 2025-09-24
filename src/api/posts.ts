import { ContentType } from "@type/content";
import { getContentSlugs, getContentBySlug, getAllContent } from "@utils/content";

export function getPostSlugs() {
  return getContentSlugs(ContentType.POST);
}

export function getPostBySlug(slug: string) {
  return getContentBySlug(ContentType.POST, slug);
}

export function getAllPosts() {
  return getAllContent(ContentType.POST);
}
