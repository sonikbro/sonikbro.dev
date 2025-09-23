import Link from 'next/link';

export default function PostNotFound() {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>
          Post Not Found
        </h2>
        <p>
          Sorry, the post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <div>
        <Link href="/posts">
          ← Back to All Posts
        </Link>
        <div>
          <Link href="/">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
