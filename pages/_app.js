import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/bootstrap.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head> <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Valorant Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  
  )
  
}

export default MyApp
