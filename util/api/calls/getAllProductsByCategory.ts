import { Product } from 'cms/Product'
import { getClient } from '..'
import productsByCategory from '../queries/allProductsByCategory'

/**
 * @param {string} id The category id
 * @returns {Promise<Product[]>} The products referencing the category id
 */
async function getProductsByCategory(id: string): Promise<Product[]> {
  const data: Product[] = await getClient(false).fetch(productsByCategory, {
    id
  })

  return data
}

export default getProductsByCategory
