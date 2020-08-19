/** @format */

import { Layout } from '@components/UI'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { common, CONSTANTS } from '@util/settings'
import store from '@util/shared/createStore'
import MainTheme from '@util/themes/MainTheme'
import { StoreProvider } from 'easy-peasy'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

export interface IAppProps extends AppProps {
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
    preview?: boolean
  }
}

function MyApp(props: IAppProps) {
  const { Component, pageProps, router } = props

  const { config, preview = false } = pageProps

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

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
          <Layout
            preview={preview}
            routes={pageProps.allRoutes || common.staticRoutes}>
            <AnimateSharedLayout type="crossfade">
              <AnimatePresence exitBeforeEnter>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} key={canonicalRoute} />
              </AnimatePresence>
            </AnimateSharedLayout>
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default MyApp
