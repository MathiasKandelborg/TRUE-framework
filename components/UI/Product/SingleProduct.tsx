import SimpleBlockContent from '@components/CMS/PortableText/SimpleBlockContent'
import { NakedLink } from '@components/HoC'
import * as MUI from '@material-ui/core'
import { Product } from 'cms/Product'

interface ISingleProductProps {
  product: Product
  categorySlug: string
}

const SingleProduct: React.FC<ISingleProductProps> = (props) => {
  const { product: { title, description, url}, categorySlug  } = props

  return (
    <MUI.Card>
      <MUI.CardActionArea
        component={NakedLink}
        as={`/category/${categorySlug}/${url.current}`}
        href="/category/[category]/[product]">
        <MUI.CardHeader title={title} />
        <MUI.CardContent>
          <SimpleBlockContent blocks={description} />
        </MUI.CardContent>
      </MUI.CardActionArea>
    </MUI.Card>
  )
}

export default SingleProduct
