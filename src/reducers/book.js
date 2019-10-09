const sampleBooks = [
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'The Lord Of The Rings',
    category: 'Action',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Interstellar',
    category: 'Sci-Fi',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'The Lord Of The Rings',
    category: 'Action',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Kung-Fu-Panda',
    category: 'Kids',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Troy',
    category: 'History',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
];

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export default (state = sampleBooks, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
