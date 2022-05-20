const getSearchedUsers = (users, searchText) =>
	users.filter(
		(user) =>
			user.username.toLowerCase().includes(searchText.toLowerCase()) ||
			user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
			user.lastName.toLowerCase().includes(searchText.toLowerCase())
	);

export { getSearchedUsers };
