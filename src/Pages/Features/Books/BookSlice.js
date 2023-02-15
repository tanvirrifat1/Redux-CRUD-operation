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
        }
    }
})
export const { showBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;