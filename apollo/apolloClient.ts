import { useMemo } from "react";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";
import merge from "deepmerge";
import { setContext } from "@apollo/client/link/context";
import { BACKEND_ORIGIN, TOKEN_PATH } from "../config/app";
import { ApolloLink } from "apollo-link";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<any>;

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem(TOKEN_PATH) || "";
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const httpLink = createHttpLink({
  uri: `${BACKEND_ORIGIN}/graphql`
});

const link = ApolloLink.from([authLink, httpLink] as any);

function createApolloClient() {
  return new ApolloClient({
    connectToDevTools: true,
    ssrMode: typeof window === "undefined",
    link: link as any,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination()
          }
        }
      }
    })
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache);

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

// Only required for SSG
export function addApolloState(client: ApolloClient<any>, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
