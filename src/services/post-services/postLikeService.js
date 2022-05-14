import axios from "axios";

const postLikeService = (authToken, postId) =>
	axios.post(
		`/api/posts/like/${postId}`,
		{},
		{
			headers: { authorization: authToken },
		}
	);

export { postLikeService };
