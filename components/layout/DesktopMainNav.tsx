import React from "react";

const DesktopMainNav = () => {
  return (
    <div className="hidden lg:block lg:ml-10">
      <div className="flex space-x-4">
        {/* Current: "bg-primary-700 text-white", Default: "text-white hover:bg-primary-500 hover:bg-opacity-75" */}
        <a
          href="#"
          className="bg-primary-700 text-white rounded-md py-2 px-3 text-sm font-medium"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="text-white hover:bg-primary-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
        >
          Team
        </a>

        <a
          href="#"
          className="text-white hover:bg-primary-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
        >
          Projects
        </a>

        <a
          href="#"
          className="text-white hover:bg-primary-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
        >
          Calendar
        </a>

        <a
          href="#"
          className="text-white hover:bg-primary-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
        >
          Reports
        </a>
      </div>
    </div>
  );
};

export default DesktopMainNav;
