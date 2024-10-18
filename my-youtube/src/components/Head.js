import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/navSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggesion, setHideShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // console.log(searchQuery)
  useEffect(() => {
    // make an api call on after every key  press
    // but if the difference between 2 api call is less then 200ns then
    // decline the API call

    /**
     * searchCache =  {
     * "iphone": ["iphone11", "iphone13", "iphone14"]
     * }
     * searchQuery  = iphone
     */
    const timout = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        callSearchApi();
      }
    }, 400); //call an api call after 300ms..
    return () => clearTimeout(timout);
  }, [searchQuery]);

  const callSearchApi = async () => {
    const d = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await d.json();
    console.log(result[1]);
    setSuggestion(result[1]);

    dispatch(
      cacheResults({
        [searchQuery]: result[1],
      })
    );
  };

  return (
    <div className="sticky top-0 flex justify-between items-center shadow-lg bg-gray-100 ">
      <div className="p-3 w-20 flex justify-evenly items-center ">
        <img
          onClick={toggleMenuHandler}
          className="w-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="Menu"
        />
        <img
          className="w-full cursor-pointer"
          src="https://cdn.pixabay.com/photo/2021/09/11/18/21/youtube-6616310_1280.png"
          alt="youtube-logo"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex items-center">
          <input
            type="text"
            onFocus={() => setHideShowSuggestion(true)}
            onBlur={() => setHideShowSuggestion(false)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-3xl border border-gray-500 "
          />
          <button className="relative  border border-gray-400 px-5 py-1 m-2 ">
            Search
          </button>
        </div>
        {showSuggesion && suggestion.length > 0 && (
          <div className="fixed top-16 bg-white py-2 px-5 w-96">
            <ul>
              {suggestion.map((search, indx) => (
                <li
                  key={Math.random() + indx}
                  className="px-1 py-2 hover:bg-gray-100"
                >
                  {search}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-8 mr-5">
        <img
          className="w-full cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Head;
