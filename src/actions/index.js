const createBook = (book) => {
    book.id = Math.floor((Math.random() * 100) + 1);

    return { type: 'CREATE_BOOK', book }
}

const removeBook = (book) => {
    return { type: 'REMOVE_BOOK', book }
}

export default {createBook, removeBook}