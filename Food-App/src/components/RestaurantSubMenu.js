import { useDispatch } from "react-redux";
import { SUBMENU_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const RestaurantSubMenu = (prop) => {
  const { subMenuItem } = prop;

  const dispatch = useDispatch();
  const handleItems = (submenu) =>{
    // Dispatch an action...
    // dispatch(addItem("Pizza"))   // {payload: "Pizza"}
    dispatch(addItem(submenu.card.info))

  }

  return (
    subMenuItem.length>0 &&
    subMenuItem.map((submenu) => {
      let { name, id, imageId, price, description } = submenu.card.info;
      return (
        <div key={id}>
          <div className="p-3 mt-2 mb-2 flex justify-between items-center">
            <div className="p-1 w-[80%]">
              <h5>{name}</h5>
              <span>Rs.{price / 100}</span>
              <p>{description}</p>
            </div>
            <div className="text-end">
                {imageId ? <div className="absolute">
                    <button onClick={() =>handleItems(submenu)} className="p-1 bg-black text-white shadow-lg">Add+</button>
                </div> :  <button className="p-1 bg-black text-white shadow-lg">Add+</button> }
              {imageId && <img className="w-[150px] h-50 object-cover" src={SUBMENU_URL + imageId} alt="item cat" />}
            </div>
          </div>
          <hr className="border-1 border-solid border-gray-400" />
        </div>
      );
    })
  );
};

export { RestaurantSubMenu };
