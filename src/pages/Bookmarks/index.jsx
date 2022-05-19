import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAuthState, getBookmarks, getPostsState, PostsList } from "features";
import errorImage from "images/error-image.svg";
import { Loader } from "components";
import { useDocumentTitle, useToast } from "hooks";

const Bookmarks = () => {
	const { posts, bookmarks, postsLoading, postsError } =
		useSelector(getPostsState);
	const { authToken } = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { showToast } = useToast();

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("ReadersSpace | Bookmarks");
		(async () => {
			try {
				const response = await dispatch(getBookmarks(authToken));
				if (response?.error)
					throw new Error(
						"Could not load bookmarks. Please try again later",
						"error"
					);
			} catch (error) {
				showToast(error.message, "error");
			}
		})();
	}, []);

	const bookmarkedPosts = posts.filter((post) =>
		bookmarks.includes(post._id)
	);

	return postsLoading ? (
		<Loader />
	) : postsError ? (
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
		<section className="p-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full">
			<div className="max-w-[1080px] w-full flex flex-col justify-start items-center">
				{bookmarks.length ? (
					<PostsList posts={bookmarkedPosts} />
				) : (
					<h3 className="text-2xl font-semibold pt-20 text-center sm:mt-5 mt-16">
						You don't have any posts bookmarked!
					</h3>
				)}
			</div>
		</section>
	);
};

export { Bookmarks };
