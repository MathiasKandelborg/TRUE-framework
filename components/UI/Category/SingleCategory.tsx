import SimpleBlockContent from '@components/CMS/PortableText/SimpleBlockContent'
import { NakedLink } from '@components/HoC'
import * as MUI from '@material-ui/core'
import { Category } from 'cms/Category'

const SingleCategory: React.FC<Category> = (props) => {
  const { title, description, url } = props

  return (
    <MUI.Card>
      <MUI.CardActionArea
        component={NakedLink}
        as={`/category/${url.current}`}
        href="/category/[category]">
        <MUI.CardHeader title={title} />
        <MUI.CardContent>
          <SimpleBlockContent blocks={description} />
        </MUI.CardContent>
      </MUI.CardActionArea>
    </MUI.Card>
  )
}

export default SingleCategory
