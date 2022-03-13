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
  const paramsArr = await generateProductParamsArr('en')

  return {
    paths: !paramsArr[0]
      ? [{ params: { category: 'REDIRECT', product: 'REDIRECT' } }]
      : paramsArr,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<
  Omit<ICategoriesPageProps, 'config' | 'allRoutes'>
> = async (ctx) => {
  const { preview, params, locale } = ctx

  const x = () => {
    if (params) {
      if (params.product) return params.product as string
      if (params.produkt) return params.produkt as string
    }

    return 'Something is going wrong in [product].tsx'
  }

  const slug = x()

  const config = await getSanityConfig(locale || 'Next i18n not enabled')

  const product = await getSingleProductBySlug(slug)

  if (!product) return { notFound: true }

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
