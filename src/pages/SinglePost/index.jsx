import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAuthState } from "features/Auth/authSlice";
import { useDocumentTitle, useToast } from "hooks";
import { getPosts, getPostsState, PostItem } from "features";
import errorImage from "images/error-image.svg";
import { Loader } from "components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SinglePost = () => {
	const { authToken } = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { postsLoading, postsError, posts } = useSelector(getPostsState);
	const { showToast } = useToast();
	const { postId } = useParams();

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("ReadersSpace | Post");

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

	const singlePost = posts.find((post) => post._id === postId) ?? -1;

	return (
		<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full gap-4">
			<div className="flex flex-col w-full items-center justify-start max-w-[1080px]">
				<Link to="/home" className="btn-primary w-max h-max self-start">
					<FontAwesomeIcon icon={faChevronLeft} /> Go Back
				</Link>
				{postsLoading ? (
					<Loader />
				) : singlePost === -1 || postsError ? (
					<div className="flex flex-col items-center justify-center w-full h-full">
						<h3 className="md:text-2xl text-red-500 font-semibold text-center text-base relative z-[2]">
							{singlePost === -1
								? `No post found with id ${postId}`
								: "Some error occurred. Could not load post. Please try again later."}
						</h3>
						<img
							src={errorImage}
							alt="Broken error image"
							className="mx-auto w-full h-full mt-[-7rem] md:mt-[-3rem]"
						/>
					</div>
				) : (
					<section className="flex py-4 flex-col items-center justify-start w-full">
						<div className="posts-container relative w-full">
							<PostItem post={singlePost} location="singlePost" />
						</div>
					</section>
				)}
			</div>
		</section>
	);
};

export { SinglePost };
