import RenderSections from '@components/CMS/RenderSections'
import { PageAnimation, TitleAnimation } from '@components/UI'
import { APIRoute } from 'cms/APIRoute'
import { AnimatePresence } from 'framer-motion'

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
      <AnimatePresence>
        <TitleAnimation key="title">
          <h1>{title}</h1>
        </TitleAnimation>
        <PageAnimation key="title">
          {content && <RenderSections sections={content} />}
        </PageAnimation>
      </AnimatePresence>
    </>
  )
}

export default RenderPage
