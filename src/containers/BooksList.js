import React from 'react';

const BooksList = ({books}) => (
    <div>
        <table>
            <tr>
                <th>Book Id</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
                {books.map(book => (                    
                    <Book />
                ))}
        </table>
    </div>
);

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);

