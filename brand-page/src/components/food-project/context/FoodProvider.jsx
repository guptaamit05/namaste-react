import { useContext, useEffect, useState } from "react";
import FoodContext from "./FoodContext";
import { API_URL } from "../constant/constant";

const FoodProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [fTData, setFTData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDataByFilter = async () => {
    const data = await fetch(API_URL);
    const result = await data.json();
    setFoodData(result);
    setFTData(result);
  };

  useEffect(() => {
    setIsLoading(true);
    let tm = setTimeout(() => {
      getDataByFilter();
    }, 1000);
    setIsLoading(false);
    return () => clearTimeout(tm);
  }, []);

  return (
    <FoodContext.Provider
      value={{
        foodData,
        setFoodData,
        setFTData,
        fTData,
        setIsLoading,
        isLoading,
        getDataByFilter,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => {
  return useContext(FoodContext);
};

export default FoodProvider;
