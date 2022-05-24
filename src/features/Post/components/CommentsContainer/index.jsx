import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { CommentInput } from "./CommentInput";
import { CommentsList } from "./CommentsList";

const CommentsContainer = () => {
	const [editCommentId, setEditCommentId] = useState(null);

	const post = useOutletContext();
	return (
		<div className="flex flex-col gap-4">
			<CommentInput
				postId={post._id}
				editCommentId={editCommentId}
				setEditCommentId={setEditCommentId}
			/>
			<CommentsList
				post={post}
				setEditCommentId={setEditCommentId}
				editCommentId={editCommentId}
			/>
		</div>
	);
};

export { CommentsContainer };
