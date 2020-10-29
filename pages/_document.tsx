import * as MUI from '@material-ui/core'
import { seo, ui } from '@util/settings'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
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
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<{
    styles: JSX.Element[]
    html: string
    head?: (JSX.Element | null)[] | undefined
  }> {
    const sheets = new MUI.ServerStyleSheets()

    // Ease the reading of the following `renderPage` declaration
    const originalRenderPage = ctx.renderPage

    // Render app and page and get the context of the page with collected side effects.
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,

      // Styles fragment is rendered after app and page rendering finish.
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      ]
    }
  }

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
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
