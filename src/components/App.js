import React from 'react';
import './styles/App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const App = () => (
  <div className="App">
    <Header />
    <BooksList />
    <div className="formLine"></div>    
    <BooksForm />
  </div>
);

export default App;
