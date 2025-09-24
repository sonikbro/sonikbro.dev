import { ContentType } from "@type/content";
import { getContentBySlug } from "@utils/content";

export function getContactsContent() {
  return getContentBySlug(ContentType.CONTACTS, 'index');
}
