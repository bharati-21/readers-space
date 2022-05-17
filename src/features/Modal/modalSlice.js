import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalVisibilityState: false,
	modalChildren: null,
	postToEdit: {},
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setPostToEdit: (state, action) => {
			state.postToEdit = action.payload;
		},
		editModalVisibility: (state, action) => {
			state.modalVisibilityState = action.payload.modalVisibilityState;
			state.modalChildren = action.payload.modalChildren;
		},
	},
	extraReducers: {},
});

export const getModalState = (state) => state.modal;
export const modalReducer = modalSlice.reducer;
export const { setPostToEdit, editModalVisibility } = modalSlice.actions;
