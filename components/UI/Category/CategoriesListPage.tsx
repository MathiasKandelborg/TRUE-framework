import * as MUI from '@material-ui/core'
import { Category } from 'cms/Category'
import TitleWithDivider from '../../HoC/TitleWithDivider'
import { PageAnimation } from '../Layout'
import categoriesPageListStyles from './CategoriesListPage.styles'
import ListCategory from './ListCategory'

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
