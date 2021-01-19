import React from "react";
import Head from "next/head";

const GlobalLayout = ({ children }: any) => {
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

export default GlobalLayout;
