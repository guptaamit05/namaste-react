import React from "react";

const FoodCard = (props) => {
  const { name, description, price, image } = props.food;
  return (
    <div className="w-[21rem] md:h-[12rem] bg-gray-300 bg-opacity-20 text-white rounded-3xl m-2">
      <div className="flex justify-around items-start pt-2">
        <img
          className="w-[8rem] h-[8rem] rounded-full"
          src={image}
          alt="item img"
        />
        <div className="max-w-[12rem] overflow-auto ">
          <h1 className="text-white font-extrabold">{name}</h1>
          <p>{description}</p>
          <div className=" float-right ">
            <button className=" bg-red-600 text-white px-2 py-1 mt-3">
              ${price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
