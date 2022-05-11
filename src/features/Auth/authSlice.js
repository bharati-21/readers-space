import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupService } from "services";
import { loginService } from "services/auth-services/loginService";

const initialState = {
	isAuth: localStorage.getItem("readers-space-token") === null ? false : true,
	authToken: localStorage.getItem("readers-space-token") ?? null,
	authLoading: false,
	authError: null,
	authUser: JSON.parse(localStorage.getItem("readers-space-user")) ?? null,
};

export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async (formData, { rejectWithValue }) => {
		try {
			const { data } = await loginService(formData);
			localStorage.setItem("readers-space-token", data.encodedToken);
			localStorage.setItem(
				"readers-space-user",
				JSON.stringify(data.foundUser)
			);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const signupUser = createAsyncThunk(
	"auth/signupUser",
	async (formData, { rejectWithValue }) => {
		try {
			const { data } = await signupService(formData);
			localStorage.setItem("readers-space-token", data.encodedToken);
			localStorage.setItem(
				"readers-space-user",
				JSON.stringify(data.createdUser)
			);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logoutUser: (state) => {
			state.isAuth = false;
			state.authToken = null;
			state.authLoading = false;
			state.authError = null;
			state.authUser = null;
			localStorage.removeItem("readers-space-token");
			localStorage.removeItem("readers-space-user");
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.authLoading = true;
				state.authError = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.authLoading = false;
				state.authError = null;
				state.authToken = action.payload.encodedToken;
				state.authUser = action.payload.foundUser;
				state.isAuth = true;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.authLoading = false;
				state.authError = action.payload;
			})
			.addCase(signupUser.pending, (state) => {
				state.authLoading = true;
				state.authError = null;
			})
			.addCase(signupUser.fulfilled, (state, action) => {
				state.authLoading = false;
				state.authError = null;
				state.authToken = action.payload.encodedToken;
				state.authUser = action.payload.createdUser;
				state.isAuth = true;
			})
			.addCase(signupUser.rejected, (state, action) => {
				state.authLoading = false;
				state.authError = action.payload;
			});
	},
});

export const getAuthState = (state) => state.auth;

export const { logoutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
