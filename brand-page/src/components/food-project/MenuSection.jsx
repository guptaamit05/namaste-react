import React from "react";
import FoodCard from "./FoodCard";
import { useFoodContext } from "./context/FoodProvider";

const MenuSection = () => {
  const { foodData } = useFoodContext();

  return (
    <div className=" w-full p-0  m-0">
      <div className="min-h-[50rem] bg-cover bg-[url('./images/foodzone/bg.png')] ">
        <div className=" pt-4 flex m-auto md:gap-0 gap-2  justify-center items-center flex-wrap w-90 lg:w-[66rem] ">
          {foodData.length > 0 ? (
            foodData.map((food) => <FoodCard key={food.id} food={food} />)
          ) : (
            <h1 className="text-6xl text-white font-bold">
              Fetching data...
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
