import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ROUTES } from "config/routes";
import useMe from "hooks/useMe";
import Avatar from "components/elements/Avatar";

const MobileProfileMenu = ({ onLogout }: { onLogout: any }) => {
  const { pathname } = useRouter();
  const { data } = useMe();

  if (!data?.user) {
    return <div />;
  }

  return (
    <div className="pt-4 pb-3 border-t border-primary-700">
      <div className="px-5 flex items-center">
        <div className="flex-shrink-0">
          <Avatar user={data.user} />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">
            {data.user.firstName} {data.user.lastName}
          </div>
          <div className="text-sm font-medium text-primary-300">
            {data.user.email}
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
          onClick={onLogout}
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default MobileProfileMenu;
