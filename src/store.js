import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postModalReducer, postsReducer } from "features/";

const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postsReducer,
		postModal: postModalReducer,
	},
});

export default store;
