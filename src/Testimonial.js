import React from "react";
import "./Testimonial.css";
import Data from "./Cards_data";
import Card from "./Cards_ds";
import reviewsData from "./rewies";
import ReviewComponent from "./ReviewComponet";

function createCard(data) {
  return (
    <Card
      key={data.id}
      id={data.id}
      nam={data.nam}
      country={data.country}
      title={data.title}
    />
  );
}

function createReview(data) {
  return <ReviewComponent key={data.id} src={data.image} />;
}

function Testimonial() {
  return (
    <div className="container-fluid">
      <h1 id="h1">Testimonial</h1>
      <div
        id="testimonial"
        className="row"
        style={{ padding: "7%"}}
      >
        {Data.map(createCard)}
      </div>
      <div>
        <h1>Reviews</h1>
        <p>Your brand is what other people say about you when you're not in the room!!</p>
      </div>
      <div className="row">
        {reviewsData.map(createReview)}
      </div>
    </div>
  );
}

export default Testimonial;
