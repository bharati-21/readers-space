import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NorthEast } from "@mui/icons-material";

import {
	editModalVisibility,
	getAuthState,
	getUsersState,
	postFollowUser,
	postUnfollowUser,
	setUserList,
} from "features";
import { useToast } from "hooks";
import { getUserDetails } from "utils";

const UserProfile = ({ userProfile, userPostsLength }) => {
	const { username, firstName, lastName, website, bio } = userProfile;

	const dispatch = useDispatch();
	const {
		authUser: { username: authUsername },
		authToken,
	} = useSelector(getAuthState);
	const { users } = useSelector(getUsersState);
	const { showToast } = useToast();

	const [isFollowingService, setIsFollowingService] = useState(false);

	const handleModalVisibilityChange = (e) => {
		e.stopPropagation();
		dispatch(
			editModalVisibility({
				modalVisibilityState: true,
				modalChildren: "EDIT_PROFILE",
			})
		);
	};

	const { profileImage } =
		username === authUsername
			? JSON.parse(localStorage.getItem("readers-space-user"))
			: userProfile;

	const authUsersFollowing = getUserDetails(users, authUsername)?.following;
	const isFollowing = getUserDetails(authUsersFollowing, username)
		? true
		: false;

	const usersFollowing = getUserDetails(users, username)?.following;
	const usersFollowers = getUserDetails(users, username)?.followers;

	const handleUserFollow = async () => {
		try {
			setIsFollowingService(true);
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
		} finally {
			setIsFollowingService(false);
		}
	};

	const handleShowUserList = (e, type) => {
		e.stopPropagation();
		if (!usersFollowing?.length && !usersFollowers?.length) return;

		if (type === "FOLLOWING" && usersFollowing?.length) {
			dispatch(
				editModalVisibility({
					modalVisibilityState: true,
					modalChildren: "USER_LIST",
				})
			);
			dispatch(setUserList({ list: usersFollowing, type: "FOLLOWING" }));
		} else if (type === "FOLLOWERS" && usersFollowers?.length) {
			dispatch(
				editModalVisibility({
					modalVisibilityState: true,
					modalChildren: "USER_LIST",
				})
			);
			dispatch(setUserList({ list: usersFollowers, type: "FOLLOWERS" }));
		}
	};

	return (
		<div className="w-full h-max relative max-w-[1080px]">
			<div className="image-container h-[8rem] w-full bg-sky-400 p-3 sm:p-5 ">
				{authUsername === username ? (
					<button
						className="bg-slate-900 hover:bg-slate-800 transition-all ease-linear text-gray-100 px-2 py-1 rounded-sm absolute right-3 top-3 sm:top-5 sm:right-5"
						onClick={handleModalVisibilityChange}
					>
						Edit Profile
					</button>
				) : null}
				<div className="absolute left-[50%] translate-x-[-50%] top-[40px] w-max text-center mx-auto">
					<img
						src={
							profileImage ??
							"https://res.cloudinary.com/dylkclyom/image/upload/v1652861304/default_profile_400x400_kl4nw3.png"
						}
						alt={`${username} profile picture`}
						className="w-[10rem] h-[10rem] rounded-full object-cover"
					/>
					<div className="relative top-[15px] h-full">
						<h4 className="text-xl font-semibold">@{username}</h4>
						<p>{`${firstName} ${lastName}`}</p>
					</div>
				</div>
			</div>
			<div className="bg-gray-100 dark:bg-slate-800 h-max p-5 w-full">
				<div className="user-info flex flex-col gap-4 items-center w-full mt-[150px]">
					<div className="about mx-auto text-center flex flex-col items-center justify-center gap-2">
						<p>{bio}</p>
						<div
							className="buttons-container mt-1 flex flex-row gap-2 items-center justify-center"
							onClick={handleUserFollow}
						>
							{username !== authUsername ? (
								<button
									className="text-sm btn-primary rounded-sm border max-w-[100px] py-1 px-2  text-center disabled:disabled-btn"
									disabled={isFollowingService}
								>
									{isFollowing ? "Unfollow" : "Follow"}
								</button>
							) : null}

							{website ? (
								<a
									href={website}
									target="_blank"
									className="text-sm text-sky-400 hover:text-sky-500 py-1 px-2 rounded-sm border  border-sky-400 text-center"
								>
									Visit Website <NorthEast fontSize="small" />
								</a>
							) : null}
						</div>
					</div>
					<div className="w-full mt-5 flex flex-wrap flex-row gap-4 items-center justify-center sm:justify-around mb-5">
						<h6
							className={`${
								usersFollowers?.length
									? "cursor-pointer hover:underline hover:text-sky-500"
									: "cursor-default"
							}`}
							onClick={(e) => handleShowUserList(e, "FOLLOWERS")}
						>
							Followers: {usersFollowers?.length}
						</h6>
						<h6>Posts: {userPostsLength}</h6>
						<h6
							className={`${
								usersFollowers?.length
									? "cursor-pointer hover:underline hover:text-sky-500"
									: "cursor-default"
							}`}
							onClick={(e) => handleShowUserList(e, "FOLLOWING")}
						>
							Following: {usersFollowing?.length}
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export { UserProfile };
