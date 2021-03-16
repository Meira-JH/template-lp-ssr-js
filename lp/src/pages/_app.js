import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { GTMPageView } from 'services/gtm';
import Router from 'next/router';
import { useEffect } from 'react';
import withGA from 'next-ga';
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {
  // Initiate GTM
  // useEffect(() => {
  //   const handleRouteChange = (url) => GTMPageView(url);
  //   Router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     Router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Head>
        <title>Casa do Saber</title>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <link rel="shortcut icon" href="/media/icon/favicon.ico" />
        <link rel="shortcut icon" href="/media/icon/logo512.png" />
        <link rel="apple-touch-icon" href="/media/icon/logo512.png" />
        <meta
          name="description"
          content="Aprenda com qualidade e comodidade - Casa do Saber"
        />
        <meta property="og:title" content="Casa do Saber" />
        <meta
          property="og:description"
          content="Aprenda com qualidade e comodidade"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta property="og:image" content="/media/icon/favicon.png"></meta>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withGA(process.env.NEXT_PUBLIC_GA_TRACKING, Router)(App);
