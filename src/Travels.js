import React from "react";

const Travels = ({ destination, country, photo, distance }) => (
  <figure>
    <img className="photo" src={photo} alt={destination} />
    <figcaption>
        <p>{destination}</p>
        <p>{country}</p>
      <blockquote>{distance}</blockquote>
    </figcaption>
  </figure>
);

export default Travels;