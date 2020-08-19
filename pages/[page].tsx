/** @format */

import RenderSections from '@components/CMS/RenderSections'
import { PageAnimation } from '@components/UI'
import { Grid, Typography } from '@material-ui/core'
import { getClient } from '@util/api'
import getPageAndRouteByRoute from '@util/api/calls/getPageByRoute'
import routes from '@util/api/queries/routes'
import siteConfig from '@util/api/queries/siteConfig'
import { TSitemapQueryRoute } from '@util/createRoutesForSitemap'
import Redirect from '@util/Redirect'
import resolveRoutes from '@util/resolveRoutes'
import { CONSTANTS, ui } from '@util/settings'
import { AllPagesProps } from 'AllPagesProps'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { IAppProps } from './_app'

type TSiteRoute = Omit<TSitemapQueryRoute, '_type'>

interface ICustomPageProps extends AllPagesProps {
  shouldRedirect: boolean
  currentRoute: TSiteRoute | null
  preview: boolean
  previewData?: Record<string, string>
}

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const sanityRoutes = await getClient(false).fetch(routes)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // It's late, I'm tired, need caffeine... Make sure pageParam is = {  page: string }
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
  'config' | 'allRoutes'
>> = async (ctx) => {
  const { preview = false, params } = ctx

  const page = params && typeof params.page === 'string' ? params.page : ''
  // Query the routed page defined by params.page,
  const fetchedRoute: TSitemapQueryRoute = await getPageAndRouteByRoute(
    page,
    preview
  )

  console.log(`current route: ${JSON.stringify(fetchedRoute)}`)

  const sanityConfig = await getClient(preview)
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
    })

  // If the page requested doesn't exist, this is true
  const shouldRedirect = Boolean(
    fetchedRoute === null || !(fetchedRoute && fetchedRoute.page)
  )

  return {
    props: {
      preview,
      shouldRedirect,
      currentRoute: fetchedRoute && fetchedRoute ? fetchedRoute : null,
      ...sanityConfig,
      ...ctx
    },
    revalidate: 1
  }
}

const RenderPreviewPage: React.FC<{
  loading: boolean
  pageProps: TSiteRoute['page']
}> = (props) => {
  const { loading, pageProps: routeProps } = props

  const { title, content } = routeProps

  if (loading) {
    return (
      <>
        <h1>{title}</h1>
        <h2>PREVIEW MODE</h2>
        <p>LOADING...</p>
      </>
    )
  }

  /*  console.log(`ROUTEPROPS: ${JSON.stringify(routeProps)}`) */

  return (
    <>
      <h1>{title}</h1>
      <h2>PREVIEW MODE</h2>
      {content && <RenderSections sections={content} />}
    </>
  )
}

interface IPageStaticProps
  extends AllPagesProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const CustomPage: React.FC<IPageStaticProps> = (props) => {
  const { currentRoute, preview } = props
  const page = currentRoute?.page

  const router = useRouter()
  const shouldRedirect = router.isFallback

  const routeToFetch = page?.slug ? page.slug : router.asPath.split('/')[1]

  // eslint-disable-next-line react-hooks/rules-of-hooks,@typescript-eslint/no-unsafe-assignment
  const { data, error } = useSWR(
    routeToFetch,
    () => getPageAndRouteByRoute(routeToFetch),
    {
      refreshInterval: 1,
      initialData: currentRoute
    }
  )

  if (preview && !router.isFallback) {
    if (!data)
      return (
        <PageAnimation layoutID="layout">
          <RenderPreviewPage loading pageProps={data.page} />
        </PageAnimation>
      )

    if (error) return <></>

    /*   console.log(data) */

    if (data)
      return (
        <>
          <NextSeo
            title={data.page.title}
            description={data.page.description}
            noindex={data.disallowRobot}
          />
          <PageAnimation layoutID="layout">
            <RenderPreviewPage loading={false} pageProps={data.page} />
          </PageAnimation>
        </>
      )
  }
  /* Client-side redirect until we can use rewrites in getStaticProps
   // TODO: check for updates: https://github.com/vercel/next.js/discussions/14890
   */
  if (!CONSTANTS.DEV && shouldRedirect) {
    return <Redirect to="/" />
  }

  /* This should be stripped in production bundles */
  if (CONSTANTS.DEV && !currentRoute) {
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
                I am generated on each request in dev mode. <br />
                <br />
                <b>In production this page won&apos;t show.</b>
              </Typography>
            </Grid>
          </Grid>
        </PageAnimation>
      </div>
    )
  }

  if (currentRoute && currentRoute.page)
    return (
      <>
        <NextSeo
          title={currentRoute.page.title}
          description={currentRoute.page.description}
          noindex={currentRoute.disallowRobot}
        />
        <PageAnimation layoutID="layout">
          <RenderPreviewPage loading={false} pageProps={currentRoute.page} />
        </PageAnimation>
      </>
    )

  // Create an empty page if window is undefined,
  // as we can't know if currentPage exists
  // This is perfect for skeletons and stuff
  return <PageAnimation layoutID="layout" />
}

export default CustomPage
