
import { getClient } from '..'
import postFields from '../queries/postFields'

async function getPreviewPostBySlug(slug: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: [Record<string, unknown>] = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
    { slug }
  )

  return data[0]
}

export default getPreviewPostBySlug
