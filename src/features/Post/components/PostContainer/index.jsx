import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Picker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "hooks";
import {
	postNewPost,
	getAuthState,
	EDIT_MODAL_VISIBILITY,
	SET_POST_TO_BE_EDITED,
	getPostModalState,
	editPost,
} from "features";

const PostContainer = ({ container }) => {
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const dispatch = useDispatch();
	const { authToken } = useSelector(getAuthState);
	const { showToast } = useToast();
	const postModal = useSelector(getPostModalState);
	const { postModalVisibilityState, postToBeEdited } = postModal;

	const editPostMode = !container
		? false
		: Object.keys(postToBeEdited).length
		? true
		: false;

	const [postData, setPostData] = useState(
		editPostMode ? postToBeEdited.content : ""
	);
	const [wordCount, setWordCount] = useState(250 - postData.length);

	const handleEmojiPickerVisibilityChange = (event) =>
		setShowEmojiPicker((prevShowEmojiPicker) => !prevShowEmojiPicker);

	const handleEmojiSelected = (event, emojiObject) => {
		const selectedEmoji = emojiObject.emoji;
		setPostData((prevPostData) => prevPostData + selectedEmoji);
		setWordCount(250 - (postData.length + selectedEmoji.length));
	};

	const handlePostDataChange = (event) => {
		const postContent = event.target.value;
		setPostData(postContent);
		setWordCount(250 - postContent.trim().length);
	};

	const handleCreatePost = async (event) => {
		event.preventDefault();
		if (postModalVisibilityState) {
			dispatch(EDIT_MODAL_VISIBILITY(false));
			dispatch(SET_POST_TO_BE_EDITED({}));
			setPostData("");
		}
		try {
			const response = editPostMode
				? await dispatch(
						editPost({
							authToken,
							postData: {
								...postToBeEdited,
								content: postData.trim(),
							},
						})
				  )
				: await dispatch(
						postNewPost({
							authToken,
							postData: { content: postData },
						})
				  );
			if (response.error)
				throw new Error(
					editPostMode
						? "Failed to edit post. Please try again later."
						: "Failed to creat post. Please try again later.",
					"error"
				);
			showToast(
				editPostMode
					? "Edited post successfully."
					: "Created post successfully.",
				"success"
			);
		} catch (error) {
			showToast(error.message, "error");
		}
	};

	return (
		<form
			className="new-post-container shadow-sm rounded-sm bg-gray-100 dark:bg-slate-800 flex flex-col w-full gap-4 p-4"
			onSubmit={handleCreatePost}
		>
			<div className="flex flex-row items-start justify-between gap-4 w-full rounded-sm">
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					alt="Jane Doe Profile Image"
				/>
				<TextareaAutosize
					minRows="3"
					className="outline-none transition-all ease-in resize-none bg-inherit dark:text-gray-100 text-slate-900 border-none max-h-[30vh] rounded-sm h-max"
					placeholder="What's happening?"
					value={postData}
					onChange={handlePostDataChange}
				/>
			</div>
			<div className="flex flex-row justify-between gap-4 w-full items-center">
				<div className="file-emoji-wrapper flex flex-row justify-center items-center gap-4">
					<div className="emoji-picker-container">
						<button
							type="button"
							className="btn-primary py-0.5 px-1"
							onClick={handleEmojiPickerVisibilityChange}
						>
							😀
						</button>
						{showEmojiPicker ? (
							<Picker
								pickerStyle={{
									position: "absolute",
									top: "105%",
									zIndex: "5",
								}}
								onEmojiClick={handleEmojiSelected}
							/>
						) : null}
					</div>
				</div>
				<div className="flex flex-row gap-4 justify-center items-center">
					<div
						className={`flex flex-col items-center justify-center text-xs border-r-[50%] border-sky-500 ${
							wordCount <= 15
								? "text-red-500"
								: "text-s;ate-900 dark:text-gray-100"
						}`}
					>
						{wordCount}
					</div>
					<button
						type="submit"
						className="disabled:disabled-btn btn-primary py-1 px-4"
						disabled={
							wordCount < 0 ||
							wordCount === 250 ||
							(editPostMode &&
								postData === postToBeEdited.content)
						}
					>
						{editPostMode ? "Save" : "Post"}
					</button>
				</div>
			</div>
		</form>
	);
};

export { PostContainer };
