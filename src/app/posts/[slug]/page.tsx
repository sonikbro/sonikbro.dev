import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '@api/posts';

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
    const { metadata, content } = getPostBySlug(params.slug);

    return (
      <div>
        <nav>
          <Link href="/posts">
            ← Back to all posts
          </Link>
        </nav>

        <article>
          <header>
            <h1>
              {metadata.title}
            </h1>

            {metadata.description && (
              <p>
                {metadata.description}
              </p>
            )}

            <time>
              {metadata.date && (
                new Date(metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
              )}
            </time>
          </header>

          <div>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </div>
    );
  } catch {
    notFound();
  }
};
