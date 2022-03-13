import getAllCategories from './api/calls/getAllCategories'
import getAllProducts from './api/calls/getAllProducts'

type TParamsArray = {
  params: { category: string; product: string }
}[]

/**
 * For each `product`:
 * - It's by default not in a `category`
 *
 * Then, for each `category`:
 * - If `category.id` matches an `id` in `product.categories[n].id`
 * - Current `product` is placed in current `category`
 * - Push params to paramsArr
 *
 *
 * @param {string} locale
 * @returns {TParamsArray} Params arr
 */
async function generateProductParamsArr(locale: string): Promise<TParamsArray> {
  const paramsArr: {
    params: { category: string; product: string }
    locale: string
  }[] = []

  const categories = await getAllCategories(locale)

  const products = await getAllProducts(locale)

  products.forEach((prod) => {
    let productInCategory = false

    categories.forEach((cat) => {
      productInCategory = false

      // eslint-disable-next-line no-return-assign
      prod.categories.map((c) =>
        c._id === cat._id ? (productInCategory = true) : null
      )

      if (productInCategory)
        paramsArr.push({
          params: {
            category: cat.url?.current,
            product: prod.url?.current
          },
          // eslint-disable-next-line no-underscore-dangle
          locale: prod.__i18n_lang
        })
    })
  })

  return paramsArr
}

export default generateProductParamsArr
