import sanityClient, { ClientConfig } from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options: ClientConfig = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: 'production',
  apiVersion: '2021-09-09',
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV === 'production'
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

const client = sanityClient(options)

export const imageBuilder = sanityImage(client)

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  withCredentials: true
})

export default client
