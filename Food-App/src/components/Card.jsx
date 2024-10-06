import { CDN_LINK } from "../utils/constant";
export const Card = (prop) => {
  let { oneRest } = prop;
  return (
    <>
      <div className="res-card-section">
        <img src={CDN_LINK + oneRest.cloudinaryImageId} alt="Apna Restaurant" />
        <div className="res-card-title">
          <h3>{oneRest.name}</h3>
          <h4>
            {oneRest.locality} {oneRest.areaName}
          </h4>
          <div className="res-card-rating">
            <h5>Rating: {oneRest.avgRating}</h5>
            <h5>{oneRest.sla.deliveryTime}Min</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
