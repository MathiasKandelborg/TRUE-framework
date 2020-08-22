/** @format */

import RenderSections from '@components/CMS/RenderSections'
import { APIRoute } from 'APITypes'

const RenderPage: React.FC<{
  loading: boolean
  preview: boolean

  pageProps: APIRoute['page'] | undefined
}> = (props) => {
  const { preview, loading, pageProps } = props

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { title, content } = pageProps || { title: 'TITLE NOT FOUND' }

  // console.log(`ROUTEPROPS: ${JSON.stringify(content)}`)
  console.log(props)
  if (preview) {
    /*     getPreviewRouteBySlug(props.routeId!)
    getPreviewPageListenerBySlug(_id || 'id not present') */

    return (
      <>
        <h2>PREVIEW MODE</h2>
        <h1>{title}</h1>

        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
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
