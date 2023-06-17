import React from "react";

const AirlinesList = ({ airlines }) => {
  return (
    <div className="airlines-list inline2">
      <h2>Airlines List</h2>
      {airlines.length > 0 ? (
        <ul>
          {airlines.map((airline, index) => (
            <li key={index}>
              {airline.name} - Popularity: {airline.popularity} - Price:
              {airline.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No airlines found.</p>
      )}
    </div>
  );
};

export default AirlinesList;
