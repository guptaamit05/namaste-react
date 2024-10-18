import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const listBtn = [
    "All",
    "Games",
    "Songs",
    "Cricket",
    "Live",
    "News",
    "Motivation",
  ];
  return (
    <div className="flex items-center">
      {listBtn.map((btn) => (
        <Buttons key={Math.floor(Math.random()*100000000)} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
