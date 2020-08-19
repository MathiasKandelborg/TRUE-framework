/** @format */
import { TSitemapQueryRoute } from '@util/createRoutesForSitemap'
import groq from 'groq'
import { getClient } from '..'

async function getPageByRoute(page: string, preview = true) {
  const data: TSitemapQueryRoute = await getClient(preview).fetch(
    groq`
*[_type == "route" && slug.current == $slug][0]{
  ...,
  page-> {
    ...,
    content[] {
      ...,
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      }
    }
  }
}`,
    { slug: page }
  )

  return data
}

export default getPageByRoute
