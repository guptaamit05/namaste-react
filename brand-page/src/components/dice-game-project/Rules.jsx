import React from "react";

const Rules = () => {
  return (
    <div className="w-full p-5 bg-yellow-50 flex flex-col mb-3">
      <h2 className="text-xl pb-2 font-bold">How to play dice game</h2>
      <p>Select any number</p>
      <p>* Click on dice image</p>
      <p>
       * Safter click on dice if selected number is equal to dice number you will
        get same point as dice.
      </p>
      <p>* If you get wrong guess then 2 point will be dedcuted </p>
    </div>
  );
};

export default Rules;
