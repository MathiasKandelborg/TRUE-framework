import * as MUI from '@material-ui/core'
import { Category } from 'cms/Category'
import { PageAnimation } from '../Layout'
import TitleAnimation from '../Layout/TitleAnimation'
import categoriesPageListStyles from './CategoriesListPage.styles'
import ListCategory from './ListCategory'

interface ICategoriesPageProps {
  categories: Category[]
}

const ListCategoriesPage: React.FC<ICategoriesPageProps> = (props) => {
  const { categories } = props

  const classes = categoriesPageListStyles()

  return (
    <MUI.Grid item xs={12} container>
      <TitleAnimation>
        <MUI.Typography variant="h2" component="h1" gutterBottom>
          Categories
        </MUI.Typography>
      </TitleAnimation>
      <MUI.Grid item xs={12}>
        <MUI.Divider variant="middle" light />
        <br />
      </MUI.Grid>
      <MUI.Grid item xs={12}>
        <PageAnimation layoutID="page">
          <MUI.Grid
            container
            justify="space-around"
            component={MUI.Paper}
            className={classes.paper}>
            <ListCategory categories={categories} />
          </MUI.Grid>
        </PageAnimation>
      </MUI.Grid>
    </MUI.Grid>
  )
}

export default ListCategoriesPage
