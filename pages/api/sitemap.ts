/** @format */

/* import { IncomingMessage, ServerResponse } from 'http'
import { SitemapStream, streamToPromise } from 'sitemap'

export default async function sitemapFunc(
  req: IncomingMessage,
  res: ServerResponse
) {
  res.setHeader('Content-Type', 'text/xml')
  try {
    const stories = await fetchContentFromAPI() // call the backend and fetch all stories

    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`
    })
    for (const story of stories) {
      smStream.write({
        url: story.full_slug,
        lastmod: story.published_at
      })
    }
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
 */

export {}
