import { ContentType } from "@type/content";
import { getContentBySlug } from "@utils/content";

export function getUsesContent() {
  return getContentBySlug(ContentType.USES, 'index');
}
