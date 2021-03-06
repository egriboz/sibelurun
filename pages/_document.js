import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        {/* pwa */}
        <link href="/static/icons/site.webmanifest" rel="manifest" />
        <link
          href="/static/icons/icon-apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/icons/icon-favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/icons/icon-favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        {/* end pwa */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
