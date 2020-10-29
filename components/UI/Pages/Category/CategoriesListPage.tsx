import CustomAnimatePresence from '@components/HoC/Animation/CustomAnimatePresence'
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
    <CustomAnimatePresence layoutShift>
      <TitleWithDivider key="title" variant="h1" text="Categories" />

      <PageAnimation key="page">
        <MUI.Grid
          container
          justify="space-around"
          component={MUI.Paper}
          className={classes.paper}>
          <ListCategory categories={categories} />
        </MUI.Grid>
      </PageAnimation>
    </CustomAnimatePresence>
  )
}

export default CategoriesListPage
