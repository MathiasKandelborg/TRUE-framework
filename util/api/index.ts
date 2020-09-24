import { SanityClient } from '@sanity/client'
import client, { previewClient } from '../sanity'

// eslint-disable-next-line import/prefer-default-export
export const getClient = (preview: boolean): SanityClient =>
  preview ? previewClient : client
