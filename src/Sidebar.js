import React from "react";
import FilterDropdown from "./FilterDropdown";

export const Sidebar = ({ handleFilter, price, popularity }) => {
  const handleFilterChange = (filterType, value) => {
    handleFilter(filterType, value);
  };

  return (
    <div className="sidebar inline1">
      <h2>Filter Airlines</h2>
      <FilterDropdown
        label="Filter by Price"
        options={price}
        filterType="price"
        handleFilterChange={handleFilterChange}
      />
      <FilterDropdown
        label="Filter by Popularity"
        options={popularity}
        filterType="popularity"
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};
