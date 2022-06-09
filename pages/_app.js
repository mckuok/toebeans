import Head from 'next/head'

import Navbar from '../components/nav-bar'
import '../styles/globals.css'
import 'material-icons/iconfont/material-icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Head>
      <div className='container mx-auto'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
