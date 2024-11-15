// import React, { useState } from "react";
// import { useContextData } from "./context/UserProvider";

import React, { useState } from "react";

const About = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [clearInt, setClearInterval] = useState(0);
  const startTimer = () => {
    let min = minutes;
    let sec = seconds;
    let intervalId = setInterval(() => {
      if (sec === 60) {
        sec = 0;
        ++min;
        setSeconds(0);
        setMinutes(min);
      } else {
        ++sec;
        setSeconds(sec);
      }
    }, 1000);
    setClearInterval(intervalId);
  };

  const stopTimer = () => {
    clearInterval(clearInt);
  };
  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    clearInterval(clearInt);
  };
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Timer Example</h1>
      <p className="p-3 text-4xl">
        {minutes > 9 ? minutes : "0" + minutes} :{" "}
        {seconds > 9 ? seconds : "0" + seconds}
      </p>
      <div className="mt-4">
      <button className="px-4 py-2 bg-green-400 m-2 font-bold" onClick={startTimer}>
        Start
      </button>
      <button className="px-4 py-2 bg-red-400 m-2 font-bold" onClick={stopTimer}>
        Stop
      </button>
      <button className="px-4 py-2 bg-orange-400 m-2 font-bold" onClick={resetTimer}>
        Reset
      </button>
      </div>
    </div>
  );
};

export default React.memo(About);
