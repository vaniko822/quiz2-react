import React from 'react';
import searchIcon from '../search-icon.svg'
import nightIcon from '../dark-mode-icon.svg';
import dayIcon from '../day-mode-icon.svg';
import FilterDropdown from './FilterDropdown';

const SearchBar = ({ setSearchQuery, toggleDarkMode, darkMode }) => {
  const handleSearchClick = () => {
    console.log('Search icon clicked');
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input className="input-todo"
          type="text"
          placeholder="Search note..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-icon-button" onClick={handleSearchClick}>
          <img src={searchIcon} alt="Search" className="search-icon" />
        </button>
      </div>
      <div className="filter-dropdown">
        <select id="filter" onChange={FilterDropdown}>
          <option className="filter-dropdown" value="all">ALL</option>
          <option className="filter-dropdown" value="complete">COMPLETE</option>
          <option className="filter-dropdown" value="incomplete">INCOMPLETE</option>
        </select>
      </div>
      <button onClick={toggleDarkMode}>
        <img src={darkMode ? dayIcon : nightIcon} alt={darkMode ? "Night Mode" : "Day Mode"} className="mode-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
