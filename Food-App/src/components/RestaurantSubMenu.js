import { SUBMENU_URL } from "../utils/constant";

const RestaurantSubMenu = (prop) => {
  const { subMenuItem } = prop;
  return (
    subMenuItem.length>0 &&
    subMenuItem.map((submenu) => {
      let { name, id, imageId, price, description } = submenu.card.info;
      return (
        <div key={id}>
          <div className="mt-2 mb-2 flex justify-between items-center">
            <div className="p-1 w-[80%]">
              <h5>{name}</h5>
              <span>Rs.{price / 100}</span>
              <p>{description}</p>
            </div>
            <div className="text-end">
              {imageId && <img className="w-[100px] h-50 object-cover" src={SUBMENU_URL + imageId} alt="item cat" />}
            </div>
          </div>
          <hr className="border-1 border-solid border-gray-400" />
        </div>
      );
    })
  );
};

export { RestaurantSubMenu };
