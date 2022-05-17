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
} from "features";
import errorImage from "images/error-image.svg";
import { Loader } from "components";
import { UserProfile } from "./UserProfile";
import { useParams } from "react-router-dom";

const Profile = () => {
	const {
		authToken,
	} = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { posts } = useSelector(getPostsState);
	const { showToast } = useToast();
	const {
		userProfile,
		userProfileLoading,
		userPostsLoading,
		userPosts,
	} = useSelector(getUserProfileState);

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
	}, []);

    useEffect(() => {
        dispatch(getUserPosts({ authToken, username }));
    }, [posts]);

	return (userProfileLoading) ? (
		<Loader />
	) : (
		<section className="home p-8 px-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full gap-4">
			<UserProfile userProfile={userProfile} userPostsLength={userPosts.length} />
			<PostsList posts={userPosts} userPostsLoading={userPostsLoading} />
		</section>
	);
};

export { Profile };
