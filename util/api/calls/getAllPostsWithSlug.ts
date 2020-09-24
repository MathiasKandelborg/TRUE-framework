import client from '@util/sanity'

async function getAllPostsWithSlug() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: [unknown] = await client.fetch(
    `*[_type == "post"]{ 'slug': slug.current }`
  )

  return data
}

export default getAllPostsWithSlug
