import React from "react";
import { useOutletContext } from "react-router-dom";

import { CommentInput } from "./CommentInput";
import { CommentsList } from "./CommentsList";

const CommentsContainer = () => {
	const post = useOutletContext();
	return (
		<div className="comments-container">
			<CommentInput postId={post._id} />
			<CommentsList post={post} />
		</div>
	);
};

export { CommentsContainer };
