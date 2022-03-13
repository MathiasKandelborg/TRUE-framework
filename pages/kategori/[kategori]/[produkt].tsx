import { GetStaticPaths } from 'next'
import generateProductParamsArr from '@util/generateProductParamsArr'
import ProductPage, {
  getStaticProps
} from '../../category/[category]/[product]'

export const getStaticPaths: GetStaticPaths = async () => {
  const paramsArr = await generateProductParamsArr('da')



  return {
    paths: !paramsArr[0]
      ? [{ params: { kategori: 'REDIRECT', produkt: 'REDIRECT' } }]
      : paramsArr,
    fallback: true
  }
}

export { getStaticProps }

export default ProductPage
