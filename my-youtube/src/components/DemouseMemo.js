import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const DemouseMemo = () => {
  const [textt, setTextt] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const isPrimeNum = useMemo(() => findNthPrime(textt), [textt]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black text-center " +
        (isDarkTheme && "bg-green-900 text-white ")
      }
    >
      <div>
        <button
          className="px-2 py-1 mb-4 bg-gray-300"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Change Theme
        </button>
      </div>
      <h1 className="font-bold text-lg">Demo useMemo</h1>

      <input
        className="border border-black text-xl px-2 text-black"
        type="number"
        value={textt}
        onChange={(e) => setTextt(e.target.value)}
      />
      <p className="p-3 font-bold">Prime Num: {isPrimeNum}</p>
    </div>
  );
};

export default DemouseMemo;
