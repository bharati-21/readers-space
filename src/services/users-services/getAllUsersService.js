import axios from "axios";

const getAllUsersService = (authToken) =>
	axios.get("/api/users", { headers: { authorization: authToken } });

export { getAllUsersService };
