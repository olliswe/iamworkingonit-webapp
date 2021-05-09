import { useUserQuery } from "apollo/codegen";

const useMe = (cached?: boolean) => {
  const res = useUserQuery({
    fetchPolicy: cached ? "cache-only" : "network-only"
  });
  const isAuthenticated = !!res.data && !res.loading && !res.error;
  return { ...res, isAuthenticated };
};

export default useMe;
