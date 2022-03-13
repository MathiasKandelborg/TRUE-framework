import { Product } from 'cms/Product'
import { getClient } from '..'
import allProducts from '../queries/allProducts'
/**
 * @param {string} locale
 * @returns {Promise<Product[]>} All categories
 */
async function getAllProducts(locale: string): Promise<Product[]> {
  const data: Product[] = await getClient(false).fetch(allProducts, {
    locale: `${locale}`
  })

  return data
}

export default getAllProducts
