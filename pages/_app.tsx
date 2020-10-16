import DefaultSEO from '@components/HoC/SEO/Default'
import LogoSEO from '@components/HoC/SEO/Logo'
import { Layout } from '@components/UI'
import ListMenuItems from '@components/UI/Layout/Drawer/MenuItemsArr'
import * as MUI from '@material-ui/core'
import canonicalRoute from '@util/canonicalRoute'
import store from '@util/shared/createStore'
import MainTheme from '@util/themes/MainTheme'
import { StoreProvider } from 'easy-peasy'
import { AnimateSharedLayout } from 'framer-motion'
import { AppProps } from 'next/app'
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

  const currentRoute = canonicalRoute(router)

  return (
    <>
      <DefaultSEO canonicalRoute={currentRoute} />
      <LogoSEO canonicalRoute={currentRoute} />

      <StoreProvider store={store}>
        <MUI.ThemeProvider theme={MainTheme}>
          <MUI.CssBaseline />
          <AnimateSharedLayout type="crossfade">
            <Layout
              preview={preview}
              MenuItems={<ListMenuItems allRoutes={allRoutes} />}>
              <Component key={currentRoute} {...pageProps} />
            </Layout>
          </AnimateSharedLayout>
        </MUI.ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default MyApp
