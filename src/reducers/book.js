const sampleBooks = [
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Introduction',
    category: 'React',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Action Cable',
    category: 'Rails',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Forms',
    category: 'HTML5',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'Preprocessors',
    category: 'SCSS',
    percentage: Math.floor((Math.random() * 100) + 1),
  },
  {
    id: Math.floor((Math.random() * 100) + 1),
    title: 'GROUP BY,HAVING',
    category: 'SQL',
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
