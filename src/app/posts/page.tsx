import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@api/posts";

export const metadata: Metadata = {
  title: "Posts",
  description: "All posts",
};

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>

      {!posts.length ? (
        <div>
          <h2>
            Unfortunately, the list of posts is still empty 😢
          </h2>
          <p>Check back soon for new content!</p>
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <article key={post.metadata.slug}>
              <Link href={`/posts/${post.metadata.slug}`}>
                <header>
                  <h2>
                    {post.metadata.title}
                  </h2>
                  <time>
                    {post.metadata.date && (
                      new Date(post.metadata.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })
                    )}
                  </time>
                </header>

                {post.metadata.description && (
                  <p>
                    {post.metadata.description}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
