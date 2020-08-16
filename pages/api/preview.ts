/** @format */

import getPreviewPostBySlug from '@util/api/calls/getPreviewPostBySlug'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express'

// eslint-disable-next-line consistent-return
export default async function preview(req: Request, res: Response) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({
      message: 'Invalid token'
    })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const post: Record<string, unknown> = await getPreviewPostBySlug(
    req.query.slug as string
  )

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({
      message: 'Invalid slug'
    })
  }

  // Enable Preview Mode by setting the cookies
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    Location: `/posts/${post.slug}`
  })

  return res.end()
}
