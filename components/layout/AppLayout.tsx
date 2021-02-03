import React, { useState } from "react";
import DesktopMainNav from "components/navigation/DesktopMainNav";
import MobileMenuButton from "components/navigation/MobileMenuButton";
import DesktopProfileMenu from "components/navigation/DesktopProfileMenu";
import MobileMenu from "components/navigation/MobileMenu";
import PageHeader from "components/layout/PageHeader";
import MainContent from "components/navigation/MainContent";
import Head from "next/head";
import Link from "next/link";
import ClickAwayListener from "react-click-away-listener";
import { ROUTES } from "config/routes";
import useMe from "hooks/useMe";
import GlobalLoading from "components/GlobalLoading";
import useAuth from "hooks/useAuth";

interface ILayout {
  children: React.ReactNode;
  pageName?: string;
}

export interface IMainRoutes {
  title: string;
  href: string;
}

export const MAIN_ROUTES: IMainRoutes[] = [
  { title: "Dashboard", href: ROUTES.DASHBOARD },
  { title: "Team", href: ROUTES.TEAM }
];

const AppLayout = ({ children, pageName }: ILayout) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleClickAway = () => setMobileMenu(false);
  const { logout } = useAuth();

  const handleLogoutClick = async (e: any) => {
    e.preventDefault();
    await logout();
  };

  const { data, loading, error } = useMe();

  if (loading) {
    return <GlobalLoading />;
  }

  if (!loading && (!data || !!error)) {
    logout();
    return <GlobalLoading />;
  }

  return (
    <>
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
      <div className="min-h-screen bg-gray-100">
        <div className="bg-gradient-to-br from-primary-600 via-primary-400 to-primary-100 pb-32">
          <ClickAwayListener onClickAway={handleClickAway}>
            <nav className="bg-transparent border-b border-primary-300 border-opacity-25 lg:border-none">
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-primary-400 lg:border-opacity-25">
                  <div className="px-2 flex items-center lg:px-0">
                    <div className="flex-shrink-0">
                      <Link href="/">
                        <a className="text-white text-3xl font-logo">
                          I AM WORKING ON IT
                        </a>
                      </Link>
                    </div>
                    <DesktopMainNav routes={MAIN_ROUTES} />
                  </div>
                  <MobileMenuButton setOpen={setMobileMenu} />
                  <DesktopProfileMenu onLogout={handleLogoutClick} />
                </div>
              </div>
              <MobileMenu
                open={mobileMenu}
                routes={MAIN_ROUTES}
                onLogout={handleLogoutClick}
              />
            </nav>
          </ClickAwayListener>
          <PageHeader pageName={pageName || ""} />
        </div>
        <MainContent>{children}</MainContent>
      </div>
    </>
  );
};

export default AppLayout;
