import createRoutesForSitemap from '@util/createRoutesForSitemap'
import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

/**
 * @param {NextApiRequest} req Incomming request
 * @param {NextApiResponse} res Response
 * @returns {void}
 */
export default async function sitemapFunc(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.setHeader('Content-Type', 'text/xml')
  try {
    // TODO: Include categories and products with this
    const createdRoutesForSitemap = await createRoutesForSitemap() // call the backend and fetch all routes

    const smStream = new SitemapStream({
      hostname: `https://${req?.headers?.host || 'not found'}`
    })

    createdRoutesForSitemap.map((routesArray) =>
      Object.keys(routesArray).map((routeName) => {
        const route = routesArray[routeName]

        return smStream.write({
          url: routeName,
          lastmod: route._updatedAt
        })
      })
    )

    smStream.end()

    const sitemap = await streamToPromise(smStream).then((sm) => sm.toString())

    res.write(sitemap)
    res.end()
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end()
  }
}
