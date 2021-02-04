import React from "react";
import LatestStatusCard from "components/statusCard/LatestStatusCard";
import { TTeam } from "models/types";

const LatestTab = ({ team }: { team: TTeam }) => {
  return (
    <>
      <div>
        <div className="mb-5 lg:w-2/3 sm:pr-2 flex rounded-md shadow-sm ">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="email"
              className="focus:ring-yellow-500 focus:border-yellow-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
              placeholder="Update your status"
            />
          </div>
          <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-yellow-300 text-sm font-medium rounded-r-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Submit</span>
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.users &&
          team.users.map(user => (
            <LatestStatusCard
              user={user}
              statusUpdate={user.statusupdates && user.statusupdates[0]}
              key={user.id}
            />
          ))}
      </ul>
    </>
  );
};

export default LatestTab;
