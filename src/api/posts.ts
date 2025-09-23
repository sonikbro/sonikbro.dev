import {
  ContentType,
  PostContentMetadata,
  PostContent,
  PostListItem,
  PostsList
} from '../types/content';
import {
  getContentSlugs,
  getContentBySlug,
  getAllContent,
  createListItems,
} from '../utils/content';

export function getPostSlugs(): string[] {
  return getContentSlugs(ContentType.POST);
}

export function getPostBySlug(slug: string): PostContent {
  return getContentBySlug<PostContentMetadata>(ContentType.POST, slug);
}

export function getAllPosts(): PostsList {
  const posts = getAllContent<PostContentMetadata>(ContentType.POST);

  return createListItems(posts, (post) => ({
    title: post.metadata.title,
    description: post.metadata.description,
    date: post.metadata.date,
    tags: post.metadata.tags,
    slug: post.metadata.slug,
  } as PostListItem));
}
