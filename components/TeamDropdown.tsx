import React from "react";
import { useTeamQuery } from "apollo/codegen";

const TeamDropdown = () => {
  const { data: teamData } = useTeamQuery();

  if (!teamData) {
    return null;
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="cursor-default inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {teamData.team.teamName}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="-mr-1 ml-2 h-5 w-5"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamDropdown;
