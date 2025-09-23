import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ContentItem, BaseContentMetadata, ContentConfig, ContentType, PageContent, PageContentMetadata } from '../types/content';

// Base content directory
const CONTENT_BASE_DIR = path.join(process.cwd(), 'content');

// Configuration for different content types
export const CONTENT_CONFIGS: Record<ContentType, ContentConfig> = {
  [ContentType.POST]: {
    directory: 'posts',
    type: ContentType.POST,
    filePattern: '*.md',
    hasTags: true,
    isList: true
  },
  [ContentType.PAGE]: {
    directory: 'pages',
    type: ContentType.PAGE,
    filePattern: '*.md',
    hasTags: false,
    isList: false
  },
  [ContentType.USES]: {
    directory: 'uses',
    type: ContentType.USES,
    filePattern: 'index.md',
    hasTags: false,
    isList: false
  },
  [ContentType.CONTACTS]: {
    directory: 'contacts',
    type: ContentType.CONTACTS,
    filePattern: '*.md',
    hasTags: false,
    isList: true
  }
};

// // Get any single page content by type
// export function getPageContent(contentType: ContentType): PageContent {
//   return getSingleContent<PageContentMetadata>(contentType);
// }

// // Get page content by slug (for multi-page content types)
// export function getPageBySlug(contentType: ContentType, slug: string): PageContent {
//   return getContentBySlug<PageContentMetadata>(contentType, slug);
// }

// Get content directory path for a specific content type
export function getContentDirectory(contentType: ContentType): string {
  const config = CONTENT_CONFIGS[contentType];
  return path.join(CONTENT_BASE_DIR, config.directory);
}

// Get all file slugs for a content type
export function getContentSlugs(contentType: ContentType): string[] {
  const directory = getContentDirectory(contentType);
  const config = CONTENT_CONFIGS[contentType];

  if (!fs.existsSync(directory)) {
    return [];
  }

  // For single file content (like uses/index.md), return the base name
  if (config.filePattern === 'index.md') {
    const indexPath = path.join(directory, 'index.md');
    return fs.existsSync(indexPath) ? ['index'] : [];
  }

  // For multiple files, return all .md files as slugs
  return fs.readdirSync(directory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

// Parse markdown frontmatter and content
export function parseMarkdownFile<T extends BaseContentMetadata>(
  filePath: string,
  slug?: string
): ContentItem<T> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content file not found: ${filePath}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Create base metadata
  const baseMetadata = {
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
  };

  // Add additional fields based on content type
  const metadata = {
    ...baseMetadata,
    ...(slug && { slug }),
    ...(data.tags && { tags: data.tags }),
  } as T;

  return {
    metadata,
    content,
  };
}

// Get content by slug for a specific content type
export function getContentBySlug<T extends BaseContentMetadata>(
  contentType: ContentType,
  slug: string
): ContentItem<T> {
  const directory = getContentDirectory(contentType);
  const config = CONTENT_CONFIGS[contentType];

  let fileName: string;

  // Handle special case for single file content
  if (config.filePattern === 'index.md' && slug === 'index') {
    fileName = 'index.md';
  } else {
    fileName = `${slug}.md`;
  }

  const fullPath = path.join(directory, fileName);
  return parseMarkdownFile<T>(fullPath, slug);
}

// Get all content items for a content type
export function getAllContent<T extends BaseContentMetadata>(
  contentType: ContentType
): ContentItem<T>[] {
  const slugs = getContentSlugs(contentType);
  const config = CONTENT_CONFIGS[contentType];

  const items = slugs
    .map((slug) => {
      try {
        return getContentBySlug<T>(contentType, slug);
      } catch (error) {
        console.error(`Error reading ${contentType} content "${slug}":`, error);
        return null;
      }
    })
    .filter((item): item is ContentItem<T> => item !== null);

  // Sort by date if it's a list content type
  if (config.isList) {
    return items.sort((a, b) => {
      return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
    });
  }

  return items;
}

// Utility function to create list items from content
export function createListItems<T extends BaseContentMetadata, L>(
  contentItems: ContentItem<T>[],
  mapper: (item: ContentItem<T>) => L
): L[] {
  return contentItems.map(mapper);
}

// Helper function to validate content metadata
export function validateContentMetadata(
  metadata: BaseContentMetadata,
  _contentType: ContentType
): boolean {


  // Basic validation
  if (!metadata.title || !metadata.date) {
    return false;
  }

  // Date validation
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(metadata.date)) {
    return false;
  }

  return true;
}
