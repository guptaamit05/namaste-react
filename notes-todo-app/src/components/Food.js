import React, {useState} from "react";
import { useCustomHook } from "./hooks/useCustomHook";

const Food = () => {
  const [color, setColor] = useState(false);

  const changeBgColor = () =>{
    setColor(!color);
  }
  const classN = useCustomHook(color);
  return (
    <div >
      <h1> Custom Hook:</h1>
      <button onClick={changeBgColor} className="m-10 border border-black bg-black text-white p-3" >ChangeBG Color</button>
      <h5 className={`m-5 p-2 ${classN}`}>Hi Amit</h5>
    </div>
  );
};

export default Food;
