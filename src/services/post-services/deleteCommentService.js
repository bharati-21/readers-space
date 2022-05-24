import axios from "axios";

const deleteCommentService = (authToken, postId, commentId) =>
	axios.post(
		`/api/comments/delete/${postId}/${commentId}`,
		{},
		{
			headers: { authorization: authToken },
		}
	);

export { deleteCommentService };
