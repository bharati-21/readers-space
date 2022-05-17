import axios from "axios";

const deleteBookmarkedPostService = (authToken, postId) =>
	axios.post(
		`/api/users/remove-bookmark/${postId}`,
		{},
		{
			headers: { authorization: authToken },
		}
	);

export { deleteBookmarkedPostService };
