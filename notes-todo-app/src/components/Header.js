import { React } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useContext } from "react";
// import Food from "./Food";
const Header = () => {
  const { incrementCount, count, loggedUser } = useContext(UserContext);
  const categories = ["Food", "Art", "Design", "Animals"];
  return (
    <div className="bg-gray-300 h-14 w-full">
      <ul className="list-none flex p-2 ">
        {categories.map((cat) => {
          return (
            <NavLink
              key={Math.floor(Math.random() * 10000)}
              className={({ isActive }) =>
                (isActive && "p-2 ml-6 bg-orange-400") || "p-2 ml-6"
              }
              to={"/"+cat}
            >
              {cat}
            </NavLink>
          );
        })}

 
        <Link to="/">
          <li className="p-2 ml-6 hover:bg-white">Home</li>
        </Link>
        <Link to="/about">
          <li className="p-2 ml-6 hover:bg-white">About Us</li>
        </Link>
        <Link to="/contact">
          <li className="p-2 ml-6 hover:bg-white">Contact Us</li>
        </Link>
        <li className="p-2 ml-6 hover:bg-white">{loggedUser}</li>
        <li className="p-2 ml-6 hover:bg-white">
          <button onClick={() => incrementCount()}>Click</button>
        </li>
        <li className="p-2 ml-6 hover:bg-white">{count}</li>
        <Link to="/counter-example-by-redux">
          <li className="p-2 ml-6 hover:bg-white">Counter By Redux</li>
        </Link>

        <Link to="/useinfo/6">
          <li className="p-2 ml-6 hover:bg-white">User Info</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
