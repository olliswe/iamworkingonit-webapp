import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import LatestTab from "components/dashboard/LatestTab";
import TimelineTab from "components/dashboard/TimelineTab";
import { ROUTES } from "config/routes";
import { useTeamQuery } from "apollo/codegen";

const getTabClassName = (active: boolean) =>
  clsx(
    active
      ? "border-yellow-500 text-yellow-600"
      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ",
    "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
  );

const Dashboard = () => {
  const {
    query: { tab }
  } = useRouter();

  const isTabOne = !tab || tab === "team";
  const isTabTwo = tab === "updates";

  const { data } = useTeamQuery({ pollInterval: 10000 });

  if (!data?.team) {
    return null;
  }

  return (
    <div>
      <div className="block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex -mt-5 mb-" aria-label="Tabs">
            <Link href={{ pathname: ROUTES.DASHBOARD, query: { tab: "team" } }}>
              <a className={getTabClassName(isTabOne)}>Your Team</a>
            </Link>
            <Link
              href={{ pathname: ROUTES.DASHBOARD, query: { tab: "updates" } }}
            >
              <a className={getTabClassName(isTabTwo)}>Status Updates</a>
            </Link>
          </nav>
        </div>
      </div>
      {isTabOne && (
        <div className="mt-5">
          <LatestTab team={data.team} />
        </div>
      )}
      {isTabTwo && (
        <div className="mt-5">
          <TimelineTab team={data.team} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
