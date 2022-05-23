import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";

import { useToast } from "hooks";
import { CircleProgressBar } from "components";
import { addCommentToPost, getAuthState, getUsersState } from "features";
import { getUserDetails } from "utils";
import { editComment, getPostsState } from "features/Post/PostSlice";

const CommentInput = ({ postId, editCommentId, setEditCommentId }) => {
	const { posts } = useSelector(getPostsState);

	const [commentText, setCommentText] = useState("");

	const getCommentText = () =>
		posts
			.find((post) => post._id === postId)
			.comments.find((comment) => comment._id === editCommentId)?.text;

	useEffect(() => {
		if (editCommentId) {
			setCommentText(getCommentText);
		}
	}, [editCommentId]);

	const dispatch = useDispatch();
	const {
		authToken,
		authUser: { username },
	} = useSelector(getAuthState);

	const [areCommentsLoading, setAreCommentsLoading] = useState(false);

	const { showToast } = useToast();

	const handleCommentPost = async (event) => {
		setAreCommentsLoading(true);
		event.preventDefault();

		try {
			const response = editCommentId
				? await dispatch(
						editComment({
							authToken,
							postId,
							commentId: editCommentId,
							commentData: { text: commentText },
						})
				  )
				: await dispatch(
						addCommentToPost({
							authToken,
							postId,
							commentData: { text: commentText },
						})
				  );
			if (response?.error)
				throw new Error(
					`Failed to ${editCommentId ? "edit" : "post"} reply.`
				);
			showToast(
				`${editCommentId ? "Edited" : "Posted"} reply successfully.`,
				"success"
			);
			setCommentText("");
			if (editCommentId) setEditCommentId(null);
		} catch (error) {
			showToast(error.message, "error");
		} finally {
			setAreCommentsLoading(false);
		}
	};

	const handleCancelEditComment = (event) => {
		event.preventDefault();
		setEditCommentId(null);
		setCommentText("");
	};

	const commentTextChange = (event) => setCommentText(event.target.value);

	const commentTextLength = 250 - commentText.trim().length;
	const { profileImage } = JSON.parse(
		localStorage.getItem("readers-space-user")
	);

	return (
		<div className="flex flex-row gap-2 items-start justify-start fap-2 w-full rounded-sm">
			<img
				className="inline-block sm:w-8 sm:h-8 h-6 w-6 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
				src={profileImage}
				alt={`${username} profile image`}
			/>
			<form
				className="flex flex-col items-start flex-1 justify-center gap-2"
				onSubmit={handleCommentPost}
			>
				<input
					className="outline-none transition-all ease-in flex-1 max-w-full w-full resize-none bg-inherit dark:text-gray-100 text-slate-900 p-1.5 h-max rounded-sm sm:text-sm border border-solid border-gray-400 dark:border-gray-500 text-xs disabled:bg-gray-200"
					placeholder="Enter your reply"
					disabled={areCommentsLoading && "disabled"}
					value={commentText}
					onChange={commentTextChange}
				/>
				<div className="flex flex-row w-full justify-between items-center">
					<CircleProgressBar
						minLength={0}
						maxLength={250}
						length={commentText.trim().length}
						lengthToDisplay={commentTextLength}
						className="flex-shrink-0"
					/>
					{editCommentId ? (
						<div className="edit-buttons-container flex flex-row w-full gap-2 justify-end">
							<button
								type="button"
								className="btn-primary-link border border-sky-400 hover:border-sky-500 w-max py-1 px-2 disabled:disabled-btn text-xs"
								onClick={handleCancelEditComment}
								disabled={areCommentsLoading}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="btn-primary w-max py-1 px-2 text-xs disabled:disabled-btn"
								disabled={
									areCommentsLoading ||
									commentTextLength === 250 ||
									commentTextLength < 0 ||
									getCommentText() === commentText.trim()
								}
							>
								Save
							</button>
						</div>
					) : (
						<input
							type="submit"
							className="btn-primary w-max sm:text-sm cursor-pointer disabled:cursor-default font-medium disabled:disabled-btn text-xs px-2 py-1"
							disabled={
								areCommentsLoading ||
								commentTextLength === 250 ||
								commentTextLength < 0
							}
							value={editCommentId ? "Save" : "Reply"}
							onClick={handleCommentPost}
						/>
					)}
				</div>
			</form>
		</div>
	);
};

export { CommentInput };
