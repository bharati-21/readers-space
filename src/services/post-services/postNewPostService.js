import axios from "axios";

const postNewPostService = (authToken, postData) =>
	axios.post(
		"/api/posts",
		{ postData },
		{ headers: { authorization: authToken } }
	);

export { postNewPostService };
