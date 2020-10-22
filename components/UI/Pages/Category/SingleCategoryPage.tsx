import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import ListProduct from '@components/UI/Product/ListProduct'
import * as MUI from '@material-ui/core'
import handleExitComplete from '@util/handleExitComplete'
import { Category } from 'cms/Category'
import { Product } from 'cms/Product'
import { AnimatePresence } from 'framer-motion'
import categoriesPageListStyles from './CategoriesListPage.styles'

interface ICategoryPageProps {
  category: Category
  products: Product[]
}

const SingleCategoryPage: React.FC<ICategoryPageProps> = (props) => {
  const { products, category } = props

  const classes = categoriesPageListStyles()

  return (
    <AnimatePresence
      presenceAffectsLayout
      onExitComplete={() => handleExitComplete()}>
      <TitleWithDivider variant="h1" text={category?.title} />
      <PageAnimation layoutID="page">
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
    </AnimatePresence>
  )
}

export default SingleCategoryPage
