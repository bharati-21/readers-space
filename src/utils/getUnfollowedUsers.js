import { getUserDetails } from "./getAuthUserDetails";

const getFollowingUsers = (users, username) =>
	getUserDetails(users, username)?.following;

const findListItemsNotInFollowingUsers = (usersFollowed, list, username) =>
	list?.filter((listItem) =>
		username === listItem.username
			? false
			: usersFollowed?.find(
					(followedUser) =>
						followedUser.username === listItem.username
			  )
			? false
			: true
	);

export const getUnfollowedUsers = (users, username) => {
	const usersFollowed = getFollowingUsers(users, username);

	const unfollowedUsers = findListItemsNotInFollowingUsers(
		usersFollowed,
		users,
		username
	);

	if (unfollowedUsers.length >= 3) {
		return unfollowedUsers.slice(0, 3);
	}

	return unfollowedUsers;
};

export const getUnfollowedUsersPosts = (users, posts, username) => {
	const usersFollowed = getFollowingUsers(users, username);
	return findListItemsNotInFollowingUsers(usersFollowed, posts, username);
	const unfollowedUserPosts = posts?.filter((post) =>
		usersFollowed.find(
			(followedUsers) => followedUsers.username === post.username
		)
			? false
			: post.username === username
			? false
			: true
	);
};
