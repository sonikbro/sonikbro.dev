import { MetadataRoute } from 'next';
import { getAllPosts } from '@api/posts';
import { siteUrl } from '@utils/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/posts/${post.metadata.slug}`,
    lastModified: new Date(post.metadata.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/posts`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/contacts`, changeFrequency: 'yearly', priority: 0.3 },
    ...postUrls,
  ];
}
