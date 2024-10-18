import React, { useEffect, useRef, useState } from "react";

const DemouseRef = () => {
  let x = 10;
  const [Y, setYVal] = useState(0)
  const ref = useRef(0)
/**
 * ref = 0  not like this
 * ref = {current:0}
 * 
*/

const i = useRef(null);
useEffect(()=>{

    i.current = setInterval(()=>{
        // console.log("Hi Amit G"+Math.random())
    },2000)
    // return ()=> clearInterval(i.current)
}, [])

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black text-center">
      <h1 className="font-bold text-lg">Demo useRef</h1>

      <button
        className="bg-green-100 px-2 py-2 m-2 border border-gray-400"
        onClick={() => {
          x = x + 1;
          console.log(x)
        }}
      >
        Increase x value
      </button>
      <span className="text-xl ">let x variable: {x}</span>
      

      <button
        className="bg-green-100 px-2 py-2 m-2 border border-gray-400"
        onClick={() => {
            setYVal(Y+1);
            console.log(Y)
        }}
      >
        Increase Y value
      </button>
      <span className="text-xl ">State Y variable: {Y}</span>


      <button
        className="bg-green-100 px-2 py-2 m-2 border border-gray-400"
        onClick={() => {
          ref.current = ref.current + 1;
          console.log(ref.current)
        }}
      >
        Increase ref value
      </button>
      <span className="text-xl ">Ref variable: {ref.current}</span>

      <button
        className="bg-green-100 px-2 py-5 m-2 border border-gray-400"
        onClick={() => {
          clearInterval(i.current)
        }}
      >
        Stop Printing in Console
      </button>
    </div>

    
  );
};

export default DemouseRef;
