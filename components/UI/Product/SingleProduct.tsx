import SimpleBlockContent from '@components/CMS/PortableText/SimpleBlockContent'
import * as MUI from '@mui/material'
import { Product } from 'cms/Product'
import Link from 'next/link'

interface ISingleProductProps {
  product: Product
  categorySlug: string
}

const SingleProduct: React.FC<ISingleProductProps> = (props) => {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    product: { title, description, url, __i18n_lang },
    categorySlug
  } = props

  const localeRoute = () => {
    let routeName = 'category'
    let subRouteName = 'product'
    switch (__i18n_lang) {
      case 'da':
        routeName = 'kategori'
        subRouteName = 'produkt'
        break
      case 'en':
        routeName = 'category'
        subRouteName = 'product'
        break
      default:
        console.error('Next i18n not enabled')
    }

    return [`/${routeName}`, `/${routeName}/[${routeName}]/[${subRouteName}]`]

    //    console.error('Something weird is happening for SingleProduct.tsx')

    //  return ['']
  }

  return (
    <MUI.Card>
      <Link
        as={`${localeRoute()[0]}/${categorySlug}/${url.current}`}
        href={localeRoute()[1]}
        passHref>
        <MUI.CardActionArea component="a">
          <MUI.CardHeader title={title} />
          <MUI.CardContent>
            <MUI.Typography component="div">
              <SimpleBlockContent blocks={description} />
            </MUI.Typography>
          </MUI.CardContent>
        </MUI.CardActionArea>
      </Link>
    </MUI.Card>
  )
}

export default SingleProduct
