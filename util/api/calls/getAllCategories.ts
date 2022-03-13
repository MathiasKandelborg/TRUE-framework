import { Category } from 'cms/Category'
import { getClient } from '..'
import allCategories from '../queries/allCategories'

/**
 * @param {string} locale The locale to fetch
 * @returns {Promise<Category[]>} All categories
 */
async function getAllCategories(locale?: string): Promise<Category[]> {
  const data: Category[] = await getClient(false).fetch(allCategories(locale))

  return data
}

export default getAllCategories
