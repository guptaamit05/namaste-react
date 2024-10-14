import { useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantSubMenu } from "../index";
import ShimmerFakeUIForMenu from "./ShimmerFakeUIForMenu";
import useRestaurantMenu from'../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { restId } = useParams();

  const [restName, setRestName] = useState("");
  const menuItems = useRestaurantMenu(restId, setRestName)  
  const [isOpen, setIsOpen] = useState(null); 
  

  const handleToggle = (index) => {
    // Toggle the submenu visibility
    setIsOpen(isOpen === index ? null : index);
  };

  return menuItems.length === 0 ? (
      <div className="m-auto w-[80%] p-2 h-auto">
        <ShimmerFakeUIForMenu />
        <ShimmerFakeUIForMenu />
        <ShimmerFakeUIForMenu />
        <ShimmerFakeUIForMenu />
        <ShimmerFakeUIForMenu />
        <ShimmerFakeUIForMenu />
      </div>
  ) : (
      <div className="m-auto w-[80%] p-2 h-auto ">
        <h1 className="text-center text-4xl">----{restName}---</h1>

        {menuItems.map((oneMenuItem, indexx) => {
          let { title, itemCards } = oneMenuItem?.card?.card;
          return (
            <div key={indexx} className="w-full border-r-4 p-2 mb-5 mt-10 cursor-pointer bg-gray-200 ">
              <div className="pt-3 pb-3 " onClick={() => handleToggle(indexx)}>
                <h3 className="text-lg ">
                  {title}
                  {itemCards ? "(" + itemCards.length + ")" : ""}
                </h3>
              </div>
              {isOpen === indexx && (
                <RestaurantSubMenu
                  key={indexx}
                  subMenuItem={itemCards ? itemCards : []}
                />
              )}
            </div>
          );
        })}
      </div>
   
  );
};

export { RestaurantMenu };
