import RenderPage from '@components/HoC/RenderPage'
import PageSEO from '@components/HoC/SEO/Page'
import { MutationEvent } from '@sanity/client'
import { getClient } from '@util/api'
import { APIRoute } from 'cms/APIRoute'
import groq from 'groq'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface ICustomPagePreviewProps {
  currentRoute: APIRoute
}

const CustomPagePreview: React.FC<ICustomPagePreviewProps> = (props) => {
  const { currentRoute } = props

  const router = useRouter()
  const [pageData, setRouteData] = useState(currentRoute)

  const routeId = currentRoute?._id

  useEffect(() => {
    const sub = getClient(true)
      .listen(groq`*[_type == "route" && _id == $routeId][0]`, {
        routeId
      })
      .subscribe(
        (update: MutationEvent<APIRoute>) => {
          const pageRes = update.result

          if (pageRes) setRouteData(pageRes)
        },
        (err) => console.error(err),
        () => {}
      )

    return () => sub.unsubscribe()
  }, [routeId])

  return (
    <>
      <PageSEO
        title={pageData?.page?.title || 'loading'}
        description={pageData?.page?.description || 'loading'}
      />
      <RenderPage
        preview
        loading={router.isFallback}
        pageProps={pageData?.page}
      />
    </>
  )
}

export default CustomPagePreview
