import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, removeBook,
}) => (
  <tr className="book-row">
    <th>{id}</th>
    <th>{title}</th>
    <th>{category}</th>
    <th><button type="button" onClick={() => removeBook(id)}>Remove</button></th>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
