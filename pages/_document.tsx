import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import { seo, ui } from '@util/settings'
import createEmotionCache from '@util/createEmotionCache'

export default class MyDocument extends Document {
  render(): JSX.Element {
    const { title, applicationName } = seo

    return (
      <Html>
        {/* DO NOT POPULATE THIS HEAD COMPONENT WITH COMMON TAGS
         * I.E DO NOT PUT `title` or `description` or social media tags here
         *
         * Use the dedicated SEO components in `components/SEO` */}
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="application-name" content={applicationName} />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/TRUE-logo/TRUE-logo-16.svg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/TRUE-logo/TRUE-logo-32.svg"
          />

          <link
            rel="mask-icon"
            href="/images/TRUE-logo/TRUE-logo-16.svg"
            color="#0097a7"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/TRUE-logo/logo-180-white.png"
          />
          <meta name="msapplication-TileColor" content={ui.MainColor[700]} />
          <meta name="theme-color" content={ui.MainColor[700]} />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        }
    })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags
  }
}
