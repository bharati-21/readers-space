import axios from "axios";

const getPostsService = (authToken) =>
	axios.get("/api/posts", { headers: { authorization: authToken } });

export { getPostsService };
