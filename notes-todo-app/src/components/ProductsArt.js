// import { useGetProducts } from "./hooks/useGetProducts";
import { useMemo, useRef, useState } from "react";
import { useProductFetchProvider } from "./context/ProductFetchProvider";
import DemoModel from "./DemoModel";

const ProductsArt = () => {
  // calling api data using custom hook..
  // const {products} =useGetProducts();  //using Custom Hook
  const { products } = useProductFetchProvider(); // Now using Context API...

  // for model:
  const [openModel, setOpenModel] = useState(false);
  const result = useMemo(() => {
    let res = 0;
    for (let i = 1; i < 100; i++) {
      res *= i;
    }
    return res;
  });

  const bgCl = useRef(null);

  const changeBGG = () => {
    bgCl.current.style.backgroundColor =
      bgCl.current.style.backgroundColor === "orange" ? "yellow" : "pink";
  };
  return (
    <div
      ref={bgCl}
      className={openModel ? "pointer-events-none" : ""}
      style={{ backgroundColor: "orange" }}
    >
      <h2 className="font-bold text-2xl text-center underline mb-2">
        All Products <span>useMemo Value: {result}</span>
      </h2>
      <button
        className="px-3 py-2 m-10 bg-black text-white text-center text-2xl"
        onClick={() => setOpenModel(true)}
      >
        Open Model
      </button>
      {openModel && <DemoModel closeModel={setOpenModel} />}
      <p>
        <button onClick={changeBGG} className="p-2 bg-black text-white">
          changeBGColor
        </button>
      </p>
      {products.length === 0 && (
        <div className="text-center">Loading......</div>
      )}
      <div className="flex justify-start items-center flex-col ">
        {products.map((product) => {
          return (
            <div key={product.id} className="bg-green-300 p-3 mb-2 w-1/2">
              <h3 className=" text-lg font-bold">{product.title}</h3>
              <p className="text-justify">{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsArt;
