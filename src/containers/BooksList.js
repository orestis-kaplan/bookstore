import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter'
import './styles/BooksList.css';


const BooksList = ({
  books, removeBook, changeFilter,
}) => (
  <div className="table">
    <CategoryFilter changeFilter={changeFilter} />
    <table>
      <tbody>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            percentage={book.percentage}
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
    percentage: PropTypes.number.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

function getFilteredBooks(books, filter) {
  if (filter === 'All') return books;
  return books.filter((book) => book.category === filter);
}

const mapStateToProps = (state) => ({ books: getFilteredBooks(state.books, state.filter) });

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
