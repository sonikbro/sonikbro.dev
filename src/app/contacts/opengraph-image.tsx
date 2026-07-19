import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE, OG_ALT } from '@utils/ogImage'

export const alt = OG_ALT
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage('Get in touch')
}
