import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
import "../../node_modules/bootstrap/scss/bootstrap.scss"
import { useEffect } from 'react';
import store from '../redux/store';
import CartInitializer from '../redux/cartInitializer'
import '../scss/menu.scss'

import Header from '../components/header/Header'
// import Footer from '../components/Footer/Footer'
import Footer from '../components/Footer/ReactFooter'
import Head from 'next/head';
import Script from 'next/script';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, [])
  return <>

    <Head>      

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <title>Megazon - The Mega Mart</title>
      <meta name="description" content="Megazon Is The Best Market Place To Get All The Products That You Crave." />

      <meta name="author" content="Omkar Arvind Mane" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://megazon-redux.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Megazon Mart | Best Place For Shopping" />
      <meta property="og:description" content="Megazon Is The Mega Market Place To Get All The Products That You Crave." />
      <meta property="og:image" content="https://megazon-redux.vercel.app/card.ico" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="https://megazon-redux.vercel.app/card.ico" />
      <meta property="twitter:domain" content="megazon-redux.vercel.app" />
      <meta property="twitter:url" content="https://megazon-redux.vercel.app/" />
      <meta name="twitter:title" content="Megazon Mart | Best Place For Shopping" />
      <meta name="twitter:description" content="Megazon Is The Mega Market Place To Get All The Products That You Crave." />
      <meta name="twitter:image" content="https://megazon-redux.vercel.app/card.ico" />

      {/* <meta name="keywords" content="patils ranch, adventure ranch near me, adventure park, adventure park mumbai, adventure park pune, adventure park in mumbai, things to do in mumbai, things to do in lonavla" /> */}

    </Head >


    {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FNFSQ4Q79E"></Script>
    <Script id="google-analytics">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-FNFSQ4Q79E');
          `}
    </Script> */}

    <div className='bg-grad-4'>

      {/* <div className='spacer-x'>
        <div className='max-w'> */}
      <Provider store={store}>
        <Header />
        <CartInitializer />
        <Component {...pageProps} />
        <Footer />
      </Provider>
      {/* </div> */}
      {/* </div> */}

    </div>
  </>
}