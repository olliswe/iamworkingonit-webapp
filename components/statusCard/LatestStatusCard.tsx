import React from "react";
import { getTimeSince } from "helpers/utils";
import { TTeamUser, TTeamUserStatusUpdate } from "models/types";
import { animated } from "react-spring";
import useUpdateAnimation from "hooks/useUpdateAnimation";

interface ILatestStatusCard {
  user: TTeamUser;
  statusUpdate?: TTeamUserStatusUpdate | null;
}

const LatestStatusCard = ({ user, statusUpdate }: ILatestStatusCard) => {
  const animProps = useUpdateAnimation(statusUpdate);

  return (
    <animated.li
      style={animProps}
      className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer border border-transparent hover:border-gray-200"
    >
      <div className="w-full flex items-center justify-between p-4 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {user.firstName} {user.lastName}
            </h3>
          </div>
          {statusUpdate && (
            <p className="mt-1 text-gray-500 text-sm truncate">
              {getTimeSince(statusUpdate.createdAt)}
            </p>
          )}
        </div>
        <img
          className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          src={`https://eu.ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`}
          alt=""
        />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex align-middle py-3 px-4 ">
            {statusUpdate ? (
              <p className="text-sm font-medium">{statusUpdate.status}</p>
            ) : (
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-gray-800 text-xs font-medium bg-gray-100 rounded-full mr-1">
                Not status yet
              </span>
            )}
          </div>
        </div>
      </div>
    </animated.li>
  );
};

export default LatestStatusCard;
