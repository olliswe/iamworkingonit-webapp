import type { AppProps /*, AppContext */ } from "next/app";
import "styles/globals.css";
import PublicLayout from "components/layout/PublicLayout";
import AppLayout from "components/layout/AppLayout";
import {ROUTES} from "config/routes";
import {useApollo} from "apollo/apolloClient";
import {ApolloProvider} from "@apollo/client";

const getLayout = (route: string) => route.split('/')[1]===ROUTES.APP_ROOT.replace('/','') ?
    AppLayout :
    PublicLayout;



function MyApp({ Component, pageProps, router }: AppProps) {
  const Layout = getLayout(router.route);
    const apolloClient = useApollo(pageProps)


    return (
      <ApolloProvider client={apolloClient}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
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
