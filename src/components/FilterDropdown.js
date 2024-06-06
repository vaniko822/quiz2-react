import React from 'react';

const FilterDropdown = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter-dropdown">
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">ALL</option>
        <option value="complete">COMPLETE</option>
        <option value="incomplete">INCOMPLETE</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
