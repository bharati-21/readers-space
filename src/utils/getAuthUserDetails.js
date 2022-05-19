export const getUserDetails = (users, username) =>
	users.find((user) => user.username === username);
