/** @format */

import { getClient } from '..'
import postFields from '../queries/postFields'
import getUniquePosts from './getUniquePosts'

async function getPostAndMorePosts(slug: unknown, preview: boolean) {
  const curClient = getClient(preview)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [post, morePosts]: [
    Record<string, unknown>,
    [unknown]
  ] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug }
      )
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      { slug }
    )
  ])

  return { post, morePosts: getUniquePosts(morePosts) }
}

export default getPostAndMorePosts
