import SingleProductPage from '@components/UI/Product/ProductPage'
import getSingleProductBySlug from '@util/api/calls/getSingleProductFromSlug'
import generateProductParamsArr from '@util/generateProductParamsArr'
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
  PageProps,
  'config' | 'allRoutes'
>> = async (ctx) => {
  const { preview, params } = ctx

  const slug = params?.product as string

  const product = await getSingleProductBySlug(slug)

  return {
    props: {
      preview: Boolean(preview),
      product: product || null,
      ...ctx
    },
    revalidate: 20
  }
}

interface ICategoryPageStaticProps
  extends ICategoriesPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const ProductPage: React.FC<ICategoryPageStaticProps> = (props) => {
  const { product } = props

  return <SingleProductPage product={product} />
}

export default ProductPage
