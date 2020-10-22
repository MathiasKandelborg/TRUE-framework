import PageSEO from '@components/HoC/SEO/Page'
import SingleCategoryPage from '@components/UI/Pages/Category/SingleCategoryPage'
import getAllCategories from '@util/api/calls/getAllCategories'
import getProductsByCategory from '@util/api/calls/getAllProductsByCategory'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import getCategoryBySlug from '@util/api/calls/getSingleCategoryBySlug'
import generateRawTextFromTextBlock from '@util/generateRawTextFromTextBlock'
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
    categoriesArr.push({
      params: { category: category?.url?.current || 'UNDEFINED' }
    })
  })

  return {
    paths: !categoriesArr[0]
      ? [{ params: { category: 'REDIRECT' } }]
      : categoriesArr,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Omit<
  ICategoriesPageProps,
  'config' | 'allRoutes'
>> = async (ctx) => {
  const { preview, params } = ctx

  const slug = params?.category as string

  const config = await getSanityConfig()

  const category = await getCategoryBySlug(slug)

  const products = await getProductsByCategory(category._id)

  if (!category) return { unstable_notFound: true }

  return {
    props: {
      ...config,
      preview: Boolean(preview),
      category: category || null,
      products,
      ...ctx
    },
    revalidate: 1
  }
}

const CategoryPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const { category, products } = props

  const router = useRouter()

  useEffect(() => {
    if (typeof category === 'undefined') {
      router.back()
    }
  }, [category, router])

  const rawTextDesc = generateRawTextFromTextBlock(category?.description)

  return (
    <>
      <PageSEO title={category?.title} description={rawTextDesc} />
      <SingleCategoryPage category={category} products={products} />
    </>
  )
}

export default CategoryPage
