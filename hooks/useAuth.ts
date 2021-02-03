import { useLoginMutation } from "apollo/codegen";
import { useRouter } from "next/router";
import { TOKEN_PATH } from "config/app";
import { ROUTES } from "config/routes";
import { useApolloClient } from "@apollo/client";

const useAuth = () => {
  const [loginMutation] = useLoginMutation();
  const router = useRouter();
  const client = useApolloClient();

  const login = async ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const res = await loginMutation({ variables: { email, password } });
      const accessToken = res.data?.login.accessToken;
      if (!accessToken) {
        return { error: "Unable to get login" };
      }
      localStorage.setItem(TOKEN_PATH, accessToken);
      await router.push(ROUTES.APP_ROOT);
      return { error: "" };
    } catch (e) {
      console.log(e);
      return { error: e };
    }
  };

  const logout = async () => {
    localStorage.removeItem(TOKEN_PATH);
    await client.clearStore();
    await router.push(ROUTES.LOGIN);
  };

  return { login, logout };
};

export default useAuth;
