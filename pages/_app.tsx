/** @format */

import { Layout } from '@components/UI'
import MenuItem from '@components/UI/Layout/Drawer/MenuItem'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { getClient } from '@util/api'
import siteConfig from '@util/api/queries/siteConfig'
import resolveRoutes from '@util/resolveRoutes'
import { CONSTANTS } from '@util/settings'
import store from '@util/shared/createStore'
import MainTheme from '@util/themes/MainTheme'
import { AllPagesProps } from 'AllPagesProps'
import { StoreProvider } from 'easy-peasy'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

export interface IAppProps extends AppProps, AllPagesProps {
  pageProps: {
    allRoutes: Array<{ route: string; as: string }>
    config: {
      title: string
      url: string
      logo: {
        asset: { extension: string; url: string }
      }
      mainNavigation: [{ slug: { _type: string; current: string } }]
      footerNavigation: [{ slug: string }]
    }
    preview: boolean
  }
}

function MyApp(props: IAppProps) {
  const { Component, pageProps, router, sanityConfig } = props

  const { config, preview } = pageProps

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  const rs = sanityConfig?.allRoutes

  const MenuItemsArr = rs.map((r, i) => {
    return (
      <MenuItem
        key={`menu-item-${i.toString()}`}
        text={r.as}
        as={r.as}
        route={r.route}
        routes={rs}
      />
    )
  })

  /* TODO: Extract to util */
  const strippedAsPathRoute = !router.asPath[1]
    ? router.asPath.split('/').join('/')
    : router.asPath

  /* TODO: Extract to common settings obj */
  const hostname =
    (config && config.url) || process.env.NEXT_PUBLIC_PROJECT_URL!

  /* TODO: Extract to common settings obj */
  const canonicalRoute = CONSTANTS.DEV
    ? `https://localhost:3000${strippedAsPathRoute}`
    : `https://${hostname}:3000${strippedAsPathRoute}`

  return (
    <>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo
        canonical={canonicalRoute}
        /*
         * https://github.com/garmeeh/next-seo#title-template
         */
        titleTemplate="%s | TRUE Framework"
      />

      <StoreProvider store={store}>
        <ThemeProvider theme={MainTheme}>
          <CssBaseline />
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence exitBeforeEnter>
              <Layout preview={preview} MenuItems={MenuItemsArr}>
                <Component
                  key={canonicalRoute}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...sanityConfig}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...pageProps}
                />
              </Layout>
            </AnimatePresence>
          </AnimateSharedLayout>
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  const sanityConfig = await getClient(false)
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

  return { ...appProps, sanityConfig }
}

export default MyApp
