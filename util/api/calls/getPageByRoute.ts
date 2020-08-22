/** @format */
import { getClient } from '@util/api'
import { APIRoute } from 'APITypes'
import groq from 'groq'

async function getPageByRoute(page: string, preview: boolean) {
  const data: APIRoute = await getClient(preview).fetch(
    groq`
*[_type == "route" && slug.current == $slug][0]{
  ...,
  page {
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
