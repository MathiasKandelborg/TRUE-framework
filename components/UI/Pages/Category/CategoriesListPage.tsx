import CustomAnimatePresence from '@components/HoC/Animation/CustomAnimatePresence'
import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import ListCategory from '@components/UI/Category/ListCategory'
import * as MUI from '@mui/material'
import { Category } from 'cms/Category'

interface ICategoriesPageProps {
  categories: Category[]
  locale: string
}

const CategoriesListPage: React.FC<ICategoriesPageProps> = (props) => {
  const { categories } = props

  return (
    <CustomAnimatePresence layoutShift>
      <TitleWithDivider key="title" variant="h1" text="categories" />

      <PageAnimation key="page">
        <MUI.Grid
          container
          justifyContent="space-around"
          component={MUI.Paper}
          sx={{ p: 2 }}>
          <ListCategory categories={categories} />
        </MUI.Grid>
      </PageAnimation>
    </CustomAnimatePresence>
  )
}

export default CategoriesListPage
