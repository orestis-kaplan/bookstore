import React from 'react';

const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const BooksForm = () => (
    <form>
        <label for="title-input">Title</label>
        <input id="title-input" type="text"/>
        <select>
            {bookCategories.map(category => (
                <option value="category">{category}</option>
            ))}            
        </select>              
        <input type="submit"/>
    </form>
);
