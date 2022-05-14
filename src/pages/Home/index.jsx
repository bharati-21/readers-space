import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAuthState } from "features/Auth/authSlice";
import { useDocumentTitle, useToast } from "hooks";
import { getPosts, getPostsState, PostContainer, PostsList } from "features";
import errorImage from "images/error-image.svg";
import { Loader } from "components";

const Home = () => {
	const { authToken } = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { posts, postsLoading, postsError } = useSelector(getPostsState);
	const { showToast } = useToast();

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("ReadersSpace | Home");
		(async () => {
			try {
				const response = await dispatch(getPosts(authToken));
				if (response.error)
					throw new Error(
						"Could not get posts. Try again later",
						"error"
					);
			} catch (error) {
				showToast(error.message, "error");
			}
		})();
	}, []);

	return postsLoading ? (
		<Loader />
	) : postsError ? (
		<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full">
			<h3 className="md:text-2xl text-red-500 font-semibold text-center text-base relative z-[2]">
				Some error occurred. Could not load posts. Please try again
				later.
			</h3>
			<img
				src={errorImage}
				alt="Broken error image"
				className="mx-auto w-full h-full mt-[-7rem] md:mt-[-4rem]"
			/>
		</section>
	) : (
		<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full">
			<div className="posts-container relative w-full">
				<PostContainer />
			</div>
			<PostsList posts={posts} />
		</section>
	);
};

export { Home };
