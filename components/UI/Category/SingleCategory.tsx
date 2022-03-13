import SimpleBlockContent from '@components/CMS/PortableText/SimpleBlockContent'
import * as MUI from '@mui/material'
import { Category } from 'cms/Category'
import Link from 'next/link'

const SingleCategory: React.FC<Category> = (props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, description, url, __i18n_lang } = props

  const localeRoute = () => {
    let routeName = 'category'
    switch (__i18n_lang) {
      case 'da':
        routeName = 'kategori'
        break
      case 'en':
        routeName = 'category'
        break
      default:
        console.error('Next i18n not enabled')
    }

    return [`/${routeName}`, `/${routeName}/[${routeName}]`]
  }

  return (
    <MUI.Card>
      <Link
        passHref
        as={`${localeRoute()[0]}/${url.current}`}
        href={localeRoute()[1]}>
        <MUI.CardActionArea>
          <MUI.CardHeader title={title} />
          <MUI.CardContent>
            <SimpleBlockContent blocks={description} />
          </MUI.CardContent>
        </MUI.CardActionArea>
      </Link>
    </MUI.Card>
  )
}

export default SingleCategory
