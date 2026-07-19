import { Metadata } from 'next';
import { getPostBySlug, getPostSlugs } from '@api/posts';
import ContentEntity from '@components/ContentEntity/ContentEntity';
import ReadingProgress from '@components/ReadingProgress/ReadingProgress';
import JsonLd from '@components/JsonLd/JsonLd';
import BackLink from '@components/BackLink/BackLink';
import RssLink from '@components/RssLink/RssLink';
import { siteUrl } from '@utils/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = getPostBySlug(params.slug);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      publishedTime: metadata.date,
      url: `${siteUrl}/posts/${params.slug}`,
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
    },
    alternates: {
      canonical: `${siteUrl}/posts/${params.slug}`,
    },
  };
}

interface SinglePostProps {
  params: Promise<{ slug: string }>;
}

export default async function SinglePost(props: SinglePostProps) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  const postUrl = `${siteUrl}/posts/${params.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    description: post.metadata.description,
    datePublished: post.metadata.date,
    dateModified: post.metadata.date,
    image: `${postUrl}/opengraph-image`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    url: postUrl,
    keywords: post.metadata.keywords,
    author: {
      '@type': 'Person',
      name: 'Anatolii',
      url: siteUrl,
    },
  };

  return (
    <>
      <ReadingProgress />
      <JsonLd data={jsonLd} />
      <ContentEntity
         metadata={post.metadata}
         content={post.content}
       />
      <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <BackLink href="/posts" label="all posts" />
        <RssLink />
      </footer>
    </>
  );
};
