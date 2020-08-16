/** @format */

import RenderSections from '@components/CMS/RenderSections'
import { PageAnimation } from '@components/UI'
import { Grid, Typography } from '@material-ui/core'
import routes from '@util/api/queries/routes'
import page from '@util/api/queries/singlePage'
import siteConfig from '@util/api/queries/siteConfig'
import Redirect from '@util/Redirect'
import resolveRoutes from '@util/resolveRoutes'
import client from '@util/sanity'
import { CONSTANTS, ui } from '@util/settings'
import { AllPagesProps } from 'AllPagesProps'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { IAppProps } from './_app'

interface IPageQueryResponse {
  slug: string
  title: string
  description: string
  disallowRobots: boolean
  content: [{ _type: string; _key: string; [key: string]: string }]
}

interface ICustomPageProps extends AllPagesProps {
  shouldRedirect: boolean
  currentPage: IPageQueryResponse
}

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const sanityRoutes = await client.fetch(routes)

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
  'materialUI' | 'config' | 'allRoutes'
>> = async (ctx) => {
  const params: { page: string } = {
    page:
      ctx.params && typeof ctx.params.page === 'string' ? ctx.params.page : ''
  }

  // Query the page defined by pageParam,
  const currentPage: {
    page: IPageQueryResponse
  } = await client.fetch(page, { slug: params.page })

  const what = await client
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
  const shouldRedirect = !currentPage || JSON.stringify(currentPage) === '{}'
  console.log(what)

  return {
    props: {
      ...ctx,
      ...what,
      pageParam: params,
      currentPage: currentPage.page || {},
      shouldRedirect
    },
    revalidate: 1
  }
}

interface IPageStaticProps
  extends AllPagesProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const CustomPage: React.FC<IPageStaticProps> = (props) => {
  const { currentPage, shouldRedirect, allRoutes } = props

  /* Client-side redirect until we can use rewrites in getStaticProps
   // TODO: check for updates: https://github.com/vercel/next.js/discussions/14890
   */
  if (shouldRedirect) {
    return <Redirect to="/404" />
  }

  if (currentPage && currentPage.title && allRoutes) {
    const { title, content, description } = currentPage

    return (
      <>
        <NextSeo
          title={title}
          description={description}
          noindex={currentPage.disallowRobots}
        />
        <PageAnimation layoutID="layout">
          <h1>{title}</h1>
          {content && <RenderSections sections={content} />}
        </PageAnimation>
      </>
    )
  }

  /* This should be stripped in production bundles */
  if (CONSTANTS.DEV) {
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

  // Create an empty page if window is undefined,
  // as we can't know if currentPage exists
  // This is perfect for skeletons and stuff
  return <PageAnimation layoutID="layout" />
}

export default CustomPage
