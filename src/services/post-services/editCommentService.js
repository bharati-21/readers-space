import axios from "axios";

const editCommentService = (authToken, postId, commentId, commentData) =>
	axios.post(
		`/api/comments/edit/${postId}/${commentId}`,
		{ commentData },
		{ headers: { authorization: authToken } }
	);

export { editCommentService };
