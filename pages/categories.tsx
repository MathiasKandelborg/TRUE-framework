import ListCategoriesPage from '@components/UI/Category/CategoriesListPage'
import getAllCategories from '@util/api/calls/getAllCategories'
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

  const categories = await getAllCategories()

  return {
    props: {
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
      <ListCategoriesPage categories={categories} />
    </>
  )
}

export default CategoriesPage
