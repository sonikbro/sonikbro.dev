import { Metadata } from 'next';
import { getPostBySlug } from '@api/posts';
import ContentEntity from '@components/ContentEntity/ContentEntity';
import Link from 'next/link';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = getPostBySlug(params.slug);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

interface SinglePostProps {
  params: Promise<{ slug: string }>;
}

export default async function SinglePost(props: SinglePostProps) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  return (
    <>
      <ContentEntity
         metadata={post.metadata}
         content={post.content}
       />
      <Link href={`/posts`}>← Back to all posts</Link>
    </>
  );
};
