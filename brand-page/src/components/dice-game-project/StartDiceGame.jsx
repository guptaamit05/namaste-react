import React, { useState } from "react";
import Score from "./Score";
import RoleDice from "./RoleDice";
import NumberSelector from "./NumberSelector";
const StartDiceGame = () => {
  const [selectedDiv, setSelecteddiv] = useState(0);
  const [randomDice, setRadomDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const generateRandomNum = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setRadomDice(num);

    if (selectedDiv === 0) {
      setError("You have not selected any number");
      return;
    }

    if (selectedDiv === num) {
      setScore((ss) => ss + 1);
    } else {
      setScore((ss) => ss - 2);
    }
    setSelecteddiv(0);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <div className="sm:w-[40rem] lg:w-[80rem] h-[9rem] m-auto flex flex-col md:flex-row justify-between md:justify-evenly items-center mt-5">
        <Score score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedDiv={selectedDiv}
          setSelecteddiv={setSelecteddiv}
        />
      </div>
      <div className="flex justify-center items-center">
        <RoleDice
          resetScore={resetScore}
          randomDice={randomDice}
          rollDice={generateRandomNum}
        />
      </div>
    </>
  );
};

export default StartDiceGame;
