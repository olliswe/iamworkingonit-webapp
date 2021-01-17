import React from "react";
import Head from "next/head";
import { ReactSVG } from "react-svg";

const GlobalLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-primary-500 via-primary-400 to-primary-100 overflow-x-hidden">
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
      </Head>
      {children}
      <a
        className="absolute bottom-2 right-2 flex flex-row justify-center align-middle"
        href="https://github.com/olliswe/iamworkingonit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-sm mr-1 underline">Follow our progress on</span>
        <ReactSVG src="images/github.svg" className="h-5 w-5 mr-1" />
      </a>
    </div>
  );
};

export default GlobalLayout;
