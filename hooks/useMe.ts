import { useUserQuery } from "apollo/codegen";

const useMe = (cached?: boolean) => {
  return useUserQuery({
    fetchPolicy: cached ? "cache-first" : "network-only"
  });
};

export default useMe;
