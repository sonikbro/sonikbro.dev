import { Metadata } from 'next';
import { getPostBySlug } from '@api/posts';
import ContentEntity from '@components/ContentEntity/ContentEntity';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { metadata } = getPostBySlug(params.slug);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

interface SinglePostProps {
  params: { slug: string };
}

export default function SinglePost({ params }: SinglePostProps) {
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
