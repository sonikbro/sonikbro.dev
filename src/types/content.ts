export interface ContentConfig {
  directory: string;
  type: ContentType;
}

export const enum ContentType {
  POST = 'posts',
  USES = 'uses',
  CONTACTS = 'contacts'
}

export interface ContentMetadata {
  title: string;
  slug: string;
  timeRead: number;
  description?: string;
  date?: string;
}

export interface ContentItem {
  metadata: ContentMetadata;
  content: string;
}
