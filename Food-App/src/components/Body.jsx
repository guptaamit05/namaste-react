import { useState, useEffect } from "react";
import Card from "./Card";
import restList from "../utils/data";
import ShimmerFakeUI from "./ShimmerFakeUI";

const Body = () => {
  const [filterRest, setFilterRest] = useState([]);
  const [filteredArray, setfilteredArray] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchRest = () => {
    const result = filterRest.filter((restarent) =>
      restarent.info.name
        .toLowerCase()
        .includes(searchInput.trim().toLowerCase())
    );
    setfilteredArray(result);
  };

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setFilterRest(restList);
      setfilteredArray(restList);
      return () => clearTimeout(timeoutId);
    }, 1000);
  }, []);

  return (
    <div className="body-seciton">
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-btn" onClick={() => searchRest()}>
          Search
        </button>
      </div>
      <div className="res-section">
        {(filteredArray.length > 0 &&
          filteredArray.map((rest) => {
            return <Card key={rest.info.id} oneRest={rest.info} />;
          })) || (
          <>
            <ShimmerFakeUI />
            <ShimmerFakeUI />
            <ShimmerFakeUI />
            <ShimmerFakeUI />
            <ShimmerFakeUI />
            <ShimmerFakeUI />
            <ShimmerFakeUI />
            <ShimmerFakeUI />
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
