import UserContext from "./UserContext";
import { useState, useContext } from "react";

const UserProvider = ({children}) => {
  const [count, setCount] = useState(0);

  const loggedUser = "A P J Kalam"

  const incrementCount = () => {
    return setCount(count + 1);
  };

  return (
    <UserContext.Provider value={{ count, setCount, incrementCount, loggedUser }}>{children}</UserContext.Provider>
  );
};

export const useContextData = () =>{
    return useContext(UserContext)
};

export default UserProvider;
