import React from "react";
import { BodySection, LogoSection, SearchSection } from "../index";

const FirebaseHome = () => {

  return (
    <div className="flex m-auto items-center flex-col w-[28rem] h-[43rem] bg-opacity-30 bg-gray-400 gap-1 mb-5 ">
      <LogoSection />
      <SearchSection />
      <BodySection />
    </div>
  );
};

export default FirebaseHome;
