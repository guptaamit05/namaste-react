import React from "react";
import { useParams } from "react-router-dom";
import { User } from "./index";

const UserInfoRedux = () => {
  const { userId } = useParams();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl">User Info</h1>
      <div className="w-96 h-96 border border-gray-100 bg-gray-200">
        <User userId={userId} />
      </div>
    </div>
  );
};

export default UserInfoRedux;
