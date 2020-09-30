import SimpleBlockContent from '@components/CMS/PortableText/SimpleBlockContent'
import * as MUI from '@material-ui/core'
import { Product } from 'cms/Product'
import TitleWithDivider from '../../HoC/TitleWithDivider'
import { PageAnimation } from '../Layout'
import singleProductPageStyles from './ProductPage.styles'

interface ISingleProductPageProps {
  product: Product
}

const SingleProductPage: React.FC<ISingleProductPageProps> = (props) => {
  const { product } = props

  const classes = singleProductPageStyles()

  return (
    <>
      <TitleWithDivider variant="h1" text={product?.title} />

      <PageAnimation layoutID="page">
        <MUI.Grid container component={MUI.Paper} className={classes.paper}>
          <SimpleBlockContent blocks={product?.description} />
        </MUI.Grid>
      </PageAnimation>
    </>
  )
}

export default SingleProductPage
