import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Picker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "features";
import { useToast } from "hooks";
import { postNewPost } from "features";

const PostContainer = () => {
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [postData, setPostData] = useState("");
	const [wordCount, setWordCount] = useState(250);
    const dispatch = useDispatch();
    const { authToken } = useSelector(getAuthState);
    const { showToast } = useToast();

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
		try {
			const response = await dispatch(
				postNewPost({ authToken, postData: { content: postData } })
			);
            if(response.error) throw new Error('Failed to creat post. Please try again later.', 'error');
            showToast("Created post successfully.", "success");
		} catch (error) {
			showToast("Could not creat a post. Please try again.", "error");
		}
	};

	return (
		<form className="new-post-container bg-slate-800 flex flex-col w-full gap-4 p-4" onSubmit={handleCreatePost}>
			<div className="flex flex-row items-start justify-between gap-4 w-full rounded-sm">
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					alt="Jane Doe Profile Image"
				/>
				<TextareaAutosize
					minRows="3"
					className="outline-none transition-all ease-in resize-none bg-inherit text-gray-100 border-none max-h-[30vh] rounded-sm"
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
							class="btn-primary py-0.5 px-1"
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
                                    height: "200px",
                                    width: "100%",
                                    maxWidth: "300px",
                                    left: 0
                                }}
								onEmojiClick={handleEmojiSelected}
							/>
						) : null}
					</div>
				</div>
				<div className="flex flex-row gap-4 justify-center items-center">
					<div
						className={`flex flex-col items-center justify-center text-xs border-r-[50%] border-sky-500 ${
							wordCount <= 15 ? "text-red-500" : "text-gray-100"
						}`}
					>
						{wordCount}
					</div>
					<button
						type="submit"
						className="disabled:bg-gray-500 btn-primary py-1 px-4"
						disabled={wordCount < 0 || wordCount === 250}
					>
						Post
					</button>
				</div>
			</div>
		</form>
	);
};

export { PostContainer };
