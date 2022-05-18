import { configureStore } from "@reduxjs/toolkit";
import {
	authReducer,
	modalReducer,
	postsReducer,
	userProfileReducer,
	usersReducer,
} from "features/";

const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postsReducer,
		modal: modalReducer,
		userProfile: userProfileReducer,
		users: usersReducer,
	},
});

export default store;
