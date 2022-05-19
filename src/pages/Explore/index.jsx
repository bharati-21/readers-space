import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDocumentTitle, useToast } from "hooks";
import {
	getPosts,
	getPostsState,
	getUsersState,
	PostsList,
	getAuthState,
} from "features";
import errorImage from "images/error-image.svg";
import caughtUp from "images/all-caught-up.svg";
import { Loader } from "components";
import { getSortedPosts, getUnfollowedUsersPosts } from "utils";

const Explore = () => {
	const {
		authToken,
		authUser: { username },
	} = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { posts, postsLoading, postsError } =
		useSelector(getPostsState);
	const { users, usersLoading, usersError } = useSelector(getUsersState);
	const { showToast } = useToast();

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("ReadersSpace | Explore");
		(async () => {
			try {
				const postsDispatchResponse = await dispatch(
					getPosts(authToken)
				);
				if (postsDispatchResponse.error)
					throw new Error(
						"Could not load users posts. Try again later"
					);
			} catch (error) {
				showToast(error.message, "error");
			}
		})();
	}, []);

	const unfollowedUsersPosts = getUnfollowedUsersPosts(
		users,
		posts,
		username
	);

	const sortedPosts = getSortedPosts(unfollowedUsersPosts, "LATEST");

	return postsLoading || usersLoading ? (
		<Loader />
	) : postsError || usersError ? (
		<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full">
			<div className="max-w-[1080px] w-full flex flex-col justify-start items-center">
				<h3 className="md:text-2xl text-red-500 font-semibold text-center text-base relative z-[2]">
					Some error occurred. Could not load posts. Please try again
					later.
				</h3>
				<img
					src={errorImage}
					alt="Broken error image"
					className="mx-auto w-full h-full mt-[-7rem] md:mt-[-4rem]"
				/>
			</div>
		</section>
	) : (
		<section className="home p-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start  w-full">
			<div className="max-w-[1080px] w-full flex flex-col justify-start items-center">
				{sortedPosts?.length ? (
					<PostsList posts={sortedPosts} />
				) : (
					<>
						<h2 className="mt-7 md:text-3xl text-green-600 font-semibold text-center text-lg relative z-[2]">
							You are all caught up!
						</h2>
						<img
							src={caughtUp}
							alt="Broken error image"
							className="mx-auto w-full h-full mt-[-7rem] md:mt-[-4rem]"
						/>
					</>
				)}
			</div>
		</section>
	);
};

export { Explore };
