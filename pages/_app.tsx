import DefaultSEO from '@components/HoC/SEO/Default'
import LogoSEO from '@components/HoC/SEO/Logo'
import { Layout } from '@components/UI'
import ListMenuItems from '@components/UI/Layout/Drawer/MenuItemsArr'
import * as MUI from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import canonicalRoute from '@util/canonicalRoute'
import store from '@util/shared/createStore'
import MainTheme from '@util/themes/MainTheme'
import { StoreProvider } from 'easy-peasy'
import { AnimateSharedLayout } from 'framer-motion'
import { AppProps } from 'next/app'
import { PageProps } from 'PageProps'
import { appWithTranslation } from 'next-i18next'
import createEmotionCache from '@util/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

export interface IAppProps extends AppProps {
  emotionCache?: EmotionCache
  pageProps: PageProps
}

/**
 * [Custom app component](https://nextjs.org/docs/advanced-features/custom-app)
 *
 * @param {IAppProps} props Global app props
 * @returns {JSX.Element} The App
 */
function MyApp(props: IAppProps): JSX.Element {
  const {
    Component,
    pageProps,
    router,
    emotionCache = clientSideEmotionCache
  } = props
  const { preview, allRoutes } = pageProps

  const currentRoute = canonicalRoute(router)

  return (
    <>
      <StoreProvider store={store}>
        <CacheProvider value={emotionCache}>
          <DefaultSEO canonicalRoute={currentRoute} />
          <LogoSEO canonicalRoute={currentRoute} />

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
        </CacheProvider>
      </StoreProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
