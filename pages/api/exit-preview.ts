import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Exit the current user from "Preview Mode". This function accepts no args.
 *
 * @param {NextApiRequest} _req Request
 * @param {NextApiResponse} res Response
 * @return HTTP response
 */
export default async (
  _req: NextApiRequest,
  res: NextApiResponse
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<void> => {
  /* Clear preview data */
  res.clearPreviewData()

  /*  Redirect the user back to the index page. */
  res.writeHead(307, { Location: '/' })
  res.end()
}
