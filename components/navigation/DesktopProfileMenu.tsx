import React, { useState } from "react";
import Link from "next/link";
import ClickAwayListener from "react-click-away-listener";
import { Transition } from "@headlessui/react";
import { ROUTES } from "config/routes";
import Avatar from "components/elements/Avatar";
import useMe from "hooks/useMe";
import TeamDropdown from "components/TeamDropdown";

const DesktopProfileMenu = ({ onLogout }: { onLogout: any }) => {
  const [open, setOpen] = useState(false);
  const { data } = useMe(true);

  const handleButtonClick = () => setOpen(prev => !prev);

  const handleClose = () => setOpen(false);

  return (
    <div className="hidden lg:flex lg:ml-4">
      <TeamDropdown />
      <div className="flex items-center">
        <ClickAwayListener onClickAway={handleClose}>
          <div className="ml-3 relative flex-shrink-0">
            <div>
              <button
                onClick={handleButtonClick}
                className="bg-primary-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                {data?.user && <Avatar user={data.user} />}
              </button>
            </div>
            <Transition
              show={open}
              as="div"
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
              onClick={handleClose}
            >
              <Link href={ROUTES.PROFILE}>
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
                onClick={onLogout}
              >
                Sign out
              </a>
            </Transition>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default DesktopProfileMenu;
