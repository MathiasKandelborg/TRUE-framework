import RenderPage from '@components/HoC/RenderPage'
import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { MutationEvent } from '@sanity/client'
import { getClient } from '@util/api'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import getPageAndRouteByRoute from '@util/api/calls/getSinglePageByRoute'
import routes from '@util/api/queries/allRoutes'
import { CONSTANTS, ui } from '@util/settings'
import { APIRoute } from 'cms/APIRoute'
import groq from 'groq'
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { PageProps } from 'PageProps'
import { useEffect, useState } from 'react'

interface ICustomPageProps extends PageProps, GetStaticPropsContext {
  currentRoute: APIRoute | null
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticPaths = async (hmm: unknown) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.info(`GetStaticPathsObj: ${hmm}`)
  const sanityRoutes: Array<{ slug: { current: string } }> = await getClient(
    false
  ).fetch(routes)

  const routeParams: { params: { page: string } }[] = []

  sanityRoutes.forEach((route) =>
    routeParams.push({
      params: { page: `${route.slug.current}` }
    })
  )

  // eslint-disable-next-line no-console
  console.dir(routeParams)

  return {
    paths: !routeParams[0] ? [{ params: { page: 'REDIRECT' } }] : routeParams,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ICustomPageProps> = async (ctx) => {
  const { preview, params } = ctx
  // eslint-disable-next-line no-console
  console.log(ctx)
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

  const router = useRouter()

  /*   const { data, error } = useSWR(
    routeToFetch,
    () => getPageAndRouteByRoute(routeToFetch),
    {
      refreshInterval: 10,
      initialData: currentRoute
    }
  ) */

  /* This should be stripped in production bundles */
  if (CONSTANTS.DEV && !currentRoute)
    return (
      <div
        style={{
          width: `calc(100vw - ${ui.CONSTANTS.DRAWER_WIDTH}px)`,
          paddingTop: 60
        }}
        className="Pretty dev render page hack">
        <PageAnimation layoutID="layout">
          <MUI.Grid container alignContent="center" justify="center">
            <MUI.Grid item xs={12}>
              <MUI.Typography align="center" variant="subtitle1">
                Pages are generated on each request in dev mode. <br />
                <br />
                <b>In production this page won&apos;t show.</b>
              </MUI.Typography>
            </MUI.Grid>
          </MUI.Grid>
        </PageAnimation>
      </div>
    )

  if (preview) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageData, setRouteData] = useState(currentRoute)

    const routeId = currentRoute?._id
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
    }, [preview, routeId])

    return (
      <>
        <NextSeo
          title={pageData?.page?.title || 'loading'}
          description={pageData?.page?.description || 'loading'}
          noindex={pageData?.disallowRobots || false}
        />
        <RenderPage
          preview
          loading={router.isFallback}
          pageProps={pageData?.page}
        />
      </>
    )
  }

  if (currentRoute && currentRoute.page) {
    return (
      <>
        <NextSeo
          title={currentRoute.page.title}
          description={currentRoute.page.description}
          noindex={currentRoute.disallowRobots}
        />
        <PageAnimation layoutID="layout">
          <RenderPage
            preview={false}
            loading={false}
            pageProps={currentRoute.page}
          />
        </PageAnimation>
      </>
    )
  }

  // Create an empty page if window is undefined,
  // as we can't know if currentPage exists
  // This is perfect for skeletons and stuff
  return <PageAnimation layoutID="layout" />
}

export default CustomPage
