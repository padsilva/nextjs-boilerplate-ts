import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Boilerplate - TS</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta
        name="description"
        content="A boilerplate to work with TypeScript, React, NextJS and Styled Components"
      />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
