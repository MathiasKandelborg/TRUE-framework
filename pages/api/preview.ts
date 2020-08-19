/** @format */

import getPreviewPageBySlug from '@util/api/calls/getPreviewPageBySlug'
// eslint-disable-next-line import/no-extraneous-dependencies
import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line consistent-return
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
      message: 'Invalid token'
    })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const page = await getPreviewPageBySlug(req.query.page as string)

  // If the slug doesn't exist prevent preview mode from being enabled
  /*   if (!page) {
    return res.status(401).json({
      message: 'Invalid slug'
    })
  } */

  console.log(page)
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, {
    Location: `/${page.slug.current}`
  })

  return res.end()
}
