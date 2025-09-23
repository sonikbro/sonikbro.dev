export interface ContentConfig {
  directory: string;
  type: ContentType;
}

export const enum ContentType {
  POST = 'posts',
  PAGE = 'page',
  USES = 'uses',
  CONTACTS = 'contacts'
}

export interface ContentMetadata {
  title: string;
  slug: string;
  description?: string;
  date?: string;
}

export interface ContentItem {
  metadata: ContentMetadata;
  content: string;
}
