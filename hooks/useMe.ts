import { TOKEN_PATH } from "config/app";
import { useUserQuery } from "apollo/codegen";
import jwtDecode from "jwt-decode";
import get from "lodash/get";

const getUserId = (token: string) => {
  try {
    return get(jwtDecode(token), "id", "");
  } catch {
    return "";
  }
};

const useMe = (cached?: boolean) => {
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem(TOKEN_PATH) || "";
  }
  const userId = getUserId(token);
  return useUserQuery({
    variables: { userId },
    fetchPolicy: cached ? "cache-first" : "network-only"
  });
};

export default useMe;
