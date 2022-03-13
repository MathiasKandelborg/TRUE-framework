import { GetStaticProps } from 'next'
import { PageProps } from 'PageProps'
import getAllCategories from '@util/api/calls/getAllCategories'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import CategoriesPage from './categories'

export const getStaticProps: GetStaticProps<
  Omit<PageProps, 'config' | 'allRoutes'>
> = async (ctx) => {
  const { preview } = ctx

  const config = await getSanityConfig('da')

  const categories = await getAllCategories('da')

  return {
    props: {
      ...config,
      preview: Boolean(preview),
      categories: categories || null,
      ...ctx
    },
    revalidate: 1
  }
}

export default CategoriesPage
