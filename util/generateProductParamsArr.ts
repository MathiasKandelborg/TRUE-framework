import getAllCategories from './api/calls/getAllCategories'
import getAllProducts from './api/calls/getAllProducts'

type IParams = {
  params: { category: string; product: string }
}[]

/**
 * For each `product`:
 * - It's not in a `category`
 *
 * Then, for each `category`:
 * - If `category.id` matches an `id` in `product.categories[n].id`
 * - Current `product` is now in a `category`
 * - Push params to paramsArr
 *
 *
 * @returns {IParams} Params arr
 */
async function generateProductParamsArr(): Promise<IParams> {
  const paramsArr: { params: { category: string; product: string } }[] = []

  const categories = await getAllCategories()

  const products = await getAllProducts()

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
            category: cat.url.current,
            product: prod.url.current
          }
        })
    })
  })

  return paramsArr
}

export default generateProductParamsArr
