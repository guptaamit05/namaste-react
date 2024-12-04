import React from "react";
import { RiContactsBook3Line } from "react-icons/ri";

const LogoSection = () => {

  return (
    <div className="w-[26rem] h-[4rem] bg-violet-700 text-white font-semibold mt-5 flex justify-center items-center gap-2 text-2xl">
      <RiContactsBook3Line />
      Basic Contact App
    </div>
  );
};

export default React.memo(LogoSection);
