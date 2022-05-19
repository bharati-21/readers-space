import { configureStore } from "@reduxjs/toolkit";
import {
	authReducer,
	modalReducer,
	postsReducer,
	userProfileReducer,
} from "features/";

const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postsReducer,
		modal: modalReducer,
		userProfile: userProfileReducer,
	},
});

export default store;
