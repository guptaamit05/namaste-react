import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isOpen = useSelector((store)=>store.app.isMenuOpen)

  if(!isOpen) return "";
  
  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="py-2">
        <li><Link to="/">Home</Link></li>
        <li>Live</li>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default SideBar;
