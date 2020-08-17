/** @format */

import createRoutesForSitemap, {
  TSitemapRoute
} from '@util/createRoutesForSitemap'
import { IncomingMessage, ServerResponse } from 'http'
import { SitemapStream, streamToPromise } from 'sitemap'

export default async function sitemapFunc(
  req: IncomingMessage,
  res: ServerResponse
) {
  res.setHeader('Content-Type', 'text/xml')
  try {
    const createdRoutesForSitemap = await createRoutesForSitemap() // call the backend and fetch all stories

    const host = req?.headers?.host || 'not found'

    const smStream = new SitemapStream({
      hostname: `https://${host}`
    })

    createdRoutesForSitemap.map((routesArray) =>
      Object.keys(routesArray).map((routeName) => {
        const route: TSitemapRoute = routesArray[routeName]
        console.log(route)

        return smStream.write({
          url: route.slug.current,
          // eslint-disable-next-line no-underscore-dangle
          lastmod: route.page._editedAt! || new Date()
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
