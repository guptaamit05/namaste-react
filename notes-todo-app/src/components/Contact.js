import React from "react";
import { useContextData } from "./context/UserProvider";
const Contact = () => {
  const { loggedUser, incrementCount } = useContextData();
  return (
    <div className="text-center text-3xl font-bold">
      Contact
      <h1 className="text-4xl underline mt-10">{loggedUser}</h1>
      <button onClick={()=>incrementCount()} className="p-3 border border-black bg-green-200 mt-4">Count Increment</button>
    </div>
  );
};

export default Contact;
