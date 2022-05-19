import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDocumentTitle, useToast } from "hooks";
import {
	getPostsState,
	PostsList,
	getAuthState,
	getUserPosts,
	getUserProfileState,
	getUserProfile,
	removeUserProfile,
} from "features";
import { UserProfile } from "./UserProfile";
import { useParams } from "react-router-dom";
import { getSortedPosts } from "utils";

const Profile = () => {
	const {
		authToken,
		authUser: { username: authUsername },
	} = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { posts } = useSelector(getPostsState);
	const { showToast } = useToast();
	const { userProfile, userProfileLoading, userPosts } =
		useSelector(getUserProfileState);

	const { setDocumentTitle } = useDocumentTitle();

	const { username } = useParams();

	useEffect(() => {
		setDocumentTitle("ReadersSpace | Profile");
		(async () => {
			try {
				const response = await dispatch(
					getUserProfile({ authToken, username })
				);
				if (response.error)
					throw new Error(
						"Could not fetch user profile. Please try again later",
						"error"
					);
			} catch (error) {
				showToast(error.message, "error");
			}
		})();

		(async () => {
			try {
				const response = await dispatch(
					getUserPosts({ authToken, username })
				);
				if (response.error)
					throw new Error(
						"Could not fetch user posts. Please try again later",
						"error"
					);
			} catch (error) {
				showToast(error.message, "error");
			}
		})();

		return () => {
			dispatch(removeUserProfile());
		};
	}, [username]);

	useEffect(() => {
		dispatch(getUserPosts({ authToken, username }));
	}, [posts]);

	const sortedPosts = getSortedPosts(userPosts, "LATEST");

	return userProfileLoading ? (
		<section></section>
	) : (
		<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full gap-4">
			<UserProfile
				userProfile={userProfile}
				userPostsLength={sortedPosts?.length}
			/>
			{userPosts.length ? (
				<PostsList posts={sortedPosts} />
			) : (
				<h3 className="text-lg md:text-2xl mt-3 text-green-600 font-semibold text-center">
					{username === authUsername ? "You" : "They"} are yet to
					share {username === authUsername ? "your" : "their"} musings
					about reading!
				</h3>
			)}
		</section>
	);
};

export { Profile };
