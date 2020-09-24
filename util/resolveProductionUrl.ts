const previewSecret = process.env.NEXT_PREVIEW_SECRET // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = process.env.NEXT_PUBLIC_PROJECT_URL

export default function resolveProductionUrl(document: {
  slug: { current: any }
}) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
