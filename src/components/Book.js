import React from 'react';

const Book = (book) => (
    <tr>
        <th>{book.id}</th>
        <th>{book.title}</th>
        <th>{book.category}</th>
    </tr>
);