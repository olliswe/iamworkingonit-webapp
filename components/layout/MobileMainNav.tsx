import React from "react";

const MobileMainNav = () => {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      {/* Current: "bg-primary-700 text-white", Default: "text-white hover:bg-primary-500 hover:bg-opacity-75" */}
      <a
        href="#"
        className="bg-primary-700 text-white block rounded-md py-2 px-3 text-base font-medium"
      >
        Dashboard
      </a>

      <a
        href="#"
        className="text-white hover:bg-primary-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
      >
        Team
      </a>

      <a
        href="#"
        className="text-white hover:bg-primary-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
      >
        Projects
      </a>

      <a
        href="#"
        className="text-white hover:bg-primary-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
      >
        Calendar
      </a>

      <a
        href="#"
        className="text-white hover:bg-primary-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
      >
        Reports
      </a>
    </div>
  );
};

export default MobileMainNav;
