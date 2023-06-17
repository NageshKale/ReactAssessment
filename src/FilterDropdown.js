import React from "react";

const FilterDropdown = ({ label, options, filterType, handleFilterChange }) => {
  const handleOptionChange = (e) => {
    handleFilterChange(filterType, e.target.value);
  };

  return (
    <div className="filter-dropdown">
      <label>{label}:</label>
      <select onChange={handleOptionChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
