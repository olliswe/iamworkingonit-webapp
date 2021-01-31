import { useEffect } from "react";
import useSessionStore from "../stores/useSessionStore";
import shallow from "zustand/shallow";

const useSession = () => {
  const { user, loading, setLoading, isAuthenticated } = useSessionStore(
    state => state,
    shallow
  );

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const login = (email: string, password: string) => {
    console.log(email, password);
  };

  return { user, loading, isAuthenticated, login };
};

export default useSession;
