import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsService, postNewPostService } from "services";

const initialState = {
	posts: [],
	postsLoading: true,
	postsError: null,
};

export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async (authToken, { rejectWithValue }) => {
		try {
			const { data } = await getPostsService(authToken);
			return data.posts;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const postNewPost = createAsyncThunk(
	"posts/newPost",
	async ({ authToken, postData }, { rejectWithValue }) => {
		try {
			const { data } = await postNewPostService(authToken, postData);
			return data.posts;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPosts.pending, (state) => {
				state.postsLoading = true;
				state.postsError = null;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.posts = action.payload;
				state.postsLoading = false;
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.postsLoading = false;
				state.postsError = action.payload;
			})
			.addCase(postNewPost.pending, (state) => {
				state.postsLoading = true;
			})
			.addCase(postNewPost.fulfilled, (state, action) => {
				state.posts = action.payload;
				state.postsLoading = false;
			})
			.addCase(postNewPost.rejected, (state, action) => {
				state.postsLoading = false;
			});
	},
});

export const getPostsState = (state) => state.posts;
export const postsReducer = postsSlice.reducer;
