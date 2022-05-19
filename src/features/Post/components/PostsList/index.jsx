import React from "react";
import { useSelector } from "react-redux";

import { PostItem, getPostsState } from "features";
import { useInfiniteScroll } from "hooks";
import inifnityLoading from "images/loading-infinity.svg";
import { getSortedPosts } from "utils";
import { useLocation } from "react-router-dom";

const PostsList = ({ posts }) => {
	const { pageNumber, loading, lastElementReference, hasMorePosts } =
		useInfiniteScroll(posts);
	const location = useLocation();
	const { sortBy } = useSelector(getPostsState);

	const sortedPosts =
		location.pathname === "/home"
			? getSortedPosts(posts, sortBy)
			: getSortedPosts(posts, "LATEST");

	const postsToDisplay = sortedPosts?.slice(0, pageNumber * 3);
	return (
		<div className="w-full flex justify-center items-center gap-8 my-12 flex-col">
			{postsToDisplay?.map((post) => (
				<PostItem key={post._id} post={post} />
			))}
			<div key="last-element" ref={lastElementReference}>
				{postsToDisplay?.length && hasMorePosts && loading && (
					<img
						src={inifnityLoading}
						className="w-20 h-20"
						alt="Animated infinity loading svg"
					/>
				)}
			</div>
		</div>
	);
};

export { PostsList };
