
import { getClient } from '..'
import postFields from '../queries/postFields'
import getUniquePosts from './getUniquePosts'

export async function getAllPostsForHome(preview: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`)

  return getUniquePosts(results)
}

export default getAllPostsForHome
