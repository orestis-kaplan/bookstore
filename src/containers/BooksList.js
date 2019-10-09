import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => (
  <div>
    <CategoryFilter filter={filter} changeFilter={changeFilter} />
    <table>
      <tbody>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            removeBook={removeBook}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

function getFilteredBooks(books, filter) {
  if (filter === 'All') return books;
  return books.filter((book) => book.category === filter);
}

const mapStateToProps = (state) => ({ books: getFilteredBooks(state.books, state.filter) });

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
