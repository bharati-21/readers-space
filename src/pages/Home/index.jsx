import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAuthState } from "features/Auth/authSlice";
import { useDocumentTitle, useToast } from "hooks";
import {
	getPosts,
	getPostsState,
	getUsersState,
	PostContainer,
	PostsList,
} from "features";
import errorImage from "images/error-image.svg";
import { Loader } from "components";
import { getUserDetails } from "utils";

const Home = () => {
	const {
		authToken,
		authUser: { username, following },
	} = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { posts, postsLoading, postsError } = useSelector(getPostsState);
	const { users, usersLoading, usersError } = useSelector(getUsersState);
	const { showToast } = useToast();

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("ReadersSpace | Home");
		(async () => {
			try {
				const postsDispatchResponse = await dispatch(
					getPosts(authToken)
				);

				if (postsDispatchResponse.error) {
					throw new Error("Could not get posts. Try again later");
				}
			} catch (error) {
				showToast(error.message, "error");
			}
		})();
	}, []);

	const authUserDetails = getUserDetails(users, username);

	const followingUsersPosts = posts?.filter((post) =>
		authUserDetails?.following?.find(
			(user) =>
				user.username === post.username || post.username == username
		)
			? true
			: false
	);

	return postsLoading ? (
		<Loader />
	) : postsError ? (
		<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full">
			<div className="wrapper max-w-[1080px] flex flex-col items-center justify-start w-full">
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
		<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full">
			<div className="max-w-[1080px] w-full flex flex-col justify-start items-center">
				<div className="posts-container relative w-full">
					<PostContainer />
				</div>
				<PostsList posts={followingUsersPosts} />
			</div>
		</section>
	);
};

export { Home };
