import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useContactProvider } from "./context/ContactProvider";

const SearchSection = () => {

  const {openAddModel} = useContactProvider()
  return (
    <>
      <div className="w-[26rem] h-[4rem] bg-opacity-30 flex items-center gap-2 relative ">
        <FaMagnifyingGlass className="absolute text-3xl opacity-20 pl-2" />
        <input
          type="text"
          placeholder="Search Contact"
          className="rounded-lg text-violet-700 w-[24rem] outline-none h-[2.5rem] pl-8"
        />
        <button
          className="text-2xl bg-violet-700 text-white border rounded-full w-[2.5rem] h-[2.5rem]"
          onClick={openAddModel}
        >
          +
        </button>
      </div>
    </>
  );
};

export default SearchSection;
