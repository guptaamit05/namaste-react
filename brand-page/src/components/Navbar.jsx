import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  return (
    <nav className="h-16 w-full m-0 p-0 flex justify-between items-center">
      <Link to="/">
        <img
          className="pl-5 md:pl-10"
          src="./images/brand_logo.png"
          alt="logo of nike"
        />
      </Link>

      <ul
        className={`list-none font-bold flex flex-col md:flex-row justify-center items-center gap-6 absolute md:static top-16 z-50 left-0 w-screen bg-white md:w-auto  md:bg-transparent transition-all ${
          isOpenMenu ? "block" : "hidden"
        }`}
      >
        <li className="cursor-pointer">MENU</li>
        <Link to="/contact-app">
        <li className="cursor-pointer">FIREBASE CONTACTS</li>
        </Link>
        <Link to="/food-app">
          <li className="cursor-pointer">FOOD APP</li>
        </Link>
        <Link to="/contact-us">
          <li className="cursor-pointer">CONTACT</li>
        </Link>
        <Link to="/dice-game">
          <li className="cursor-pointer">DICE GAME</li>
        </Link>
      </ul>

      <button
        className={`px-3 py-1 mr-10 md:mr-16 text-center bg-pink-500 text-white ${
          isOpenMenu ? "block" : "hidden"
        } `}
      >
        Login
      </button>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="pr-4 md:hidden font-bold text-2xl"
      >
        {" "}
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
