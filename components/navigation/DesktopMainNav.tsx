import React from "react";
import { IMainRoutes } from "components/layout/AppLayout";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

const DesktopMainNav = ({ routes }: { routes: IMainRoutes[] }) => {
  const { pathname } = useRouter();

  return (
    <div className="hidden lg:block lg:ml-10">
      <div className="flex space-x-4">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            <a
              className={clsx([
                "rounded-md py-2 px-3 text-sm font-medium",
                pathname === route.href
                  ? "bg-primary-700 text-white"
                  : "text-white hover:bg-primary-500 hover:bg-opacity-75",
              ])}
            >
              {route.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopMainNav;
