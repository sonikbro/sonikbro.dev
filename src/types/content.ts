// Base content metadata that all content types share
export interface BaseContentMetadata {
  title: string;
  description?: string;
  date: string;
}

// Extended metadata for posts (includes tags and slug)
export interface PostContentMetadata extends BaseContentMetadata {
  tags?: string[];
  slug: string;
}

// Extended metadata for pages (includes slug, no tags by default)
export interface PageContentMetadata extends BaseContentMetadata {
  slug?: string;
}

// Generic content structure
export interface ContentItem<T = BaseContentMetadata> {
  metadata: T;
  content: string;
}

// Specific content types
export type PostContent = ContentItem<PostContentMetadata>;
export type PageContent = ContentItem<PageContentMetadata>;

// List item types for display
export interface BaseContentListItem {
  title: string;
  description?: string;
  date: string;
  slug: string;
}

export interface PostListItem extends BaseContentListItem {
  tags?: string[];
}

export type PostsList = PostListItem[];

// Content type enum for different content categories
export enum ContentType {
  POST = 'posts',
  PAGE = 'pages',
  USES = 'uses',
  CONTACTS = 'contacts'
}

// Configuration for different content types
export interface ContentConfig {
  directory: string;
  type: ContentType;
  filePattern?: string;
  hasTags?: boolean;
  isList?: boolean;
}
