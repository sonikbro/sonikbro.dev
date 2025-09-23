import { getContentBySlug } from "@ui/utils/content";
import { ContentType, PageContent } from "@ui/types/content";

export function getUsesContent(): PageContent {
  return getContentBySlug(ContentType.USES, 'index');
}
