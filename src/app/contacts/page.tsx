import type { Metadata } from "next";
import { getContactsContent } from "@api/contacts";
import ContentEntity from '@components/ContentEntity/ContentEntity';
import { siteUrl } from '@utils/site';

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = getContactsContent();

  return {
    title: 'Contacts',
    description: metadata.description,
    alternates: {
      canonical: `${siteUrl}/contacts`,
    },
  };
}

export default function Contacts() {
  const contacts = getContactsContent();

  return (
    <ContentEntity
      metadata={contacts.metadata}
      content={contacts.content}
    />
  );
}
