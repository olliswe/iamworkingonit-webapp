import React, { useCallback } from "react";
import { useGenerateSecretMutation, useTeamQuery } from "apollo/codegen";
import clsx from "clsx";

const GenerateCode = () => {
  const { data } = useTeamQuery();
  const [generateSecret] = useGenerateSecretMutation({
    refetchQueries: ["Team"]
  });

  const handleClick = useCallback(e => {
    e.preventDefault();
    generateSecret().catch((error: any) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Invite Code
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            readOnly={true}
            value={data?.team.secret?.secret || ""}
            type="password"
            name="inviteCode"
            className="focus:ring-yellow-500 focus:border-yellow-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
            placeholder="Please generate"
          />
        </div>
        <button
          disabled={!data?.team.secret?.secret}
          className={clsx(
            "-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none",
            !data?.team.secret?.secret && "cursor-not-allowed"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
        </button>
        <button
          onClick={handleClick}
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
        >
          <span>Generate</span>
        </button>
      </div>
    </div>
  );
};

export default GenerateCode;
