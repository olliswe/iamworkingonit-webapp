import React from "react";

const TimelineTab = () => {
  return (
    <>
      <ul className="divide-y divide-gray-200">
        <li className="py-4">
          <div className="flex space-x-3">
            <img
              className="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Whitney Francis</h3>
                <p className="text-sm text-gray-500">1h</p>
              </div>
              <p className="text-sm text-gray-500">
                Deployed Workcation (2d89f0c8 in master) to production
              </p>
            </div>
          </div>
        </li>
        <li className="py-4">
          <div className="flex space-x-3">
            <img
              className="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Whitney Francis</h3>
                <p className="text-sm text-gray-500">1h</p>
              </div>
              <p className="text-sm text-gray-500">
                Deployed Workcation (2d89f0c8 in master) to production
              </p>
            </div>
          </div>
        </li>
        <li className="py-4">
          <div className="flex space-x-3">
            <img
              className="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Whitney Francis</h3>
                <p className="text-sm text-gray-500">1h</p>
              </div>
              <p className="text-sm text-gray-500">
                Deployed Workcation (2d89f0c8 in master) to production
              </p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TimelineTab;
