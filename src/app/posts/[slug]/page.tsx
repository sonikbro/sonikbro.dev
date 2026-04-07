import { Metadata } from 'next';
import { getPostBySlug } from '@api/posts';
import ContentEntity from '@components/ContentEntity/ContentEntity';
import ReadingProgress from '@components/ReadingProgress/ReadingProgress';
import JsonLd from '@components/JsonLd/JsonLd';
import BackLink from '@components/BackLink/BackLink';
import { siteUrl } from '@utils/site';

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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metadata.title,
    description: post.metadata.description,
    datePublished: post.metadata.date,
    url: `${siteUrl}/posts/${params.slug}`,
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
      <BackLink href="/posts" label="all posts" />
    </>
  );
};
