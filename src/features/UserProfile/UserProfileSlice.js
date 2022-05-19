import {
	editUserProfileService,
	getUserPostsService,
	getUserProfileDetailsService,
} from "services";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	userProfile: {},
	userProfileLoading: true,
	userProfileError: null,
	userPosts: [],
	userPostsLoading: true,
	userPostsError: null,
};

export const getUserProfile = createAsyncThunk(
	"userProfile/getUserProfile",
	async ({ authToken, username }, { rejectWithValue }) => {
		try {
			const { data } = await getUserProfileDetailsService(
				authToken,
				username
			);
			return data.user;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

export const getUserPosts = createAsyncThunk(
	"userProfile/getUserPosts",
	async ({ authToken, username }, { rejectWithValue }) => {
		try {
			const {
				data: { posts },
			} = await getUserPostsService(authToken, username);
			return posts;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

export const editUserProfile = createAsyncThunk(
	"userProfile/editUserProfile",
	async ({ authToken, editedUserProfile }, { rejectWithValue }) => {
		try {
			const { data } = await editUserProfileService(
				authToken,
				editedUserProfile
			);
			return data.user;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

const userProfileSlice = createSlice({
	name: "userProfile",
	initialState,
	reducers: {
		removeUserProfile: (state, action) => {
			state.userProfile = {};
			state.userPosts = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUserProfile.pending, (state) => {
				state.userProfileLoading = true;
			})
			.addCase(getUserProfile.fulfilled, (state, action) => {
				state.userProfile = action.payload;
				state.userProfileLoading = false;
			})
			.addCase(getUserProfile.rejected, (state, action) => {
				state.userProfileError = action.payload;
				state.userProfileLoading = false;
			})
			.addCase(getUserPosts.pending, (state) => {
				state.userPostsLoading = true;
			})
			.addCase(getUserPosts.fulfilled, (state, action) => {
				state.userPosts = action.payload;
				state.userPostsLoading = false;
			})
			.addCase(getUserPosts.rejected, (state, action) => {
				state.userPostsError = action.payload;
				state.userPostsLoading = false;
			})
			.addCase(editUserProfile.pending, (state) => {
				state.userProfileLoading = true;
			})
			.addCase(editUserProfile.fulfilled, (state, action) => {
				state.userProfile = action.payload;
				state.userProfileLoading = false;
			})
			.addCase(editUserProfile.rejected, (state, action) => {
				state.userProfileError = action.payload;
				state.userProfileLoading = false;
			});
	},
});

export const getUserProfileState = (state) => state.userProfile;
export const userProfileReducer = userProfileSlice.reducer;
export const { removeUserProfile } = userProfileSlice.actions;
