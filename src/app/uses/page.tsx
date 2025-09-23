import type { Metadata } from "next";
import ReactMarkdown from 'react-markdown';
import { getUsesContent } from "@api/uses";

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
    <div>
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

          {metadata.date && (
            <time>
              Last updated: {new Date(metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
        </header>

        <div className="uses-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
