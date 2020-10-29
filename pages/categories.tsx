import PageSEO from '@components/HoC/SEO/Page'
import CategoriesListPage from '@components/UI/Pages/Category/CategoriesListPage'
import getAllCategories from '@util/api/calls/getAllCategories'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import { Category } from 'cms/Category'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProps } from 'PageProps'

interface ICategoriesPageProps extends PageProps {
  categories: Category[]
}

export const getStaticProps: GetStaticProps<Omit<
  PageProps,
  'config' | 'allRoutes'
>> = async (ctx) => {
  const { preview } = ctx

  const config = await getSanityConfig()

  const categories = await getAllCategories()

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

interface ICategoriesPageStaticProps
  extends ICategoriesPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const CategoriesPage: React.FC<ICategoriesPageStaticProps> = (props) => {
  const { categories } = props

  return (
    <>
      <PageSEO
        title="Categories"
        description="Showcase of integrating categories & products in TRUE Framework"
      />
      <CategoriesListPage categories={categories} />
    </>
  )
}

export default CategoriesPage
