export const createBook = (book) => {
    book.id = Math.floor((Math.random() * 100) + 1);

    return { type: 'CREATE_BOOK', book }
}

export const removeBook = (book) => {
    return { type: 'REMOVE_BOOK', book }
}