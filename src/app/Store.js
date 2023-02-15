import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Pages/Features/Books/BookSlice";

const store = configureStore({
    reducer: {
        bookReducer: bookReducer,
    }
})
export default store;