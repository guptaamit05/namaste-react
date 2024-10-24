import { useState } from "react";
const InputSection = ({ addNotesTodo }) => {
  const [todoMsg, settoDoMsg] = useState("");

  const addNewTask = () => {
    addNotesTodo(todoMsg);
    settoDoMsg("")
  };
  return (
    <div>
      <input
        value={todoMsg}
        onChange={(e) => settoDoMsg(e.target.value)}
        className="border border-black p-1 m-3 w-1/2"
        type="text"
      />
      <button onClick={addNewTask} className="px-3 py-1 bg-green-300">
        Add
      </button>
    </div>
  );
};

export default InputSection;
