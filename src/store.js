import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postsReducer } from "features/";

const store = configureStore({
	reducer: { auth: authReducer, posts: postsReducer },
});

export default store;
