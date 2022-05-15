import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";

import { useToast } from "hooks";
import { CircleProgressBar } from "components";
import { addCommentToPost, getAuthState } from "features";

const CommentInput = ({ postId }) => {
	const [commentText, setCommentText] = useState("");
	const dispatch = useDispatch();
	const { authToken } = useSelector(getAuthState);

	const { showToast } = useToast();

	const [areCommentsLoading, setAreCommentsLoading] = useState(false);

	const handleCommentPost = async (event) => {
		setAreCommentsLoading(true);
		event.preventDefault();

		try {
			const response = await dispatch(
				addCommentToPost({
					authToken,
					postId,
					commentData: { text: commentText },
				})
			);
			if (response?.error) throw new Error("Failed to post reply.");
			showToast("Posted reply successfully.", "success");
			setCommentText("");
		} catch (error) {
			showToast(error.message, "error");
		} finally {
			setAreCommentsLoading(false);
		}
	};

	const commentTextChange = (event) => setCommentText(event.target.value);

	const commentTextLength = 250 - commentText.trim().length;

	return (
		<div className="flex flex-row gap-2 items-start justify-start fap-2 w-full rounded-sm">
			<img
				className="inline-block sm:w-8 sm:h-8 h-6 w-6 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
				src="https://i.pravatar.cc/200"
				alt="Jane Doe Profile Image"
			/>
			<form
				className="relative flex flex-row items-start flex-1 justify-center"
				onSubmit={handleCommentPost}
			>
				<TextareaAutosize
					minRows="1"
					className="outline-none transition-all ease-in flex-1 max-w-full w-full resize-none bg-inherit dark:text-gray-100 text-slate-900 max-h-[30vh] p-1.5 h-max rounded-sm sm:text-sm border-solid border-gray-400 dark:border-gray-500 pr-14 text-xs disabled:bg-gray-200"
					placeholder="Enter your reply"
					disabled={areCommentsLoading && "disabled"}
					value={commentText}
					onChange={commentTextChange}
				/>
				<input
					type="submit"
					className="btn-primary w-max sm:text-sm cursor-pointer disabled:cursor-default font-medium disabled:disabled-btn absolute text-[0.65rem] top-[0.3rem] sm:top-1 right-1.5 px-1 py-[0.15rem]"
					disabled={
						areCommentsLoading ||
						commentTextLength === 250 ||
						commentTextLength < 0
					}
					value="Reply"
					onClick={handleCommentPost}
				/>
			</form>

			<CircleProgressBar
				minLength={0}
				maxLength={250}
				length={commentText.trim().length}
				lengthToDisplay={commentTextLength}
			/>
		</div>
	);
};

export { CommentInput };
