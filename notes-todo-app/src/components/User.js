import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataFromThunkMiddleWare } from "./middleware/fetchDataFromThunkMiddleWare";

const User = React.memo(({ userId }) => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((store) => store.userinfo);
  const userData = data[userId]


  useEffect(() => {
    if (!userData) {
      const fetchData = async () => {
        await fetchDataFromThunkMiddleWare(dispatch, userId);
      };

      fetchData();
    }
  }, [userId,  userData]);

  if (isLoading) {
    return <div className="text-center mt-10">Loading.......</div>;
  }
  if (userData) {
    
    return (
      <div className="mt-5">
        <ul className="p-5 m-10">
          <li className="p-2">Name: {userData.name}</li>
          <li className="p-2">Phone: {userData.phone}</li>
          <li className="p-2">Username: {userData.username}</li>
          <li className="p-2">Email: {userData.email}</li>
        </ul>
      </div>
    );
  }

  if (error) {
    const errorMessage = error || "An error occurred"; // Fallback message
    return <div className="text-center mt-10">Error: {errorMessage}</div>;
  }
});

export default User;
