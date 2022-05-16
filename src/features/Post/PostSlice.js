import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	deletePostService,
	editPostService,
	getPostsService,
	postLikeService,
	postNewPostService,
	postUnlikeService,
} from "services";

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

export const editPost = createAsyncThunk(
	"posts/editPost",
	async ({ authToken, postData }, { rejectWithValue }) => {
		try {
			const { data } = await editPostService(authToken, postData);
			return data.posts;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deletePost = createAsyncThunk(
	"posts/deletePost",
	async ({ authToken, postId }, { rejectWithValue }) => {
		try {
			const { data } = await deletePostService(authToken, postId);
			return data.posts;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const likePost = createAsyncThunk(
	"posts/likePost",
	async ({ authToken, postId }, { rejectWithValue }) => {
		try {
			const { data } = await postLikeService(authToken, postId);
			return data.posts;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const unlikePost = createAsyncThunk(
	"posts/unlilePost",
	async ({ authToken, postId }, { rejectWithValue }) => {
		try {
			const { data } = await postUnlikeService(authToken, postId);
			return data.posts;
		} catch (error) {
			return rejectWithValue(error.msg);
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
			})
			.addCase(editPost.pending, (state) => {
				state.postsLoading = true;
			})
			.addCase(editPost.fulfilled, (state, action) => {
				state.posts = action.payload;
				state.postsLoading = false;
			})
			.addCase(editPost.rejected, (state, action) => {
				state.postsLoading = false;
			})
			.addCase(deletePost.pending, (state) => {
				state.postsLoading = true;
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				state.posts = action.payload;
				state.postsLoading = false;
			})
			.addCase(deletePost.rejected, (state, action) => {
				state.postsLoading = false;
			})
			.addCase(likePost.fulfilled, (state, action) => {
				state.posts = action.payload;
			})
			.addCase(unlikePost.fulfilled, (state, action) => {
				state.posts = action.payload;
			});
	},
});

export const getPostsState = (state) => state.posts;
export const postsReducer = postsSlice.reducer;
