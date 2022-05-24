import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Delete, Edit } from "@mui/icons-material";
import Hyphenated from "react-hyphen";
import { useSelector, useDispatch } from "react-redux";
dayjs.extend(relativeTime);

import { getAuthState, deleteComment } from "features";
import { useToast } from "hooks";

const CommentsList = ({ post, setEditCommentId, editCommentId }) => {
	const { comments } = post;
	const {
		authUser: { username },
		authToken,
	} = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { showToast } = useToast();
	const [areCommentsLoading, setAreCommentsLoading] = useState(false);

	const handleChangeEditCommentId = (id) => setEditCommentId(id);

	const handleDeleteComment = async (commentId) => {
		setAreCommentsLoading(true);

		try {
			const response = await dispatch(
				deleteComment({
					authToken,
					postId: post?._id,
					commentId,
				})
			);

			if (response?.error) throw new Error(`Failed to delete reply.`);
			showToast(`Deleted reply successfully.`, "success");
			setEditCommentId(null);
		} catch (error) {
			showToast(error.message, "error");
		} finally {
			setAreCommentsLoading(false);
		}
	};

	return (
		<div className="flex flex-col gap-2 cursor-auto">
			{comments.map((comment) => (
				<div
					className="flex flex-row items-start justify-start gap-4 w-full bg-gray-200 dark:bg-slate-900 rounded-sm px-4 py-2 cursor-auto"
					key={comment._id}
				>
					<img
						className="inline-block w-8 h-8 cursor-pointer rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
						src={comment.profileImage}
						alt={`${comment.username} profile image`}
					/>
					<div className="flex-1 flex flex-col gap-y-3">
						<div className="flex flex-row justify-between items-center flex-wrap gap-x-[0.25rem] w-full">
							<h4 className="text-base font-semibold leading-snug">
								{comment.username}
							</h4>
							<div className="flex flex-row gap-2 flex-wrap items-center justify-between">
								<p className="text-xs text-grat-400 w-max">
									{dayjs(comment.createdAt).fromNow()}
								</p>
								{comment.username === username ? (
									<div className="buttons-container flex flex-row flex-wrap gap-2 items-center justify-between">
										<button
											className="btn-primary-link h-max w-max disabled:disabled-btn disabled:hover:bg-transparent disabled:hover:text-inherit"
											disabled={
												comment._id === editCommentId
											}
										>
											<Edit
												className="mui"
												onClick={(e) =>
													handleChangeEditCommentId(
														comment._id
													)
												}
											/>
										</button>
										<button
											className="btn-primary-link h-max w-max disabled:disabled-btn disabled:hover:bg-transparent disabled:hover:text-inherit"
											disabled={
												areCommentsLoading
											}
											onClick={(e) =>
												handleDeleteComment(comment._id)
											}
										>
											<Delete className="mui" />
										</button>
									</div>
								) : null}
							</div>
						</div>
						<p className="whitespace-pre-wrap text-sm comment-text">
							<Hyphenated>{comment.text}</Hyphenated>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export { CommentsList };
