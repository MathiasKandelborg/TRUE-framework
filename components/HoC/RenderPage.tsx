import RenderSections from '@components/CMS/RenderSections'
import { APIRoute } from 'cms/APIRoute'

const RenderPage: React.FC<{
  loading: boolean
  preview: boolean
  pageProps: APIRoute['page'] | undefined
}> = (props) => {
  const { preview, pageProps } = props

  const { title, content } = pageProps || { title: 'TITLE NOT FOUND' }

  if (preview) {
    /*     getPreviewRouteBySlug(props.routeId!)
    getPreviewPageListenerBySlug(_id || 'id not present') */

    return (
      <>
        <h2>PREVIEW MODE</h2>
        <h1>{title}</h1>

        <RenderSections sections={content} />
      </>
    )
  }

  return (
    <>
      <h1>{title}</h1>
      {content && <RenderSections sections={content} />}
    </>
  )
}

export default RenderPage
