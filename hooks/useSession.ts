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

  return { user, loading, isAuthenticated };
};

export default useSession;
