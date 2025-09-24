import type { Metadata } from "next";
import { getUsesContent } from "@api/uses";
import ContentEntity from '@components/ContentEntity/ContentEntity'

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = getUsesContent();

  return {
    title: metadata.title || 'Uses',
    description: metadata.description || 'What I use to build software',
  };
}

export default function Uses() {
  const uses = getUsesContent();

  return (
    <ContentEntity
      metadata={uses.metadata}
      content={uses.content}
      type="page"
    />
  );
}
