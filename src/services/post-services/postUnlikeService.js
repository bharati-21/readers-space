import axios from "axios";

const postUnlikeService = (authToken, postId) =>
	axios.post(
		`/api/posts/dislike/${postId}`,
		{},
		{
			headers: { authorization: authToken },
		}
	);

export { postUnlikeService };
