import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	postModalVisibilityState: false,
	postToBeEdited: {},
};

const postModal = createSlice({
	name: "postModal",
	initialState,
	reducers: {
		SET_POST_TO_BE_EDITED: (state, action) => {
			state.postToBeEdited = action.payload;
		},
		EDIT_MODAL_VISIBILITY: (state, action) => {
			state.postModalVisibilityState = action.payload;
		},
	},
	extraReducers: {},
});

export const getPostModalState = (state) => state.postModal;
export const postModalReducer = postModal.reducer;
export const { SET_POST_TO_BE_EDITED, EDIT_MODAL_VISIBILITY } =
	postModal.actions;
