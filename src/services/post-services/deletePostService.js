import axios from "axios";

const deletePostService = (authToken, postId) =>
	axios.delete(`/api/posts/${postId}`, {
		headers: { authorization: authToken },
	});

export { deletePostService };
