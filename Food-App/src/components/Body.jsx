import { useState, useEffect } from "react";
import { Card } from "./Card";
import {API_URL} from "../utils/constant"
import ShimmerFakeUI from "./ShimmerFakeUI";
import { Link } from "react-router-dom";


const Body = () => {
  const [filterRest, setFilterRest] = useState([]);
  const [filteredArray, setfilteredArray] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  
  useEffect(()=>{
    const result = filterRest.filter((restarent) =>
      restarent.info.name
        .toLowerCase()
        .includes(searchInput.trim().toLowerCase())
    );
    setfilteredArray(result);

  }, [searchInput])
  
  useEffect( () => {

    async function callAPI(){
      const result = await fetch(API_URL)
      const resp = await result.json();
      console.log(resp)

      const response =  resp?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setFilterRest(response);
      setfilteredArray(response);
    }
    callAPI()   
  }, []);


  return (
    <>
      <div className="text-lg m-5">
        <input
          type="text"
          placeholder="Search Restaurant by name"
          className="text-xl w-full p-2 border-2"
          onChange={(e) => {
            setSearchInput(e.target.value);
            
          }}
        />
        
      </div>
      {!filterRest.length ? (
        <div className="flex flex-row items-center  justify-evenly flex-wrap  hover:no-underline text-[black]">
          <ShimmerFakeUI />
          <ShimmerFakeUI />
          <ShimmerFakeUI />
          <ShimmerFakeUI />
          <ShimmerFakeUI />
          <ShimmerFakeUI />
          <ShimmerFakeUI />
          <ShimmerFakeUI />
        </div>
      ) : (
        <div className="flex flex-row items-center  justify-evenly flex-wrap  hover:no-underline text-[black]">
          {filteredArray.length > 0 ? (
            filteredArray.map((rest) => {
              return <Link to={`/restaurant/${rest.info.id}`}   state={{ restData: rest.info }} key={rest.info.id}  ><Card key={rest.info.id} oneRest={rest.info} /></Link>;
            })
          ) : (
            <h1 className="text-2xl h-screen">
              😔 No Restaurent Found! Please cleared the search and try again.
            </h1>
          )}
        </div>
      )}
    </>
  );
};

export { Body };
