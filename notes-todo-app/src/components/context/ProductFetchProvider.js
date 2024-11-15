import { useContext, useEffect, useState } from "react";
import ProductFetchContext from "./ProductFetchContext";

const ProductFetchProvider = ({children}) => {
  const [products, setProducts] = useState(()=>{
    const cachedData = localStorage.getItem('allProducts');  // we are storing result in localstorage so that if we come back to same page, then we can get localstorage data instead of calling api again...
    return cachedData ? JSON.parse(cachedData) : []
  });


  const fetchData = async () => {
    console.log("All Products fetching..........");
    const result = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const data = await result.json();
    setProducts(data.products);
    localStorage.setItem("allProducts", JSON.stringify(data.products))
  };
  useEffect(() => {
    if (products.length === 0) {
      let ct = setTimeout(() => {
        fetchData();
      }, 1000);
      return () => clearInterval(ct);
    }
  }, [products]);

  return (
    <ProductFetchContext.Provider value={{products}}>
      {children}
    </ProductFetchContext.Provider>
  );
};

// We create this function so that we don't need to use two thing where we are going to use this provider..
export const useProductFetchProvider = () => {
  return useContext(ProductFetchContext);
};

export default ProductFetchProvider;
