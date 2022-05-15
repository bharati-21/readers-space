import axios from "axios";

const postCommentService = (authToken, postId, commentData) =>
	axios.post(
		`/api/comments/add/${postId}
        `,
		{
			commentData,
		},
		{
			headers: { authorization: authToken },
		}
	);

export { postCommentService };
