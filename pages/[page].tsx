import { PageAnimation } from '@components/UI'
import CustomPageDefault from '@components/UI/Pages/page/DefaultPage'
import CustomPagePreview from '@components/UI/Pages/page/PreviewPage'
import { getClient } from '@util/api'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import getPageAndRouteByRoute from '@util/api/calls/getSinglePageByRoute'
import routes from '@util/api/queries/allRoutes'
import { APIRoute } from 'cms/APIRoute'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import { PageProps } from 'PageProps'

interface ICustomPageProps extends PageProps, GetStaticPropsContext {
  currentRoute: APIRoute | null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sanityRoutes: Array<{ slug: { current: string } }> = await getClient(
    false
  ).fetch(routes)

  const routeParams: { params: { page: string } }[] = []

  sanityRoutes.forEach((route) =>
    routeParams.push({
      params: { page: `${route.slug.current}` }
    })
  )

  return {
    paths: !routeParams[0] ? [{ params: { page: 'REDIRECT' } }] : routeParams,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ICustomPageProps> = async (ctx) => {
  const { preview, params } = ctx
  const config = await getSanityConfig()

  const page = params && typeof params.page === 'string' ? params.page : ''

  const fetchedRoute: APIRoute = await getPageAndRouteByRoute({
    pageSlug: page
  })

  if (!fetchedRoute || !fetchedRoute._id) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      ...config,
      preview: Boolean(preview),
      currentRoute: fetchedRoute,
      ...ctx
    },
    revalidate: 10
  }
}

const CustomPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const { currentRoute, preview } = props

  if (preview && currentRoute) {
    return <CustomPagePreview currentRoute={currentRoute} />
  }

  if (currentRoute && currentRoute.page) {
    return <CustomPageDefault currentRoute={currentRoute} />
  }

  // We usually never make it here, it means we didn't catch some behavior.
  return <PageAnimation layoutID="layout" />
}

export default CustomPage
