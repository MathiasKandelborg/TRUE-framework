import getPageByRoute from '@util/api/calls/getPageByRoute'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.page
  ) {
    return res.status(401).json({
      message: 'Secret does not match process.env.`SANITY_PREVIEW_SECRET`'
    })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const route = await getPageByRoute(req.query.page as string, true)

  const slug = route.slug.current

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!slug) {
    return res.status(401).json({
      message: 'Invalid slug'
    })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, {
    Location: `/${slug}`
  })

  return res.end()
}
