import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import AirlinesList from "./AirlinesList";
import "./App.css";

const airlinesData = [
  { name: "", popularity: "", price: "" },
  { name: "IndiGo", popularity: 5, price: 1000 },
  { name: "AirIndia", popularity: 4, price: 2000 },
  { name: "SpiceJet", popularity: 3, price: 3500 },
  { name: "Vistara", popularity: 4.5, price: 5000 },
  { name: "Emirates", popularity: 4, price: 6000 },
  { name: "AirAsia", popularity: 3, price: 1500 },
  { name: "AirCoasta", popularity: 4.2, price: 5500 },
  { name: "GoFirst", popularity: 3.9, price: 5500 },
  // Add more airline objects as needed
];
let price = airlinesData.map((item) => item.price);
let popularity = airlinesData.map((item) => item.popularity);

const App = () => {
  const [filteredAirlines, setFilteredAirlines] = useState(airlinesData);
  console.log("filteredAirlines", filteredAirlines);

  const handleFilterChange = (filterType, value) => {
    handleFilter(filterType, value);
  };

  const handleFilter = (filterType, value) => {
    let filteredData = airlinesData;

    if (filterType === "price" && value !== "") {
      filteredData = filteredData.filter(
        (airline) => airline.price === Number(value)
      );
    }

    if (filterType === "popularity" && value !== "") {
      filteredData = filteredData.filter(
        (airline) => airline.popularity === Number(value)
      );
    }

    if (filterType === "name") {
      filteredData = filteredData.filter((airline) =>
        airline.name.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredAirlines(filteredData);
  };

  return (
    <div className="app">
      <div className="name-filter">
        <label>Filter by Airline Name:</label>
        <input
          type="text"
          onChange={(e) => handleFilterChange("name", e.target.value)}
        />

        <Sidebar
          handleFilter={handleFilter}
          price={price}
          popularity={popularity}
        />
        <AirlinesList airlines={filteredAirlines} />
      </div>
    </div>
  );
};

export default App;
