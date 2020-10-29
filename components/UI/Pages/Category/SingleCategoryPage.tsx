import CustomAnimatePresence from '@components/HoC/Animation/CustomAnimatePresence'
import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import ListProduct from '@components/UI/Product/ListProduct'
import * as MUI from '@material-ui/core'
import { Category } from 'cms/Category'
import { Product } from 'cms/Product'
import categoriesPageListStyles from './CategoriesListPage.styles'

interface ICategoryPageProps {
  category: Category
  products: Product[]
}

const SingleCategoryPage: React.FC<ICategoryPageProps> = (props) => {
  const { products, category } = props

  const classes = categoriesPageListStyles()

  return (
    <CustomAnimatePresence layoutShift>
      <TitleWithDivider key="title" variant="h1" text={category?.title} />
      <PageAnimation key="page">
        <MUI.Grid
          container
          alignItems="center"
          justify="space-around"
          component={MUI.Paper}
          className={classes.paper}>
          <ListProduct
            categorySlug={category?.url?.current}
            products={products}
          />
        </MUI.Grid>
      </PageAnimation>
    </CustomAnimatePresence>
  )
}

export default SingleCategoryPage
