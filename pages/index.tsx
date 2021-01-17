import Head from "next/head";
import { useEffect, useState } from "react";
import AnimatedTerm from "components/AnimatedTerm";

export default function Home() {
  const [addCard, setAddCard] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddCard(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
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
        <link
          rel="preload"
          href="/fonts/SaviaFilledShadowAntipixelcomar-rRmy.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="min-h-screen w-screen bg-gradient-to-b from-primary-500 via-primary-400 to-primary-50">
        <div className="p-3">
          <div>
            <span className="text-5xl sm:text-7xl text-white font-logo">
              I AM WORKING ON IT
            </span>
          </div>
          <div className="mt-20 ml-7">
            <span className="text-5xl text-white font-logo">
              Let your team know what you're up to...
            </span>
            <div className="flex flex-col sm:flex-row">
              <div className="flex-1">
                <div className="mt-5 max-w-4xl" style={{ maxWidth: "41rem" }}>
                  <AnimatedTerm />
                </div>
              </div>
              <div className="flex-1">{addCard && "Hello"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
