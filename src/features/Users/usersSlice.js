import { getAllUsersService } from "services";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
	users: [],
	usersLoading: true,
	usersError: null,
};

export const getAllUsers = createAsyncThunk(
	"users/getUsers",
	async ({ authToken, username }, { rejectWithValue }) => {
		try {
			const { data } = await getAllUsersService(authToken, username);
			return data.user;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
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
			});
	},
});

export const getUsersState = (state) => state.users;
export const usersReducer = usersSlice.reducer;
