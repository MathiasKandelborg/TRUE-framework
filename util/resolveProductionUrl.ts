import { APIRoute } from 'APITypes'

const previewSecret = process.env.NEXT_PREVIEW_SECRET // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL

/**
 * Create Page preview API route for a slug using:
 * - `NEXT_PREVIEW_SECRET`
 * - `NEXT_PUBLIC_PROJECT_URL`
 *
 * @param {APIRoute} page  Page route to resolve
 * @returns {string} The preview url
 */
export default function resolvePreviewUrl(page: APIRoute): string {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${page.slug.current}`
}
