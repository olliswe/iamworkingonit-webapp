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

  return (
    <div className="min-h-screen w-screen">
      <Head>
        <title>I AM WORKING ON IT | Login/Signup</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="preload"
          href="fonts/SaviaShadowAntipixelcomar-YoJO.ttf"
          as="font"
          crossOrigin=""
        />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>
      {children}
    </div>
  );
};

export default AuthLayout;
