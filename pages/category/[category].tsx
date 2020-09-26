import SingleCategoryPage from '@components/UI/Category/CategoryPage'
import getAllCategories from '@util/api/calls/getAllCategories'
import getProductsByCategory from '@util/api/calls/getAllProductsByCategory'
import getCategoryBySlug from '@util/api/calls/getSingleCategoryBySlug'
import { Category } from 'cms/Category'
import { Product } from 'cms/Product'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { PageProps } from 'PageProps'
import { useEffect } from 'react'

interface ICategoriesPageProps extends PageProps {
  category: Category
  products: Product[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories()

  const categoriesArr: { params: { category: string } }[] = []

  categories.forEach((category) => {
    categoriesArr.push({ params: { category: category.url.current } })
  })

  return {
    paths: !categoriesArr[0]
      ? [{ params: { category: 'REDIRECT' } }]
      : categoriesArr,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Omit<
  PageProps,
  'config' | 'allRoutes'
>> = async (ctx) => {
  const { preview, params } = ctx

  const slug = params?.category as string

  const category = await getCategoryBySlug(slug)

  // eslint-disable-next-line no-underscore-dangle
  const products = await getProductsByCategory(category._id)

  return {
    props: {
      preview: Boolean(preview),
      category: category || null,
      products,
      ...ctx
    },
    revalidate: 1
  }
}

interface ICategoryPageStaticProps
  extends ICategoriesPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const CategoryPage: React.FC<ICategoryPageStaticProps> = (props) => {
  const { category, products } = props

  const router = useRouter()

  useEffect(() => {
    if (typeof category === 'undefined') {
      console.log('CATEGORY IS UNDEFINEEEEED')
      router.back()
    }
  })

  return <SingleCategoryPage category={category} products={products} />
}

export default CategoryPage
