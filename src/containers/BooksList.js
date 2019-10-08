import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook }  from '../actions/index';
import Book from '../components/Book';

const BooksList = ({ books, removeBook }) => (
  <div>
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
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps,{ removeBook })(BooksList);
