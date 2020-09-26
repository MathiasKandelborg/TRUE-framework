import SimpleBlockContent from '@components/CMS/PortableText/SimpleBlockContent'
import * as MUI from '@material-ui/core'
import { Product } from 'cms/Product'
import { PageAnimation } from '../Layout'
import TitleAnimation from '../Layout/TitleAnimation'
import singleProductPageStyles from './ProductPage.styles'

interface ISingleProductPageProps {
  product: Product
}

const SingleProductPage: React.FC<ISingleProductPageProps> = (props) => {
  const { product } = props

  const classes = singleProductPageStyles()

  return (
    <MUI.Grid item xs={12} container>
      <TitleAnimation>
        <MUI.Typography variant="h1" component="h2" gutterBottom>
          {product?.title}
        </MUI.Typography>
      </TitleAnimation>

      <MUI.Divider flexItem variant="middle" light />
      <br />
      <MUI.Grid container component={MUI.Paper} className={classes.paper}>
        <PageAnimation layoutID="page">
          <SimpleBlockContent blocks={product?.description} />
        </PageAnimation>
      </MUI.Grid>
    </MUI.Grid>
  )
}

export default SingleProductPage
