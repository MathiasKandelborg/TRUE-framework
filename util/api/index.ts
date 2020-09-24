import client, { previewClient } from '../sanity'

// eslint-disable-next-line import/prefer-default-export
export const getClient = (preview: boolean) =>
  preview ? previewClient : client
