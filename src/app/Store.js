import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/Counter/CounterSlice";
import PostReducer from "../features/Posts/PostSlice";

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        posts: PostReducer,
    }
})
export default store