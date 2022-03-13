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
  const categories = await getAllCategories('en')

  const categoriesArr: { params: { category: string }; locale: string }[] = []

  categories.forEach((category) => {
    categoriesArr.push({
      params: { category: category?.url?.current || 'UNDEFINED' },
      // eslint-disable-next-line no-underscore-dangle
      locale: category?.__i18n_lang
    })
  })

  return {
    paths: !categoriesArr[0]
      ? [{ params: { category: 'REDIRECT' } }]
      : categoriesArr,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<
  Omit<ICategoriesPageProps, 'config' | 'allRoutes'>
> = async (ctx) => {
  const { preview, params, locale, locales } = ctx

  const generateSlug = () => {
    let slug = ''

    if (locales && params) {
      if (params.kategori) slug = params.kategori as string

      if (params.category) slug = params.category as string
    }

    return slug
  }

  const config = await getSanityConfig(locale || 'Next i18n not enabled')

  const category = await getCategoryBySlug(generateSlug())

  const products = await getProductsByCategory(category._id)

  if (!category) return { notFound: true }

  return {
    props: {
      locale: 'en',
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
