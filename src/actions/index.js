export const createBook = (book) => {
  const newBook = book;
  if (!newBook.id) newBook.id = Math.floor((Math.random() * 100) + 1);
  return { type: 'CREATE_BOOK', newBook };
};

export const changeFilter = (filter) => ({ type: 'CHANGE_FILTER', filter });

export const removeBook = (id) => ({ type: 'REMOVE_BOOK', id });
