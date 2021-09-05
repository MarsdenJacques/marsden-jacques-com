import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Marsden Jacques</title>
        <meta name="description" content="Marsden Jacques portfolio site" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <footer>
      </footer>
    </div>)
}

export default MyApp
