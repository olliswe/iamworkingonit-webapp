import React from "react";
import { IMainRoutes } from "components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const MobileMainNav = ({ routes }: { routes: IMainRoutes[] }) => {
  const { pathname } = useRouter();

  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      {routes.map((route, index) => (
        <Link href={route.href} key={index}>
          <a
            className={clsx(
              pathname === route.href
                ? "bg-primary-700 text-white"
                : "text-white hover:bg-primary-500 hover:bg-opacity-75",
              "block rounded-md py-2 px-3 text-base font-medium"
            )}
          >
            {route.title}
          </a>
        </Link>
      ))}
      {/* Current: "bg-primary-700 text-white", Default: "text-white hover:bg-primary-500 hover:bg-opacity-75" */}
    </div>
  );
};

export default MobileMainNav;
