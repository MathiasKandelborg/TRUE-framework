import PageSEO from '@components/HoC/SEO/Page'
import SingleProductPage from '@components/UI/Pages/Product/ProductPage'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import getSingleProductBySlug from '@util/api/calls/getSingleProductFromSlug'
import generateProductParamsArr from '@util/generateProductParamsArr'
import generateRawTextFromTextBlock from '@util/generateRawTextFromTextBlock'
import { Product } from 'cms/Product'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProps } from 'PageProps'

interface ICategoriesPageProps extends PageProps {
  product: Product
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paramsArr = await generateProductParamsArr()

  return {
    paths: !paramsArr[0]
      ? [{ params: { category: 'REDIRECT', product: 'REDIRECT' } }]
      : paramsArr,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Omit<
  ICategoriesPageProps,
  'config' | 'allRoutes'
>> = async (ctx) => {
  const { preview, params } = ctx

  const slug = params?.product as string

  const config = await getSanityConfig()

  const product = await getSingleProductBySlug(slug)

  if (!product) return { unstable_notFound: true }

  return {
    props: {
      ...config,
      preview: Boolean(preview),
      product: product || null,
      ...ctx
    },
    revalidate: 20
  }
}

const ProductPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const { product } = props

  const rawTextDesc = generateRawTextFromTextBlock(product?.description)

  return (
    <>
      <PageSEO title={product?.title} description={rawTextDesc} />
      <SingleProductPage product={product} />
    </>
  )
}

export default ProductPage
