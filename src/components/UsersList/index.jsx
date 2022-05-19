import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuthState, postFollowUser } from "features";
import { useToast } from "hooks";

const UsersList = ({ userList, inComponent }) => {
	const {
		authUser: { username },
		authToken,
	} = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { showToast } = useToast();
	const navigate = useNavigate();

	const handleUserFollow = async (event, username) => {
		try {
			const response = await dispatch(
				postFollowUser({ authToken, username })
			);
			if (response?.error) {
				throw new Error(
					"Failed to follow user. Please try again later."
				);
			}
			localStorage.setItem(
				"readers-space-user",
				JSON.stringify(response.payload.user)
			);
			showToast("Followed user successfully.", "success");
		} catch (error) {
			showToast(error.message, "error");
		}
	};

	const handleUserInfoClicked = (username) => {
		navigate(`/profile/${username}`);
	};

	const mappedUsersList = userList?.map((user) => {
		let { firstName, lastName, profileImage } =
			user.username === username
				? JSON.parse(localStorage.getItem("readers-space-user"))
				: user;

		return (
			<div
				key={user.username}
				className="flex text-left flex-row items-start justify-between gap-2"
			>
				<li className="flex flex-row items-start justify-between w-full gap-3">
					<div className="user-info gap-2 flex flex-row items-start justfiy-between">
						<img
							className="cursor-pointer inline-block h-7 w-7 rounded-full ring-2 ring-sky-500"
							src={
								profileImage ??
								"https://res.cloudinary.com/dylkclyom/image/upload/v1652861304/default_profile_400x400_kl4nw3.png"
							}
							alt={`${user.username} profile picture`}
							onClick={(e) =>
								handleUserInfoClicked(user.username)
							}
						/>
						<div className="username-info flex flex-col justify-between items-start">
							<p
								className="font-semibold text-xs break-before-all break-all cursor-pointer"
								onClick={(e) =>
									handleUserInfoClicked(user.username)
								}
							>
								{`${firstName} ${lastName}`}
							</p>
							<p
								className="text-xs break-before-all break-all cursor-pointer"
								onClick={(e) =>
									handleUserInfoClicked(user.username)
								}
							>
								@{user.username}
							</p>
						</div>
					</div>
					{inComponent === "SUGGESTED_USERS" ? (
						<button
							className="btn-primary text-xs py-1 px-2"
							onClick={(e) => handleUserFollow(e, user.username)}
						>
							Follow
						</button>
					) : null}
				</li>
			</div>
		);
	});
	return (
		<ul className="flex list-none flex-col gap-4 justify-start w-full bg-gray-100 dark:bg-slate-800 p-3 rounded-sm">
			{mappedUsersList}
		</ul>
	);
};

export { UsersList };
