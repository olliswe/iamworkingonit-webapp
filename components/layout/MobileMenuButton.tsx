import React from "react";

const MobileMenuButton = () => {
  return (
    <div className="flex lg:hidden">
      {/* Mobile menu button */}
      <button
        className="bg-primary-600 p-2 rounded-md inline-flex items-center justify-center text-primary-200 hover:text-white hover:bg-primary-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {/*
Heroicon name: menu

Menu open: "hidden", Menu closed: "block"
*/}
        <svg
          className="block h-6 w-6"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/*
Heroicon name: x

Menu open: "block", Menu closed: "hidden"
*/}
        <svg
          className="hidden h-6 w-6"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileMenuButton;
