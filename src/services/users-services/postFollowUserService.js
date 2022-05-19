import axios from "axios";

const postFollowUserService = (authToken, username) =>
	axios.post(
		`/api/users/follow/${username}`,
		{},
		{ headers: { authorization: authToken } }
	);

export { postFollowUserService };
