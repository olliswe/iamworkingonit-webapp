import React from "react";

const MobileProfileMenu = () => {
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
        <button className="ml-auto bg-primary-600 flex-shrink-0 rounded-full p-1 text-primary-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white">
          <span className="sr-only">View notifications</span>
          {/* Heroicon name: bell */}
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <a
          href="#"
          className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-primary-500 hover:bg-opacity-75"
        >
          Your Profile
        </a>

        <a
          href="#"
          className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-primary-500 hover:bg-opacity-75"
        >
          Settings
        </a>

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
