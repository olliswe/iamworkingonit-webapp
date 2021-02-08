import React from "react";
import Head from "next/head";
import useMe from "hooks/useMe";
import GlobalLoading from "components/GlobalLoading";
import { ROUTES } from "config/routes";
import { useRouter } from "next/router";

const AuthLayout = ({ children }: { children: React.ReactElement }) => {
  const { data, loading } = useMe();
  const router = useRouter();

  if (loading) {
    return <GlobalLoading />;
  }

  if (!loading && data) {
    router.push(ROUTES.APP_ROOT);
    return <GlobalLoading />;
  }

  return <div className="min-h-screen w-screen">{children}</div>;
};

export default AuthLayout;
