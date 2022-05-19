import React from "react";
import { PostItem } from "features";
import { useInfiniteScroll } from "hooks";
import inifnityLoading from "images/loading-infinity.svg";

const PostsList = ({ posts }) => {
	const { pageNumber, lastElementReference, hasMorePosts } =
		useInfiniteScroll(posts);

	const postsToDisplay = posts.slice(0, pageNumber * 3);

	return (
		<div className="w-full flex justify-center items-center gap-8 my-12 flex-col">
			{postsToDisplay.map((post) => (
				<PostItem key={post._id} post={post} />
			))}
			<div key="last-element" ref={lastElementReference}>
				{hasMorePosts  && (
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
