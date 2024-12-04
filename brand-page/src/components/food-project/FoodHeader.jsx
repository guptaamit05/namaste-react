import React from "react";
import { useFoodContext } from "./context/FoodProvider";

const FoodHeader = () => {
  const {setFoodData, fTData } = useFoodContext();

  const filterData = (query) => {
    if (query) {
      const res = fTData.filter((food) =>
        food.name.toLowerCase().includes(query)
      );
      setFoodData(res);
    }else{
      setFoodData(fTData)
    }
  };
  return (
    <div className=" bg-gray-800 m-0 p-0 h-[12rem] flex flex-col justify-between items-center">
      <div className="w-full px-5 py-3 m-auto flex md:flex-row flex-col justify-between items-center">
        <h1 className="text-white text-3xl font-bold mb-5 md:mb-0">
          F<span className="text-red-600">oo</span>d Z
          <span className="text-red-600">o</span>ne
        </h1>
        <input
          className="p-2 w-full bg-transparent placeholder:text-white text-white border-2 border-red-600 max-w-md text-lg outline-none"
          placeholder="Search Food..."
          onChange={(e) => filterData(e.target.value)}
          type="search"
        />
      </div>
      <ul className="list-none pb-5 flex justify-between items-center gap-2">
        <li
          onClick={() => filterData("")}
          className=" border-none px-3 py-1 bg-red-600 text-white cursor-pointer"
        >
          All
        </li>
        <li
          onClick={() => filterData("portable")}
          className="border-none px-3 py-1 bg-red-600 text-white cursor-pointer"
        >
          Portable
        </li>
        <li
          onClick={() => filterData("wireless")}
          className="border-none px-3 py-1 bg-red-600 text-white cursor-pointer"
        >
          Wireless
        </li>
        <li
          onClick={() => filterData("fitness")}
          className="border-none px-3 py-1 bg-red-600 text-white cursor-pointer"
        >
          Fitness
        </li>
        <li
          onClick={() => filterData("smart")}
          className="border-none px-3 py-1 bg-red-600 text-white cursor-pointer"
        >
          Smart
        </li>
      </ul>
    </div>
  );
};

export default FoodHeader;
