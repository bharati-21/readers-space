import axios from "axios";

const editPostService = (authToken, postData) =>
	axios.post(
		`/api/posts/edit/${postData._id}`,
		{ postData },
		{ headers: { authorization: authToken } }
	);

export { editPostService };
