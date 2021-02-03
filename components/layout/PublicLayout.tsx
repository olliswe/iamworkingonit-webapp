import React from "react";
import Head from "next/head";
import useMe from "hooks/useMe";
import GlobalLoading from "components/GlobalLoading";
import { ROUTES } from "config/routes";
import { useRouter } from "next/router";

const PublicLayout = ({ children }: { children: React.ReactElement }) => {
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
    <div className="min-h-screen w-screen bg-gradient-to-br from-primary-600 via-primary-400 to-primary-100 overflow-x-hidden">
      <Head>
        <title>I AM WORKING ON IT</title>
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

export default PublicLayout;
