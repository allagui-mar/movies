import React from 'react';
import './App.css'

const Filter = ({ onFilterChange }) => {
  return (
    <div>
      <input type="text" className="filter-input" onChange={(e) => onFilterChange(e.target.value)} placeholder="Filter by title or rating" />
    </div>
  );
};
export default Filter;
