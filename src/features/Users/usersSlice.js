import {
	getAllUsersService,
	postFollowUserService,
	postUnfollowUserService,
} from "services";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	users: [],
	usersLoading: true,
	usersError: null,
	suggestedUsers: [],
	onGoingNetworkCall: false,
};

export const getAllUsers = createAsyncThunk(
	"users/getUsers",
	async (authToken, { rejectWithValue }) => {
		try {
			const { data } = await getAllUsersService(authToken);
			return data.users;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

export const postFollowUser = createAsyncThunk(
	"users/postFollowUser",
	async ({ authToken, username }, { rejectWithValue }) => {
		try {
			const { data } = await postFollowUserService(authToken, username);
			return data;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

export const postUnfollowUser = createAsyncThunk(
	"users/postUnfollowUser",
	async ({ authToken, username }, { rejectWithValue }) => {
		try {
			const { data } = await postUnfollowUserService(authToken, username);
			return data;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addSuggestedUsers: (state, action) => {
			state.suggestedUsers = action.payload;
		},
		setUsersInitialState: (state, action) => {
			state.users = [];
			state.usersLoading = true;
			state.usersError = null;
			state.suggestedUsers = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllUsers.pending, (state) => {
				state.usersLoading = true;
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.users = action.payload;
				state.usersLoading = false;
			})
			.addCase(getAllUsers.rejected, (state, action) => {
				state.usersError = action.payload;
				state.usersLoading = false;
			})
			.addCase(postFollowUser.pending, (state) => {
				state.usersLoading = true;
				state.onGoingNetworkCall = true;
			})
			.addCase(postFollowUser.fulfilled, (state, action) => {
				const { user, followUser } = action.payload;
				state.users = state.users.map((stateUser) =>
					stateUser.username === user.username
						? { ...user }
						: stateUser.username === followUser.username
						? { ...followUser }
						: stateUser
				);
				state.usersLoading = false;
				state.onGoingNetworkCall = false;
			})
			.addCase(postFollowUser.rejected, (state, action) => {
				state.usersError = action.payload;
				state.usersLoading = false;
				state.onGoingNetworkCall = false;
			})
			.addCase(postUnfollowUser.pending, (state) => {
				state.usersLoading = true;
				state.onGoingNetworkCall = true;
			})
			.addCase(postUnfollowUser.fulfilled, (state, action) => {
				const { user, followUser } = action.payload;
				state.users = state.users.map((stateUser) =>
					stateUser.username === user.username
						? { ...user }
						: stateUser.username === followUser.username
						? { ...followUser }
						: stateUser
				);
				state.usersLoading = false;
				state.onGoingNetworkCall = false;
			})
			.addCase(postUnfollowUser.rejected, (state, action) => {
				state.usersError = action.payload;
				state.usersLoading = false;
				state.onGoingNetworkCall = false;
			});
	},
});

export const getUsersState = (state) => state.users;
export const usersReducer = usersSlice.reducer;
export const { addSuggestedUsers, setUsersInitialState } = usersSlice.actions;
