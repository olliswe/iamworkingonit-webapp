import type { AppProps /*, AppContext */ } from "next/app";
import "styles/globals.css";
import LandingLayout from "components/layout/LandingLayout";
import AppLayout from "components/layout/AppLayout";
import {ROUTES} from "../config/routes";
import {createClient, Provider} from "urql";

const getLayout = (route: string) => route.split('/')[1]===ROUTES.APP_ROOT.replace('/','') ?
    AppLayout :
    LandingLayout;

const client = createClient({
    url: 'http://localhost:3000/graphql',
});


function MyApp({ Component, pageProps, router }: AppProps) {
  const Layout = getLayout(router.route);
  console.log(pageProps)

  return (
      <Provider value={client}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
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
