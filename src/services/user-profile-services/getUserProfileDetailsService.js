import axios from "axios";

const getUserProfileDetailsService = (authToken, username) =>
	axios.get(`/api/users/${username}`, {
		headers: { authorization: authToken },
	});

export { getUserProfileDetailsService };
