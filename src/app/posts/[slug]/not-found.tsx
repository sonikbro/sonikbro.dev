import Link from 'next/link';

export default function PostNotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Post Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <div className="space-y-4">
        <Link
          href="/posts"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          ← Back to All Posts
        </Link>
        <div>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
