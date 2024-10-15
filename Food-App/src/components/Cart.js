import { useDispatch, useSelector } from "react-redux";
import { SUBMENU_URL } from "../utils/constant.js";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const subMenuItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

    const clearCartItems = () =>{
        dispatch(clearCart())
    }

  return (
    <>
      <div className="h-screen mx-24 p-2">
        <h1 className="font-bold text-center underline text-2xl">Cart</h1>
        <button className="p-2 bg-black text-white rounded-lg"  onClick={clearCartItems}  >Clear Cart</button>
        {subMenuItem.length > 0 ? (
          subMenuItem.map((submenu) => {
            let { name, id, imageId, price, description } = submenu;
            return (
              <>
                <div className="p-1 mt-1 mb-1 flex justify-between items-center" key={id+Math.random()}>
                  <div className="p-1 w-[80%]">
                    <h5>{name}</h5>
                    <span>Rs.{price / 100}</span>
                    <p>{description}</p>
                  </div>
                  <div className="text-end">
                    {imageId && (
                      <img
                        className="w-[150px] h-50 object-cover"
                        src={SUBMENU_URL + imageId}
                        alt="item cat"
                      />
                    )}
                  </div>
                </div>

                <hr className="border-1 border-solid border-gray-400" />
              </>
            );
          })
        ) : (
          <h2 className="text-center mt-4 font-bold text-xl">
            No Item added yet!
          </h2>
        )}
      </div>
      ;
    </>
  );
};

export default Cart;
