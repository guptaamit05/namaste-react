import React from "react";

const Box = ({text, toggleColor, selectedDiv}) => {

    const updateBgColor = (value) =>{
        toggleColor(value)
    }

  return (
    <div onClick={()=>updateBgColor(text)}  className={`cursor-pointer grid place-items-center w-[4rem] h-[4rem] border border-black ${(selectedDiv === text) ?  " bg-black text-white " : ""}`}>
      {text}
    </div>
  );
};

export default Box;
