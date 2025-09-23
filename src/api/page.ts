import { ContentType } from "@types/content";
import { getContentBySlug } from "@utils/content";

export function getPageContent() {
  return getContentBySlug(ContentType.PAGE, 'index');
}
