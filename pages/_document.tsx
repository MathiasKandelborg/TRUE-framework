import * as MUI from '@material-ui/core'
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
    return (
      <Html lang="en">
        {/* DO NOT POPULATE THIS HEAD COMPONENT */}
        <Head />
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
