import React from "react";

interface ILatestStatusCard {
  user: any;
  statusUpdate: any;
}

const LatestStatusCard = ({ user, statusUpdate }: ILatestStatusCard) => {
  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer border border-transparent hover:border-gray-200">
      <div className="w-full flex items-center justify-between p-4 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {user.firstName} {user.lastName}
            </h3>
            {statusUpdate.type === "CLEARED" && (
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                Status cleared
              </span>
            )}
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">3hrs ago</p>
        </div>
        <img
          className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          src={`https://eu.ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`}
          alt=""
        />
      </div>
      {statusUpdate.status && (
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <p className="py-3 px-4 text-sm font-medium">
              {statusUpdate.status}
            </p>
          </div>
        </div>
      )}
    </li>
  );
};

export default LatestStatusCard;
