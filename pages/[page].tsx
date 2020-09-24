import RenderPage from '@components/HoC/RenderPage'
import { PageAnimation } from '@components/UI'
import { Grid, Typography } from '@material-ui/core'
import { MutationEvent } from '@sanity/client'
import { getClient } from '@util/api'
import getPageAndRouteByRoute from '@util/api/calls/getPageByRoute'
import routes from '@util/api/queries/routes'
import { CONSTANTS, ui } from '@util/settings'
import { PageProps } from 'PageProps'
import { APIRoute } from 'APITypes'
import groq from 'groq'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface ICustomPageProps extends PageProps {
  currentRoute: APIRoute | null
  preview: boolean
  previewData?: Record<string, string>
}

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const sanityRoutes = await getClient(false).fetch(routes)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const routeParams: [{ params: { page: string } }] = []
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  await JSON.parse(JSON.stringify(sanityRoutes)).forEach(
    (route: { slug: { current: string } }) => {
      routeParams.push({ params: { page: `/${route.slug.current}` } })
    }
  )

  return {
    paths: !routeParams[0] ? [{ params: { page: 'REDIRECT' } }] : routeParams,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Omit<
  ICustomPageProps,
  'config' | 'allRoutes' | 'sanityConfig'
>> = async (ctx) => {
  const { preview, params } = ctx

  const page = params && typeof params.page === 'string' ? params.page : ''
  // Query the routed page defined by params.page,
  const fetchedRoute: APIRoute = await getPageAndRouteByRoute(
    page,
    Boolean(preview)
  )

  // console.log(`current route: ${JSON.stringify(fetchedRoute)}`)

  /*   const sanityConfig = await getClient(Boolean(preview))
    .fetch(siteConfig)
    .then((config: IAppProps['pageProps']['config']) => {
      if (config) {
        const sanityRoutes: [{ slug: { _type: string; current: string } }] =
          config.mainNavigation

        return {
          config,
          allRoutes: resolveRoutes(sanityRoutes)
        }
      }

      return Error('Could not fetch sanity config. This is REALLY REALLY BAD.')
    }) */

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  return {
    props: {
      preview: Boolean(preview),
      currentRoute: fetchedRoute || null,
      ...ctx
    },
    revalidate: 1
  }
}

interface IPageStaticProps
  extends PageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const CustomPage: React.FC<IPageStaticProps> = (props) => {
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
          <Grid container alignContent="center" justify="center">
            <Grid item xs={12}>
              <Typography align="center" variant="subtitle1">
                Pages are generated on each request in dev mode. <br />
                <br />
                <b>In production this page won&apos;t show.</b>
              </Typography>
            </Grid>
          </Grid>
        </PageAnimation>
      </div>
    )

  if (preview) {
    /*  const routeToFetch = routeData?.slug?.current
      ? routeData?.slug?.current
      : router.asPath.split('/')[1] */

    /*   getPreviewRouteListenerBySlug(routeToFetch, setRouteData) */

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
            console.log('Page subscribe update')
            const pageRes = update.result

            console.log(`Page is updated: ${JSON.stringify(pageRes, null, 2)}`)

            console.log(`There is an update!: ${JSON.stringify(update)}`)

            console.log(update.mutations)

            if (pageRes) setRouteData(pageRes)
          },
          (err) => console.log(err),
          () => console.log('complete')
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
        <PageAnimation layoutID="layout">
          IS {pageData?._rev}
          <RenderPage
            preview
            loading={router.isFallback}
            pageProps={pageData?.page}
          />
        </PageAnimation>
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
