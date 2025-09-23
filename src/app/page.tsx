import { getPageContent } from "@api/page";
import type { Metadata } from "next";
import ReactMarkdown from 'react-markdown';

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = getPageContent();

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function Page() {
  const { content } = getPageContent();

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
