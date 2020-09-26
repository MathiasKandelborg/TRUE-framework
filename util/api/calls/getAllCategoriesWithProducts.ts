import { Product } from 'cms/Product'
import { getClient } from '..'
import allCategoriesAllProducts from '../queries/allCategoriesAllProducts'

/**
 * @returns {Promise<Product[]>} The categories
 */
async function getCategoriesWithProducts(): Promise<Product[]> {
  const data: Product[] = await getClient(false).fetch(allCategoriesAllProducts)

  return data
}

export default getCategoriesWithProducts
