import { getPostBySlug, getPostSlugs } from '@api/posts'
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE, OG_ALT } from '@utils/ogImage'

export const alt = OG_ALT
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export const dynamicParams = false

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { metadata } = getPostBySlug(slug)

  return renderOgImage(metadata.title)
}
