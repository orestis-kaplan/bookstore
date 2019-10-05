import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import bookReducer from './reducers/book';

const sampleBooks = [
    {        
        id: Math.floor((Math.random() * 100) + 1),
        title: 'The Lord Of The Rings',
        category: 'Action'
    },
    {        
        id: Math.floor((Math.random() * 100) + 1),
        title: 'Interstellar',
        category: 'Sci-Fi'
    },
    {        
        id: Math.floor((Math.random() * 100) + 1),
        title: 'The Lord Of The Rings',
        category: 'Action'
    },
    {        
        id: Math.floor((Math.random() * 100) + 1),
        title: 'Kung-Fu-Panda',
        category: 'Kids'
    },
    {        
        id: Math.floor((Math.random() * 100) + 1),
        title: 'Troy',
        category: 'History'
    },
];

const store = Redux.createStore(bookReducer);

ReactDOM.render(
<Provider store = {store}>
    <App store = {store} />
</Provider>, document.getElementById('root'));
