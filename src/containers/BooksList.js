import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({books}) => (    
    <div>
        {books}
        <table>
            <tbody>
                <tr>
                    <th>Book Id</th>
                    <th>Title</th>
                    <th>Category</th>
                </tr>
                {books.map(book => <Book key={book.id}/>)}
            </tbody>
        </table>
    </div>
);

BooksList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })).isRequired,
}

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList)
