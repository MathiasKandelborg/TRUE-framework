import getAllCategories from '@util/api/calls/getAllCategories'
import { GetStaticPaths } from 'next'
import CategoryPage, { getStaticProps } from '../category/[category]'

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories('da')

  const categoriesArr: { params: { kategori: string }; locale: string }[] = []

  categories.forEach((category) => {
    categoriesArr.push({
      params: { kategori: category?.url?.current || 'UNDEFINED' },
      // eslint-disable-next-line no-underscore-dangle
      locale: category?.__i18n_lang
    })
  })

  return {
    paths: !categoriesArr[0]
      ? [{ params: { kategori: 'REDIRECT' } }]
      : categoriesArr,
    fallback: true
  }
}

export { getStaticProps }

export default CategoryPage
