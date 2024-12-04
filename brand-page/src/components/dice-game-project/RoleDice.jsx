import React, { useState } from "react";
import Rules from "./Rules";

const RoleDice = ({ randomDice, rollDice, resetScore }) => {
  const [showRules, setShowRules] = useState(false);
  
  return (
    <>
      <div className="flex items-center flex-col mt-16 justify-center ">
        <div onClick={()=>rollDice()}>
          <img
            className="cursor-pointer"
            src={`/images/dice/dice_${randomDice}.png`}
            alt="role dice"
          />
        </div>
        <h2 className="p-5 font-bold">click on Dice to roll</h2>
        <button onClick={()=>resetScore()} className="px-20 py-2 bg-white text-black border border-black">
          Reset Score
        </button>
        <button
          className="mt-5 mb-5 px-20 py-2 bg-black text-white border border-black"
          onClick={() => setShowRules(!showRules)}
        >
          {showRules ? "Hide" : "Show"} Rules
        </button>

        {showRules && <Rules />}
      </div>
    </>
  );
};

export default RoleDice;
