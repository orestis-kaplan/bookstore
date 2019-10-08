import React from 'react';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <label htmlFor="title-input">Title</label>
    <input id="title-input" type="text" />
    <select>
      {bookCategories.map((category, index) => (
        <option value="category" key={index}>{category}</option>
      ))}
    </select>
    <input type="submit" />
  </form>
);

export default BooksForm;
