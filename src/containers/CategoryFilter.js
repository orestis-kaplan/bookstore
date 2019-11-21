import React from 'react';
import PropTypes from 'prop-types';
import './styles/CategoryFilter.css';

const filters = ['All', 'React', 'Rails', 'HTML5', 'SCSS', 'SQL', 'Python', 'Java'];

const CategoryFilter = ({ changeFilter }) => (
  <div className="categoryFilter">
    <select onChange={(event) => changeFilter(event.target.value)}>
      {filters.map((filter) => (
        <option key={filter} value={filter}>{filter}</option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;