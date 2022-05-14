import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	bookmarkPostService,
	deleteBookmarkedPostService,
	deletePostService,
	editPostService,
	getBookmarksService,
	getPostsService,
	postLikeService,
	postNewPostService,
	postUnlikeService,
} from "services";

const initialState = {
	posts: [],
	postsLoading: true,
	postsError: null,
	bookmarks: [],
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

export const getBookmarks = createAsyncThunk(
	"user/getBookmarks",
	async (authToken, { rejectWithValue }) => {
		try {
			const { data } = await getBookmarksService(authToken);
			return data.bookmarks;
		} catch (error) {
			return rejectWithValue(error.msg);
		}
	}
);

export const bookmarkPost = createAsyncThunk(
	"user/bookmarkPost",
	async ({ authToken, postId }, { rejectWithValue }) => {
		try {
			const { data } = await bookmarkPostService(authToken, postId);
			return data.bookmarks;
		} catch (error) {
			return rejectWithValue(error.msg);
		}
	}
);

export const removeBookmarkedPost = createAsyncThunk(
	"user/removeBookmarkedPost",
	async ({ authToken, postId }, { rejectWithValue }) => {
		try {
			const { data } = await deleteBookmarkedPostService(
				authToken,
				postId
			);
			return data.bookmarks;
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
			})
			.addCase(getBookmarks.pending, (state, action) => {
				state.postsLoading = true;
			})
			.addCase(getBookmarks.fulfilled, (state, action) => {
				state.postsLoading = false;
				state.bookmarks = action.payload;
			})
			.addCase(getBookmarks.rejected, (state, action) => {
				state.postsLoading = false;
				state.postsError = action.payload;
			})
			.addCase(bookmarkPost.fulfilled, (state, action) => {
				state.bookmarks = action.payload;
			})
			.addCase(removeBookmarkedPost.fulfilled, (state, action) => {
				state.bookmarks = action.payload;
			});
	},
});

export const getPostsState = (state) => state.posts;
export const postsReducer = postsSlice.reducer;
