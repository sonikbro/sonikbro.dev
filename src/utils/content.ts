import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ContentConfig, ContentItem, ContentType } from '@types/content';

const CONTENT_BASE_DIR = path.join(process.cwd(), 'content');

export const CONTENT_CONFIGS: Record<ContentType, ContentConfig> = {
  [ContentType.POST]: {
    directory: 'posts',
    type: ContentType.POST,
  },
  [ContentType.PAGE]: {
    directory: 'page',
    type: ContentType.PAGE,
  },
  [ContentType.USES]: {
    directory: 'uses',
    type: ContentType.USES,
  },
  [ContentType.CONTACTS]: {
    directory: 'contacts',
    type: ContentType.CONTACTS,
  }
};

export function getContentDirectory(contentType: ContentType): string {
  const config = CONTENT_CONFIGS[contentType];
  return path.join(CONTENT_BASE_DIR, config.directory);
}

export function getContentSlugs(contentType: ContentType): string[] {
  const directory = getContentDirectory(contentType);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs.readdirSync(directory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function parseMarkdownFile(filePath: string, slug?: string): ContentItem {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content file not found: ${filePath}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const metadata = {
    title: data.title || '',
    slug: slug || 'index',
    ...(data.description && { description: data.description }),
    ...(data.date && { date: data.date }),
  };

  return {
    metadata,
    content,
  };
}

export function getContentBySlug(contentType: ContentType, slug: string): ContentItem {
  const directory = getContentDirectory(contentType);
  const documentFile = `${slug}.md`;
  const fullPath = path.join(directory, documentFile);

  return parseMarkdownFile(fullPath, slug);
}

export function getAllContent(contentType: ContentType): ContentItem[] {
  const slugs = getContentSlugs(contentType);

  return slugs.map((slug) => {
    try {
      return getContentBySlug(contentType, slug);
    } catch (error) {
      console.error(`Error reading ${contentType} content "${slug}":`, error);
      return null;
    }
  })
  .filter((item): item is ContentItem => item !== null);
}
