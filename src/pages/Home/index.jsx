import { LeftSidebar, Loader, RightSidebar } from "components";
import { getAuthState } from "features/Auth/authSlice";
import { useDocumentTitle, useToast } from "hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getPostsState, PostContainer, PostsList } from "features";

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
                if(response.error) throw new Error('Could not get posts. Try again later', 'error');
			} catch (error) {
				showToast(
					"Posts could not be loaded. Please try again later",
					"error"
				);
			}
		})();
	}, []);

	return postsLoading ? (
		<Loader />
	) : (
		<main className="min-h-[100vh] w-full px-8 sm:px-6 grid grid-cols-1 md:grid-container">
			<LeftSidebar />
			<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full">
				<div className="posts-container relative w-full">
					<PostContainer />
				</div>
				<PostsList posts={posts} />
			</section>
			<RightSidebar />
		</main>
	);
};

export { Home };
