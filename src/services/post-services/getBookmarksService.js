import axios from "axios";

const getBookmarksService = (authToken) =>
	axios.get(`/api/users/bookmark`, {
		headers: { authorization: authToken },
	});

export { getBookmarksService };
