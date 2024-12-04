import React from "react";

const DiceFirstPage = ({ letsPlay }) => {
  return (
    <div className="w-auto md:w-[64rem] h-[32rem] md:flex-row flex-col flex justify-evenly m-auto items-center">
      <div className="w-[50%]">
        <img src="./images/dice/dices 1.png" alt="dice home logo" />
      </div>
      <div className="flex flex-col sm:justify-center md:justify-end items-center md:items-end w-auto mt-5 md:w-[33rem] h-[11rem]">
        <h1 className="text-2xl font-bold md:text-7xl">DICE GAME</h1>
        <button
          onClick={letsPlay}
          className="px-3 mt-6 py-1 bg-black text-white"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default DiceFirstPage;
