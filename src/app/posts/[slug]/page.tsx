import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug } from '@api/posts';
import ContentEntity from '@components/ContentEntity/ContentEntity';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { metadata } = getPostBySlug(params.slug);
    return {
      title: metadata.title,
      description: metadata.description,
    };
  } catch {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found',
    };
  }
}

interface SinglePostProps {
  params: { slug: string };
}

export default function SinglePost({ params }: SinglePostProps) {
  try {
    const post = getPostBySlug(params.slug);

    return (
      <div>
        <nav>
          <Link href="/posts">
            ← Back to all posts
          </Link>
        </nav>

        <ContentEntity
           metadata={post.metadata}
           content={post.content}
           type="post"
         />
      </div>
    );
  } catch {
    notFound();
  }
};
