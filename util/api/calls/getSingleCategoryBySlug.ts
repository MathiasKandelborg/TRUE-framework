import { Category } from 'cms/Category'
import { getClient } from '..'
import categoryBySlug from '../queries/singleCategoryBySlug'

/**
 * @param {string} slug The category slug
 * @returns {Promise<Category>} The category provided by slug
 */
async function getCategoryBySlug(slug: string): Promise<Category> {
  const data: Category = await getClient(false).fetch(categoryBySlug, { slug })

  return data
}

export default getCategoryBySlug
