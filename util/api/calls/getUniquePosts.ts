/** @format */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const getUniquePosts = (posts: [unknown]) => {
  const slugs = new Set()

  const filteredPosts = posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    }
    slugs.add(post.slug)

    return true
  })

  return filteredPosts
}

export default getUniquePosts
