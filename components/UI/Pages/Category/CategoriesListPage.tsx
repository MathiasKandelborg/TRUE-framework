import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import ListCategory from '@components/UI/Category/ListCategory'
import * as MUI from '@material-ui/core'
import { Category } from 'cms/Category'
import categoriesPageListStyles from './CategoriesListPage.styles'

interface ICategoriesPageProps {
  categories: Category[]
}

const CategoriesListPage: React.FC<ICategoriesPageProps> = (props) => {
  const { categories } = props

  const classes = categoriesPageListStyles()

  return (
    <>
      <TitleWithDivider variant="h1" text="Categories" />

      <PageAnimation layoutID="page">
        <MUI.Grid
          container
          justify="space-around"
          component={MUI.Paper}
          className={classes.paper}>
          <ListCategory categories={categories} />
        </MUI.Grid>
      </PageAnimation>
    </>
  )
}

export default CategoriesListPage
