import React from "react";
import Box from "./Box";
const NumberSelector = ({ selectedDiv, setSelecteddiv, setError, error }) => {
  const noOfDiv = [1, 2, 3, 4, 5, 6];
  const toggleColor = (value) => {
    setSelecteddiv(value);
    setError("");
  };
  return (
    <div className=" lg:w-[40rem] h-[8rem]">
      <p className="text-red-500 font-bold">{error}</p>
      <div className="flex justify-between items-start gap-1 ">
        {noOfDiv.map((i) => {
          return (
            <Box
              selectedDiv={selectedDiv}
              toggleColor={toggleColor}
              key={Math.floor(Math.random() * 10000)}
              text={i}
            />
          );
        })}
      </div>
      <h1 className="float-right mt-5 font-bold">Select Number</h1>
    </div>
  );
};

export default NumberSelector;
