import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getPostSlugs } from '../../../api/posts';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { metadata } = getPostBySlug(params.slug);
    return {
      title: metadata.title,
      description: metadata.description || 'Single post',
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link
            href="/posts"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to all posts
          </Link>
        </nav>

        <article className="prose prose-lg max-w-none">
          <header className="mb-12 text-center border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {metadata.title}
            </h1>

            {metadata.description && (
              <p className="text-xl text-gray-600 mb-6 italic">
                {metadata.description}
              </p>
            )}

            <time className="text-sm text-gray-500 block mb-4">
              {new Date(metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>

            {metadata.tags && metadata.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </div>
    );
  } catch {
    notFound();
  }
};

// Generate static params for all posts
export function generateStaticParams() {
  const slugs = getPostSlugs();

  return slugs.map((slug) => ({ slug }));
}
