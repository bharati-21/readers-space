import React, { useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Picker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { useToast, useOnOutsideClick } from "hooks";
import {
	postNewPost,
	getAuthState,
	editModalVisibility,
	getModalState,
	editPost,
} from "features";
import { setPostToEdit } from "features/Modal/modalSlice";
import { Close, InsertPhoto } from "@mui/icons-material";

const PostContainer = ({ container }) => {
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const dispatch = useDispatch();
	const {
		authToken,
		authUser: { username },
	} = useSelector(getAuthState);
	const { showToast } = useToast();
	const modal = useSelector(getModalState);
	const { modalVisibilityState, postToEdit } = modal;

	const editPostMode = !container
		? false
		: Object.keys(postToEdit).length
		? true
		: false;

	const [postData, setPostData] = useState(
		editPostMode ? postToEdit.content : ""
	);
	const [postImage, setPostImage] = useState(postToEdit.postImage ?? null);
	const [wordCount, setWordCount] = useState(250 - postData.length);
	const emojiRef = useRef(null);

	const handleEmojiPickerVisibilityChange = (event) => {
		event.stopPropagation();
		setShowEmojiPicker((prevShowEmojiPicker) => !prevShowEmojiPicker);
	};

	const handleEmojiSelected = (event, emojiObject) => {
		event.stopPropagation();
		const selectedEmoji = emojiObject.emoji;
		setPostData((prevPostData) => prevPostData + selectedEmoji);
		setWordCount(250 - (postData.length + selectedEmoji.length));
	};

	const handlePostDataChange = (event) => {
		const postContent = event.target.value;
		setPostData(postContent);
		setWordCount(250 - postContent.length);
	};

	const handleCreatePost = async (event) => {
		event.preventDefault();
		if (modalVisibilityState) {
			dispatch(
				editModalVisibility({
					modalVisibilityState: false,
					modalChildren: "POST_MODAL",
				})
			);
			dispatch(setPostToEdit({}));
			setPostData("");
		}
		try {
			const response = editPostMode
				? await dispatch(
						editPost({
							authToken,
							postData: {
								...postToEdit,
								content: postData.trim(),
								postImage,
							},
						})
				  )
				: await dispatch(
						postNewPost({
							authToken,
							postData: { content: postData, postImage },
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

	const handleOnProfileImageChange = (event) => {
		const imageFile = event.target.files[0];
		if (Math.floor(imageFile / 1000000) > 3) {
			showToast("Image file size should be less than 3MB", "error");
			return;
		}
		if (!imageFile) return;
		const url = process.env.REACT_APP_CLOUDINARY_URL;

		const formData = new FormData();
		formData.append("file", imageFile);
		formData.append(
			"upload_preset",
			process.env.REACT_APP_CLOUD_UPLOAD_PRESET
		);

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setPostImage(data.url);
			})
			.catch((error) => {
				showToast(
					"Failed to update image. Please try again later.",
					"error"
				);
			});
	};

	const handleRemoveImage = (event) => {
		event.stopPropagation();
		setPostImage(null);
	};

	const profileImage = JSON.parse(
		localStorage.getItem("readers-space-user")
	).profileImage;

	useOnOutsideClick(emojiRef, () => setShowEmojiPicker(false));

	return (
		<form
			className="new-post-container shadow-sm rounded-sm bg-gray-100 dark:bg-slate-800 flex flex-col w-full gap-4 p-4"
			onSubmit={handleCreatePost}
		>
			<div className="flex flex-row items-start justify-between gap-4 w-full rounded-sm">
				<img
					className="inline-block h-10 w-10 md:h-8 md:w-8 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
					src={profileImage}
					alt={`${username} profile image`}
				/>
				<TextareaAutosize
					minRows="3"
					className="outline-none transition-all ease-in resize-none bg-inherit dark:text-gray-100 text-slate-900 border-none max-h-[30vh] rounded-sm h-max"
					placeholder="What's happening?"
					value={postData}
					onChange={handlePostDataChange}
				/>
			</div>
			{postImage ? (
				<div className="relative max-w-full flex-col items-center justify-center mx-auto">
					<img
						src={postImage}
						alt="Uploaded image"
						className="max-w-[300px] mx-auto w-full"
					/>
					<button
						className="absolute top-2 right-2"
						onClick={handleRemoveImage}
					>
						<Close />
					</button>
				</div>
			) : null}
			<div className="flex flex-row justify-between gap-2 w-full items-center flex-wrap">
				<div className="file-emoji-wrapper flex flex-row justify-center items-center gap-4">
					<div className="emoji-picker-container" ref={emojiRef}>
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
					<label
						className={`cursor-pointer ${
							postImage ? "disabled-btn" : "btn-primary"
						} py-0.5 px-1 flex flex-col items-center justify-center`}
					>
						<InsertPhoto
							className={`${
								postImage ? "text-gray-400" : "text-gray-100"
							}`}
						/>
						<input
							type="file"
							name="profileImage"
							accept="image/*"
							className="hidden disabled:disabled-btn"
							disabled={postImage}
							onChange={handleOnProfileImageChange}
						/>
					</label>
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
							(wordCount === 250 && !postImage) ||
							(editPostMode &&
								postData.trim() === postToEdit.content &&
								postImage === postToEdit.postImage)
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
