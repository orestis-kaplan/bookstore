export const createBook = (book) => {
  if (!book.id) book.id = Math.floor((Math.random() * 10000) + 1);
  if (!book.percentage) book.percentage = Math.floor((Math.random() * 100) + 1);
  return { type: 'CREATE_BOOK', book };
};

export const changeFilter = (filter) => ({ type: 'CHANGE_FILTER', filter });

export const removeBook = (id) => ({ type: 'REMOVE_BOOK', id });
