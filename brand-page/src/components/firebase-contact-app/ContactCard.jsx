import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useContactProvider } from "./context/ContactProvider";
import ModelSection from "./ModelSection";

const ContactCard = React.memo(({ data }) => {
  const { openEditModel, deleteContact} =
    useContactProvider();

  return (
    <>
      <div className="w-[26rem] p-2 h-[4rem] bg-violet-700 text-white flex gap-1">
        <p className="text-4xl mt-1">
          <FaUserCircle />
        </p>
        <div className="flex flex-col text-sm w-full ">
          <h3>{data.name} --- {data.phone}</h3>
          <p>{data.email}</p>
        </div>
        <div className="w-full text-2xl gap-1 flex items-center justify-end">
          <RiEditCircleFill
            onClick={() => openEditModel(data)}
            className="cursor-pointer"
          />
          <MdOutlineDeleteOutline
            onClick={() => deleteContact(data.id)}
            className="cursor-pointer"
          />
        </div>
      </div>
  
    </>
  );
});

export default ContactCard;
