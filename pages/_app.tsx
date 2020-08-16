/** @format */

import { Layout } from '@components/UI'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { common } from '@util/settings'
import store from '@util/shared/createStore'
import MainTheme from '@util/themes/MainTheme'
import { StoreProvider } from 'easy-peasy'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
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
  }
}

function MyApp(props: IAppProps) {
  const { Component, pageProps } = props

  const { config } = pageProps

  const router = useRouter()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  const strippedAsPathRoute = !router.asPath[1]
    ? router.asPath.split('/').join('/')
    : router.asPath

  const canonicalRoute = `${
    (config && config.url) || process.env.NEXT_PUBLIC_PROJECT_URL!
  }${strippedAsPathRoute}`

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
          <Layout routes={pageProps.allRoutes || common.staticRoutes}>
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
