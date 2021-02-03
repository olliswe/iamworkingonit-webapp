import React from "react";
import { TUser } from "models/user";

const Avatar = ({ user }: { user: TUser }) => {
  return (
    <img
      className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
      src={`https://eu.ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`}
      alt=""
    />
  );
};

export default Avatar;
