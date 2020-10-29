import * as MUI from '@material-ui/core'
import { Category } from 'cms/Category'
import SingleCategory from './SingleCategory'

const ListCategory: React.FC<{ categories: Category[] }> = (props) => {
  const { categories } = props

  return (
    <>
      {categories.map((category) => (
        <MUI.Grid key={category._id} item xs={12} md={4}>
          <SingleCategory {...category} />
        </MUI.Grid>
      ))}
    </>
  )
}

export default ListCategory
