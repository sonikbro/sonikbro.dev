import type { Metadata } from "next";
import ReactMarkdown from 'react-markdown';
import { getUsesContent } from "@ui/api/uses";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = getUsesContent();

  return {
    title: metadata.title || 'Uses',
    description: metadata.description || 'What I use to build software',
  };
}

export default function Uses() {
  const { metadata, content } = getUsesContent();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
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

          {metadata.date && (
            <time className="text-sm text-gray-500 block">
              Last updated: {new Date(metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
