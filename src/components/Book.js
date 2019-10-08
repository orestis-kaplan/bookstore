import React from 'react';

const Book = ({id, title, category, removeBook}) => (
    <tr className="book-row">
        <th>{id}</th>
        <th>{title}</th>
        <th>{category}</th>
        <th><button onClick={()=>removeBook(id)}>Remove</button></th>
    </tr>
);

export default Book