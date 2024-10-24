import React from "react";
import { useContextData } from "./context/UserProvider";

const About = () => {
 const {loggedUser} = useContextData()
  return (
    <div className="text-center text-3xl font-bold">
      About
      <h2>{loggedUser}</h2>
    </div>
  );
};

export default About;
