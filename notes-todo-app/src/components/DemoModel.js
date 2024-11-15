import React from "react";
import ReactDOM from "react-dom";
const DemoModel = ({ closeModel }) => {
  const modelStile = {
    position: "fixed",
    width: "500px",
    height: "500px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    backgroundColor: "white",
    justify: "center",
    textAlign: "center",
    border: "1px solid black",
    zIndex: "1000",
  };
  return ReactDOM.createPortal(
    <div style={modelStile}>
      <h1 className="text-3xl">This is Model</h1>
      <button
        onClick={() => closeModel()}
        className="px-3 mt-10 py-2 bg-black text-white"
      >
        Close
      </button>
    </div>,
    document.getElementById("model-root")
  );
};

export default DemoModel;
