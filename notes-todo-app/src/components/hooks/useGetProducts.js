import { useState, useEffect } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const result = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });
      const data = await result.json();
      setProducts(data.products);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    let ct = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => {
      return clearInterval(ct);
    };
  }, []);

  return products;
};
