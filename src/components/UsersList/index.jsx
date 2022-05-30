import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
	getAuthState,
	getModalState,
	getUsersState,
	postFollowUser,
	postUnfollowUser,
} from "features";
import { useToast } from "hooks";
import { getUserDetails } from "utils";

const UsersList = ({ userList, inComponent, type }) => {
	const {
		authUser: { username },
		authToken,
	} = useSelector(getAuthState);
	const { users } = useSelector(getUsersState);
	const dispatch = useDispatch();
	const { showToast } = useToast();
	const navigate = useNavigate();
	const { onGoingNetworkCall } = useSelector(getUsersState);

	const handleUserFollow = async (event, username, isFollowing) => {
		try {
			const response = isFollowing
				? await dispatch(postUnfollowUser({ authToken, username }))
				: await dispatch(postFollowUser({ authToken, username }));
			if (response?.error) {
				throw new Error(
					`Failed to ${
						isFollowing ? "unfollow" : "follow"
					} user. Please try again later.`
				);
			}
			localStorage.setItem(
				"readers-space-user",
				JSON.stringify(response.payload.user)
			);
			showToast(
				`${isFollowing ? "Unfollowed" : "Followed"} user successfully.`,
				"success"
			);
		} catch (error) {
			showToast(error.message, "error");
		}
	};

	const handleUserItemClicked = (username) => {
		if (inComponent === "SEARCH_RESULTS") navigate(`/profile/${username}`);
		return;
	};

	const handleUserInfoClicked = (username) => {
		if (inComponent === "SEARCH_RESULTS") return;
		navigate(`/profile/${username}`);
	};

	const mappedUsersList = userList?.map((user) => {
		let { firstName, lastName, profileImage } =
			user.username === username
				? JSON.parse(localStorage.getItem("readers-space-user"))
				: user;

		const following = getUserDetails(users, username)?.following;
		const isFollowing = following?.find(
			(followingUser) => followingUser.username === user.username
		)
			? true
			: false;

		return (
			<div
				key={user.username}
				className={`flex text-left flex-row items-start justify-between gap-2 ${
					inComponent === "SEARCH_RESULTS"
						? "border-b last:border-b-0 border-b-gray-400 pb-2 px-2 first:pt-2 cursor-pointer w-full"
						: "border-none"
				} ${inComponent === "MODAL" ? "p-2" : "p-0"}`}
				onClick={(e) => handleUserItemClicked(user.username)}
			>
				<li className="flex flex-row items-start justify-between w-full">
					<div className="user-info gap-2 flex flex-row items-start justfiy-between">
						<img
							className="cursor-pointer object-cover inline-block h-7 w-7 rounded-full ring-2 ring-sky-500"
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
							className="btn-primary text-xs py-1 px-2 disabled:disabled-btn"
							onClick={(e) =>
								handleUserFollow(e, user.username, isFollowing)
							}
							disabled={onGoingNetworkCall}
						>
							{isFollowing ? "Unfollow" : "Follow"}
						</button>
					) : null}
				</li>
			</div>
		);
	});
	return (
		<ul
			className={`flex list-none flex-col gap-4 justify-start w-full ${
				inComponent === "SEARCH_RESULTS"
					? "bg-inherit p-0 border border-gray-400  max-h-[250px] overflow-y-auto"
					: "bg-gray-100 dark:bg-slate-800 p-3"
			} rounded-sm ${inComponent == "MODAL" ? "py-6" : null}`}
		>
			{mappedUsersList}
		</ul>
	);
};

export { UsersList };
