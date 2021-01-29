import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ROUTES } from "../../config/routes";

const MobileProfileMenu = () => {
  const { pathname } = useRouter();

  return (
    <div className="pt-4 pb-3 border-t border-primary-700">
      <div className="px-5 flex items-center">
        <div className="flex-shrink-0">
          <img
            className="rounded-full h-10 w-10"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">Tom Cook</div>
          <div className="text-sm font-medium text-primary-300">
            tom@example.com
          </div>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <Link href={ROUTES.PROFILE}>
          <a
            className={clsx(
              pathname === ROUTES.PROFILE
                ? "bg-primary-700 text-white"
                : "text-white hover:bg-primary-500 hover:bg-opacity-75",
              "block rounded-md py-2 px-3 text-base font-medium"
            )}
          >
            Your Profile
          </a>
        </Link>

        <a
          href="#"
          className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-primary-500 hover:bg-opacity-75"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default MobileProfileMenu;
