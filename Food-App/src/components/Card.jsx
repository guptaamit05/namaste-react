import { CDN_LINK } from "../index.js"
const Card = (prop) => {
  let { oneRest } = prop;
  return (
    <>
      <div className="border-1 h-[350px] shadow-xl w-[250px] mb-2 object-cover clear-both res-card-section">
        <img className="w-full h-48 object-cover" src={CDN_LINK + oneRest.cloudinaryImageId} alt="Apna Restaurant" />
        <div className="p-2">
          <h3>{oneRest.name}</h3>
          <h4>
            {oneRest.locality} {oneRest.areaName}
          </h4>
          <div className="pt-5 pb-1 flex justify-between items-end ">
            <h5>Rating: {oneRest.avgRating}</h5>
            <h5>{oneRest.sla.deliveryTime}Min</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export {Card};
