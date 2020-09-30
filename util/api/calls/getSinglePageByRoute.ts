import { getClient } from '@util/api'
import { APIRoute } from 'cms/APIRoute'
import groq from 'groq'

/**
 * @param {object} options The options
 * @param {string} options.pageSlug URL / Slug
 * @param {boolean} options.preview If preview is enabled
 * @returns {APIRoute} A route defined by page slug
 */
async function getPageByRoute(options: {
  pageSlug: string
  preview?: boolean
}): Promise<APIRoute> {
  const { pageSlug, preview = false } = options

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
    { slug: pageSlug }
  )

  return data
}

export default getPageByRoute
