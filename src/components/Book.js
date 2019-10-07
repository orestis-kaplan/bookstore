import React from 'react';

const Book = ({id, title, category}) => (
    <tr className="book-row">
        <th>{id}</th>
        <th>{title}</th>
        <th>{category}</th>
    </tr>
);

export default Book