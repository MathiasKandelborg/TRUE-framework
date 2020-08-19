/** @format */
import { TSitemapQueryRoute } from '@util/createRoutesForSitemap'
import groq from 'groq'
import { getClient } from '..'

async function getPreviewPageBySlug(page: string) {
  const data: TSitemapQueryRoute = await getClient(true).fetch(
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

export default getPreviewPageBySlug
