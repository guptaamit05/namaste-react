import React from "react";

const Score = ({ score }) => {
  return (
    <div className="max-w-40 flex flex-col pl-2 justify-between items-center">
      <h1 className="text-7xl ">{score}</h1>
      <p className="font-bold">Total Score</p>
    </div>
  );
};

export default Score;
