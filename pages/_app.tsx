import { Layout } from '@components/UI'
import MenuItem from '@components/UI/Layout/Drawer/MenuItem'
import * as MUI from '@material-ui/core'
import { getClient } from '@util/api'
import siteConfig from '@util/api/queries/singleSiteConfig'
import resolveRoutes from '@util/resolveRoutes'
import { CONSTANTS } from '@util/settings'
import store from '@util/shared/createStore'
import MainTheme from '@util/themes/MainTheme'
import { StoreProvider } from 'easy-peasy'
import { AnimateSharedLayout } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { PageProps } from 'PageProps'
import { useEffect } from 'react'

export interface IAppProps extends AppProps {
  pageProps: PageProps
}

/**
 * [Custom app component](https://nextjs.org/docs/advanced-features/custom-app)
 *
 * @param {IAppProps} props Global app props
 * @returns {JSX.Element} The App
 */
function MyApp(props: IAppProps): JSX.Element {
  const { Component, pageProps, router } = props

  const { preview, allRoutes } = pageProps

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  const MenuItemsArr = allRoutes?.map((r, i) => (
    <MenuItem
      key={`menu-item-${i.toString()}`}
      text={r.name}
      as={r.as}
      route={r.route}
    />
  ))

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const hostname = process.env.NEXT_PUBLIC_HOSTNAME!

  const canonicalRoute = CONSTANTS.DEV
    ? `https://localhost:3000${router.asPath}`
    : `${hostname}${router.asPath}`

  return (
    <>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width "
        />
      </Head>
      <DefaultSeo
        canonical={canonicalRoute}
        /*
         * https://github.com/garmeeh/next-seo#title-template
         */
        titleTemplate="%s | TRUE Framework"
        title="Set my title"
      />

      <StoreProvider store={store}>
        <MUI.ThemeProvider theme={MainTheme}>
          <MUI.CssBaseline />
          <AnimateSharedLayout type="crossfade">
            <Layout preview={preview} MenuItems={MenuItemsArr}>
              <Component key={canonicalRoute} {...pageProps} />
            </Layout>
          </AnimateSharedLayout>
        </MUI.ThemeProvider>
      </StoreProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  await getClient(false)
    .fetch(siteConfig)
    .then((config: IAppProps['pageProps']['config']) => {
      if (config) {
        const sanityRoutes: PageProps['config']['mainNavigation'] =
          config.mainNavigation

        appProps.pageProps = {
          config,
          allRoutes: resolveRoutes(sanityRoutes)
        }
      }

      return Error('Could not fetch sanity config. This is REALLY REALLY BAD.')
    })

  return { ...appProps }
}

export default MyApp
