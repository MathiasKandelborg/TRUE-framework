import * as MUI from '@material-ui/core'
import { Product } from 'cms/Product'
import SingleProduct from './SingleProduct'

interface IListProductProps {
  products: Product[]
  categorySlug: string
}

const ListProduct: React.FC<IListProductProps> = (props) => {
  const { products, categorySlug } = props

  return (
    <>
      {products?.map((product) => (
        <MUI.Grid key={product._id} item xs={12} md={4}>
          <SingleProduct categorySlug={categorySlug} product={{ ...product }} />
        </MUI.Grid>
      ))}
    </>
  )
}

export default ListProduct
