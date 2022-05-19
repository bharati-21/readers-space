import axios from "axios";

const postUnfollowUserService = (authToken, username) =>
	axios.post(
		`/api/users/unfollow/${username}`,
		{},
		{ headers: { authorization: authToken } }
	);

export { postUnfollowUserService };
