import createRoutesForSitemap from '@util/createRoutesForSitemap'
import { IncomingMessage, ServerResponse } from 'http'
import { SitemapStream, streamToPromise } from 'sitemap'

/**
 * @param req
 * @param res
 */
export default async function sitemapFunc(
  req: IncomingMessage,
  res: ServerResponse
) {
  res.setHeader('Content-Type', 'text/xml')
  try {
    const createdRoutesForSitemap = await createRoutesForSitemap() // call the backend and fetch all stories

    const smStream = new SitemapStream({
      hostname: `https://${req?.headers?.host || 'not found'}`
    })

    createdRoutesForSitemap.map((routesArray) =>
      Object.keys(routesArray).map((routeName) => {
        const route = routesArray[routeName]

        return smStream.write({
          url: routeName,
          // eslint-disable-next-line no-underscore-dangle
          lastmod: route._updatedAt
        })
      })
    )

    smStream.end()

    const sitemap = await streamToPromise(smStream).then((sm) => sm.toString())

    res.write(sitemap)
    res.end()
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}
