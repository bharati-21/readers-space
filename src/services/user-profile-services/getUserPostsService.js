import axios from "axios";

const getUserPostsService = (authToken, username) =>
	axios.get(`/api/posts/user/${username}`, {
		headers: { authorization: authToken },
	});

export { getUserPostsService };
