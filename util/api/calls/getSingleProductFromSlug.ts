import { Product } from 'cms/Product'
import { getClient } from '..'
import singleProductFromSlug from '../queries/singleProductBySlug'

/**
 * @param {string} slug The category slug
 * @returns {Promise<Product>} The category provided by slug
 */
async function getSingleProductBySlug(slug: string): Promise<Product> {
  const data: Product = await getClient(false).fetch(singleProductFromSlug, {
    slug
  })

  return data
}

export default getSingleProductBySlug
