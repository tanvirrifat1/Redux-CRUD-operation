import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        { id: 1, title: "Penchil a aka pori", author: "Humayon Ahmed" },
        { id: 2, title: "Deyal", author: "Humayon Ahmed" },
    ]
}

const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, author, title } = action.payload;
            const isBookExist = state.books.filter((state) => state.id === id)
            if (isBookExist) {
                isBookExist[0].title = title
                isBookExist[0].author = author
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        },
    }
})
export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;