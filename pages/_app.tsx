import { AppProps } from "next/app";
import "styles/globals.css";
import PublicLayout from "components/layout/PublicLayout";
import AppLayout from "components/layout/AppLayout";
import { ROUTES } from "config/routes";
import { useApollo } from "apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";
import AuthLayout from "components/layout/AuthLayout";
import "react-toastify/dist/ReactToastify.css";
import ToastContainer from "components/ToastContainer";
import Head from "next/head";
import React from "react";

const getLayout = (route: string) => {
  const baseRoute = route.split("/")[1];
  switch (baseRoute) {
    case ROUTES.APP_ROOT.replace("/", ""):
      return AppLayout;
    case ROUTES.AUTH_ROOT.replace("/", ""):
      return AuthLayout;
    default:
      return PublicLayout;
  }
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const Layout = getLayout(router.route);
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>I AM WORKING ON IT</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="preload"
          href="/fonts/SaviaShadowAntipixelcomar-YoJO.ttf"
          as="font"
          crossOrigin=""
        />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
