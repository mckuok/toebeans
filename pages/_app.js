import Head from 'next/head'

import Navbar from '../components/nav-bar'
import '../styles/globals.css'
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
        {/* <div className='container mx-auto'>
          <Navbar />
        </div> */}
        <Component {...pageProps} />
        <div className='container mx-auto'>
          <Footer />
        </div>
    </>
  )
}

export default MyApp
