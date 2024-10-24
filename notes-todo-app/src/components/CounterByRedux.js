import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CountAction } from "./redux/counterSlice";

const CounterByRedux = () => {
  const dispatch = useDispatch();
  const countV = useSelector((store) => store.counter.value);

  const incrementCounterValue = () => {
    dispatch(CountAction.incrementC(2));
  };

  const decrementCounterValue = () => {
    if (countV === 0) {
      dispatch(CountAction.updateC(0));
    } else {
      dispatch(CountAction.decrementC(2));
    }
  };

  return (
    <div className="p-10 m-10 border border-gray-300 w-60 h-60">
      <h3>Counter Value: {countV}</h3>
      <button
        className="border border-black p-2 mt-5 bg-gray-200"
        onClick={incrementCounterValue}
      >
        Count Increment
      </button>

      <button
        className="border border-black p-2 mt-5 bg-gray-200"
        onClick={decrementCounterValue}
      >
        Count Decrement
      </button>
    </div>
  );
};

export default CounterByRedux;
