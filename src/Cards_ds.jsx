import React from "react";
import "./Cards.css";
import { FaStar } from "react-icons/fa";

function Card(props) {
  return (
    <div className="card col-lg-3 col-md-6 col-sm-12" style={{margin:"4%"}}>
      <div className="card-body">
        <h2 className="card-title">{props.nam}, {props.country}</h2>
        <p className="card-description">{props.title}</p>
        <div className="card-rating">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={index < props.rating ? "star filled" : "star"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
