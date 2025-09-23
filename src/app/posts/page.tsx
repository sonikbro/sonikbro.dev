import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../../api/posts";

export const metadata: Metadata = {
  title: "Posts",
  description: "All posts",
};

export default async function Posts() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Posts</h1>
        <p className="text-lg text-gray-600">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
        </p>
      </header>

      {!posts.length ? (
        <div className="text-center py-12">
          <h2 className="text-2xl text-gray-500 mb-4">
            Unfortunately, the list of posts is still empty 😢
          </h2>
          <p className="text-gray-400">Check back soon for new content!</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
              <Link
                href={`/posts/${post.slug}`}
                className="block hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
              >
                <header className="mb-3">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </header>

                {post.description && (
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

// Server Component - no need for getStaticProps
// Data is fetched directly in the component
