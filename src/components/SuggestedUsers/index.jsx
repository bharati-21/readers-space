import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getAllUsers,
	getUsersState,
	getAuthState,
	addSuggestedUsers,
} from "features";
import { useToast } from "hooks";
import { getUnfollowedUsers } from "utils";
import { UsersList } from "components";

const SuggestedUsers = () => {
	const dispatch = useDispatch();
	const { showToast } = useToast();
	const {
		authUser: { username },
		authToken,
	} = useSelector(getAuthState);
	const { users, usersLoading, usersError, suggestedUsers } =
		useSelector(getUsersState);

	useEffect(() => {
		if (!users.length) {
			(async () => {
				try {
					const response = await dispatch(getAllUsers(authToken));
					if (response?.error) {
						throw new Error("Could not fetch users data");
					}
				} catch (error) {
					showToast(error.message, "error");
				}
			})();
		}
	}, []);

	useEffect(() => {
		if (users.length) {
			dispatch(addSuggestedUsers(getUnfollowedUsers(users, username)));
			localStorage.setItem(
				"readers-space-user",
				JSON.stringify(users.find((user) => user.username === username))
			);
		}
	}, [users]);

	return usersError ? (
		<h3 className="md:text-2xl text-red-500 font-semibold text-center text-base relative z-[2]">
			Some error occurred. Could not load suggested users.
		</h3>
	) : usersLoading ? (
		<h3 className="md:text-2xl text-green-600 font-semibold text-center text-base relative z-[2]">
			Loading...
		</h3>
	) : suggestedUsers.length ? (
		<UsersList userList={suggestedUsers} inComponent="SUGGESTED_USERS" />
	) : (
		<h3 className="text-center text-base mt-[-1.5rem]">No suggestions.</h3>
	);
};

export { SuggestedUsers };
