import React from "react";
import { TTeam } from "models/types";
import StatusTimelineCard from "components/statusCard/StatusTimelineCard";
import { usePagination } from "react-use-pagination";
import clsx from "clsx";

const buttonClass = (isDisabled: boolean) =>
  clsx(
    isDisabled
      ? "text-gray-400 bg-gray-100 cursor-not-allowed"
      : "text-gray-700 bg-white hover:bg-gray-50",
    "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md"
  );

const TimelineTab = ({ team }: { team: TTeam }) => {
  const numberOfItems = (team.statusupdates || []).length;

  const {
    currentPage,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex
  } = usePagination({
    totalItems: numberOfItems,
    initialPageSize: 10
  });

  const currentItems = (team.statusupdates || []).slice(
    startIndex,
    endIndex + 1
  );

  if (!team.statusupdates?.length) {
    return <p className="text-sm">No status updates yet...</p>;
  }

  return (
    <>
      <ul className="divide-y divide-gray-200">
        {currentItems.map((statusUpdate, index) => (
          <StatusTimelineCard statusUpdate={statusUpdate} key={index} />
        ))}
      </ul>
      <div
        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium px-1">{currentPage * 10 + 1}</span>
            to
            <span className="font-mediumb px-1">
              {currentPage * 10 + 1 + currentItems.length}
            </span>
            of
            <span className="font-medium px-1">{numberOfItems}</span>
            results
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <button
            onClick={setPreviousPage}
            disabled={!previousEnabled}
            className={buttonClass(!previousEnabled)}
          >
            Previous
          </button>
          <button
            onClick={setNextPage}
            disabled={!nextEnabled}
            className={clsx(buttonClass(!nextEnabled), "ml-3")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TimelineTab;
