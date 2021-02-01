import { useEffect } from "react";
import useSessionStore from "../stores/useSessionStore";
import shallow from "zustand/shallow";
import { useLoginMutation } from "../queries/generated/graphql";
import { TOKEN_PATH } from "../config/app";

const useSession = () => {
  const {
    user,
    loading,
    setLoading,
    isAuthenticated,
    setAuth
  } = useSessionStore(state => state, shallow);

  const [, loginMutation] = useLoginMutation();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const login = async ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => {
    const { data, error } = await loginMutation({ email, password });
    if (error || !data || !data.login?.accessToken) {
      return { error };
    }
    localStorage.setItem(TOKEN_PATH, data.login.accessToken);
    setAuth(true);
    return { error: null };
  };

  return { user, loading, isAuthenticated, login };
};

export default useSession;
