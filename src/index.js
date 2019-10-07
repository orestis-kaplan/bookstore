import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import bookReducer from './reducers/book';
import { Provider } from 'react-redux';
import App from './components/App';

const store = createStore(bookReducer);

ReactDOM.render(
    <Provider store = {store}>
    <App store = {store} />
</Provider>, document.getElementById('root'));

//console.log(store.dispatch(removeBook(book)));
