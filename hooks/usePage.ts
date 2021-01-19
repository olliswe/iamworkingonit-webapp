import useNavStore from "stores/useNavStore";
import { useEffect } from "react";

const usePage = (pageTitle: string) => {
  const setPage = useNavStore((state) => state.setPage);

  useEffect(() => {
    setPage(pageTitle);

    return () => setPage(pageTitle);
  }, [pageTitle, setPage]);
};

export default usePage;
