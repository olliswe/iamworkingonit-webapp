import React from "react";
import { ReactSVG } from "react-svg";

interface IWorkingOnCard {
  name: string;
  avatar: string;
  status: string;
  lastUpdated: string;
  githubUrl?: string;
  className?: string;
}

const WorkingOnCard = ({
  name,
  avatar,
  status,
  lastUpdated,
  githubUrl,
  className = "",
}: IWorkingOnCard) => {
  return (
    <div
      style={{ width: "40rem", maxWidth: "90vw" }}
      className={
        "relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500 " +
        className
      }
    >
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
      </div>
      <div className="flex-1 min-w-0">
        <div>
          <div className="flex-row flex justify-between">
            <p className="text-sm font-medium text-gray-900">{name}</p>
            <p className="text-xs text-gray-400">{lastUpdated}</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="text-sm text-gray-500 truncate">
              &quot;{status}&quot;
            </p>
            {githubUrl && (
              <div className="flex flex-row align-middle">
                <a
                  href={githubUrl}
                  className="flex flex-row align-middle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReactSVG src="images/github.svg" className="h-5 w-5 mr-1" />
                  <span className="sm:block hidden text-sm underline">
                    {githubUrl.replace(
                      "https://github.com/olliswe/iamworkingonit/tree/",
                      ""
                    )}
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingOnCard;
