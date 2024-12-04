import React, { useState } from "react";
import DiceFirstPage from "./DiceFirstPage";
import StartDiceGame from "./StartDiceGame";

const DiceHome = () => {
  const [startGame, setStartGame] = useState(false);

  const togglePlay = () => {
    setStartGame(!startGame);
  };
  return (
    <>
      {!startGame ? <DiceFirstPage letsPlay={togglePlay} /> : <StartDiceGame />}
    </>
  );
};

export default DiceHome;
