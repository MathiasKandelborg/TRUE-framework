import * as MUI from '@material-ui/core'
import { Category } from 'cms/Category'
import { Product } from 'cms/Product'
import { PageAnimation } from '../Layout'
import TitleAnimation from '../Layout/TitleAnimation'
import ListProduct from '../Product/ListProduct'
import TitleDivider from '../TitleDivider'
import categoriesPageListStyles from './CategoriesListPage.styles'

interface ICategoryPageProps {
  category: Category
  products: Product[]
}

const SingleCategoryPage: React.FC<ICategoryPageProps> = (props) => {
  const { products, category } = props

  const classes = categoriesPageListStyles()

  return (
    <MUI.Grid item xs={12} container>
      <TitleAnimation>
        <MUI.Typography variant="h1" component="h2" gutterBottom>
          {category?.title}
        </MUI.Typography>
      </TitleAnimation>
      <TitleDivider />
      <MUI.Grid item xs={12}>
        <PageAnimation layoutID="page">
          <MUI.Grid
            container
            alignItems="center"
            justify="space-around"
            component={MUI.Paper}
            className={classes.paper}>
            <ListProduct
              categorySlug={category?.url.current}
              products={products}
            />
          </MUI.Grid>
        </PageAnimation>
      </MUI.Grid>
    </MUI.Grid>
  )
}

export default SingleCategoryPage
