import React, { useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseSquare } from "react-icons/ai";

const ModelSection = ({
  saveUpdateFun,
  isEdit,
  closeModel,
  card,
}) => {
  
  const defaultD = {
    id: Math.floor(Math.random() * 1000),
    name: "",
    email: "",
    phone: "",
  };
  const [modalData, setModalData] = useState(card || defaultD);

  const handleData = (e) => {
    e.preventDefault();
    saveUpdateFun(modalData);
    closeModel();
  };

  const handleChange = (e) => {
    const updateD = { ...modalData, [e.target.name]: e.target.value };
    setModalData(updateD);
  };

  return createPortal(
    <>
    <div className="absolute top-20 m-auto left-[38%] w-[24rem] p-2 h-[20rem] bg-white z-50">
      <div className="flex justify-end">
        <AiOutlineCloseSquare
          key={Math.floor(Math.random() * 3000)}
          onClick={closeModel}
          className="flex justify-end text-xl cursor-pointer "
        />
      </div>
      <div className="flex flex-col gap-1 px-5  ">
        <form onSubmit={(e) => handleData(e)}>
          <p>Name:</p>
          <input
            name="name"
            type="text"
            value={modalData.name}
            onChange={(e) => handleChange(e)}
            className="h-10 pl-2 border border-black"
          />
          <p>Email:</p>
          <input
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            value={modalData.email}
            className="h-10 pl-2 border border-black"
          />
          <p>Phone:</p>
          <input
            value={modalData.phone}
            name="phone"
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 pl-2 border border-black"
          />
          <div>
          <button className="self-end border bg-violet-700 mt-2 text-white px-3 py-2">
            {isEdit ? "Update" : "Add "}
          </button>
          </div>
        </form>
      </div>
    </div>
    <div className="absolute bg-white opacity-25 top-20 m-auto left-[35%] w-[30rem] p-2 h-[40rem] z-30"></div>
    </>,
    document.getElementById("model-root")
  );
};

export default ModelSection;
