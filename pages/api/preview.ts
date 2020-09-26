import getPageByRoute from '@util/api/calls/getSinglePageByRoute'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @param {NextApiRequest} req The HTTP request
 * @param {NextApiResponse} res The HTTP response
 * @returns {void} HTTP response
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  /*
   * Check the secret, and next parameters
   * This secret should only be known to this API route and the CMS
   * If secret don't match, 401 the user
   */
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.page
  ) {
    return res.status(401).json({
      message: 'Secret does not match process.env.`SANITY_PREVIEW_SECRET`'
    })
  }

  /*  Fetch the headless CMS to check if the provided `slug` exists */
  const route = await getPageByRoute({
    pageSlug: req.query.page as string,
    preview: true
  })

  const slug = route.slug.current

  /*  No slug, no preview mode */
  if (!slug) {
    return res.status(401).json({
      message: 'Invalid slug'
    })
  }

  /*  Enable Preview Mode by setting the cookies */
  res.setPreviewData({})

  /*
   * Redirect to the path from the fetched post
   * We don't redirect to req.query.page as that might lead to open redirect vulnerabilities
   */
  res.writeHead(307, {
    Location: `/${route.slug.current}`
  })

  return res.end()
}
