import React from "react";

const Card = (data) => {
  return (
    <div className="card">
      <img className="card-img" src={data.data.images[0].url}></img>
      <div className="card-details">{data.data.description}</div>
    </div>
    // console.log(data.data.images[0].url)
  );
};

export default Card;
