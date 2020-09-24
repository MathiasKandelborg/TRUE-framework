import { getClient } from '@util/api'
import { APIRoute } from 'APITypes'
import groq from 'groq'

/**
 * @param {object} options The options
 * @param {string} options.pageSlug URL / Slug
 * @returns {APIRoute} A route defined by page slug
 */
const getPageByRoute = async (options: {
  pageSlug: string
}): Promise<APIRoute> => {
  const data: APIRoute = await getClient(false).fetch(
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
    { slug: options.pageSlug }
  )

  return data
}

export default getPageByRoute
