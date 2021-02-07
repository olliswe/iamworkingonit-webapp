import React from "react";
import { TTeamStatusUpdate } from "models/types";
import Avatar from "components/elements/Avatar";
import { EMPTY_USER } from "models/models";
import { getTimeSince } from "helpers/utils";

const StatusTimelineCard = ({
  statusUpdate
}: {
  statusUpdate: TTeamStatusUpdate;
}) => {
  return (
    <li className="py-4">
      <div className="flex space-x-3">
        <Avatar user={statusUpdate.user || EMPTY_USER} />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">
              {statusUpdate.user?.firstName} {statusUpdate.user?.lastName}
            </h3>
            <p className="text-sm text-gray-500">
              {getTimeSince(statusUpdate.createdAt)}
            </p>
          </div>
          <p className="text-sm text-gray-500">{statusUpdate.status}</p>
        </div>
      </div>
    </li>
  );
};

export default StatusTimelineCard;
