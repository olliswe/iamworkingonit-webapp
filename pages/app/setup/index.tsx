import React, { useState } from "react";
import { getTabClassName } from "helpers/classes";
import CreateTeam from "components/setup/CreateTeam";
import JoinTeam from "components/setup/JoinTeam";
import useAuth from "../../../hooks/useAuth";

const Setup = () => {
  const [tab, setTab] = useState<0 | 1>(0);
  const { logout } = useAuth();

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span
        className="absolute top-5 right-10 cursor-pointer font-bold text-yellow-500"
        onClick={logout}
      >
        Logout
      </span>
      <div className="m-3 w-full sm:w-3/5 bg-gray-100 shadow rounded py-1">
        <div className="block">
          <div className="border-b border-gray-200">
            <div className="flex">
              <div
                onClick={() => setTab(0)}
                className={getTabClassName(tab === 0)}
              >
                Join Team
              </div>
              <div
                onClick={() => setTab(1)}
                className={getTabClassName(tab === 1)}
              >
                Create new team
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 sm:p-5">
          {tab === 0 && <JoinTeam />}
          {tab === 1 && <CreateTeam />}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return { props: { pageName: "setup" } };
}

export default Setup;
