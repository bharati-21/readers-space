import axios from "axios";

const bookmarkPostService = (authToken, postId) =>
	axios.post(
		`/api/users/bookmark/${postId}`,
		{},
		{
			headers: { authorization: authToken },
		}
	);

export { bookmarkPostService };
