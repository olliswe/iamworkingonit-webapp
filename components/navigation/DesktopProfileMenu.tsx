import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const handleButtonClick = () => setOpen((prev) => !prev);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="hidden lg:block lg:ml-4">
      <div className="flex items-center">
        <OutsideClickHandler onOutsideClick={handleClose}>
          <div className="ml-3 relative flex-shrink-0">
            <div>
              <button
                onClick={handleButtonClick}
                className="bg-primary-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="rounded-full h-8 w-8"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            <div
              className={clsx([
                "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",
                open
                  ? "transition ease-out duration-100 transform opacity-100 scale-100"
                  : "transition ease-in duration-75 transform opacity-0 scale-95",
              ])}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <Link href="/profile">
                <a
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Your Profile
                </a>
              </Link>

              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default DesktopProfileMenu;
