import { Product } from 'cms/Product'
import { getClient } from '..'
import allProducts from '../queries/allProducts'
/**
 * @returns {Promise<Product[]>} All categories
 */
async function getAllProducts(): Promise<Product[]> {
  const data: Product[] = await getClient(false).fetch(allProducts)

  return data
}

export default getAllProducts
