import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (restId, setRestName) => {
  // fetch data and return restaurant info
  const [menuItems, setMenuItems] = useState([]);
  
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);
    const result = await data.json();
    
    setRestName(result?.data?.cards[0]?.card.card.text);
    const menuItemsArray =
      (result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
    setMenuItems(menuItemsArray);
  };

  useEffect(() => {
    console.log("Rest Menu API calling..");
    fetchMenu();
  }, []);

  return menuItems;
};

export default useRestaurantMenu;
