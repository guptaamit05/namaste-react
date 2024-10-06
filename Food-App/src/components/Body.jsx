import { useState, useEffect } from "react";
import Card from "./Card";
import restList from "../utils/data";

const Body = () => {
  const [filterRest, setFilterRest] = useState(restList);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let filteredArray = [];
    if (searchInput.trim() !== "") {
      filteredArray = filterRest.filter((restarent) =>
        restarent.info.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilterRest(filteredArray);
    } else {
      setFilterRest(restList);
    }
  }, [searchInput]);

  return (
    <div className="body-seciton">
      <div className="search-section">
        <input type="text" className="search-input" />
        <button
          className="search-btn"
          onClick={() =>
            setSearchInput(document.querySelector(".search-input").value)
          }
        >
          Search
        </button>

        <button
          className="top-rated-btn"
          onClick={() => {
            setSearchInput("");
            document.querySelector(".search-input").value = "";
          }}
        >
          Reset Filter
        </button>
      </div>
      <div className="res-section">
        {(filterRest.length > 0 &&
          filterRest.map((rest) => {
            return <Card key={rest.info.id} oneRest={rest.info} />;
          })) || (
          <h2>
            😔 No Restaurent Found! Please cleared the search and try again.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Body;
