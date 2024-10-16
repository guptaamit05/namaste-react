// import logo from "../../logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const {loggedUser} = useContext(UserContext);

  // Subscribing to the store using Selector...
  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)

  return (
    <div className="bg-gray-300 shadow-lg flex sm:flex-row flex-col justify-between items-center md:size-auto">
      <div className="logo-section w-20 sm:w-20">
        <Link to="/">
          <img
            className="mix-blend-multiply size-full sm:size-full"
            src=""
            alt="food restaurant img"
          />
        </Link>
      </div>
      <div className="nav-section flex items-center ">
        <ul className="flex p-3 mx-3 ">
          <li className="px-2 py-2 hover:bg-gray-200">
            Online Status:{useOnlineStatus() ? "🟢" : "🔴"}
          </li>
          <li className="px-3 py-2 hover:bg-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 py-2 hover:bg-gray-200">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 py-2 hover:bg-gray-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 py-2 hover:bg-gray-200">
            <Link to="/cart">Cart ({cartItems.length} Items) </Link>
          </li>
          <li className="px-4  py-2">
            <button>Login</button>
          </li>
          <li className="px-4 py-2 font-bold" >{loggedUser}
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
