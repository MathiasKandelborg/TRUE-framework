import RenderPage from '@components/HoC/RenderPage'
import PageSEO from '@components/HoC/SEO/Page'
import { APIRoute } from 'cms/APIRoute'
import { FC } from 'react'

interface ICustomPageDefaultProps {
  currentRoute: APIRoute
}

const CustomPageDefault: FC<ICustomPageDefaultProps> = (props) => {
  const { currentRoute } = props

  return (
    <>
      <PageSEO
        title={currentRoute.page.title}
        description={currentRoute.page.description}
      />
      <RenderPage
        preview={false}
        loading={false}
        pageProps={currentRoute.page}
      />
    </>
  )
}

export default CustomPageDefault
