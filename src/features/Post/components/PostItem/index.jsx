import React, { useState } from "react";
import {
	FavoriteBorder,
	Favorite,
	BookmarkBorder,
	Bookmark,
	Comment,
	MoreHoriz,
	Share,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
	editModalVisibility,
	setPostToEdit,
	getAuthState,
	deletePost,
	likePost,
	unlikePost,
	bookmarkPost,
	removeBookmarkedPost,
	getPostsState,
	setUserList,
} from "features";
import { useToast } from "hooks";
import Hyphenated from "react-hyphen";

const PostItem = ({ post, location }) => {
	const [showMoreOptions, setShowMoreOptions] = useState(false);

	const {
		authToken,
		authUser: { username: authUsername },
	} = useSelector(getAuthState);
	const { bookmarks } = useSelector(getPostsState);

	const [isLoadingService, setIsLoadingService] = useState({
		loadingLikeService: false,
		loadingBookmarkService: false,
	});

	const { loadingLikeService, loadingBookmarkService } = isLoadingService;

	const handleChangeLoadingServiceState = (loadingService, state) =>
		setIsLoadingService((prevIsLoadingService) => ({
			...prevIsLoadingService,
			[loadingService]: state,
		}));

	const {
		content,
		username,
		_id,
		likes: { likeCount, likedBy },
		comments,
		createdAt,
		postImage,
	} = post;

	const getIsPostLikedByAuthUser = () =>
		likedBy.find((likedUsers) => likedUsers.username === authUsername)
			? true
			: false;

	const getIsPostInBookmarks = () => bookmarks.includes(_id);

	const isPostLikedByAuthUser = getIsPostLikedByAuthUser();
	const isPostInBookmarks = getIsPostInBookmarks();

	const dispatch = useDispatch();

	const { showToast } = useToast();

	const navigate = useNavigate();

	const handleShowMoreOptionsChange = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setShowMoreOptions((prevShowMoreOptions) => !prevShowMoreOptions);
	};

	const handleEditPost = (event) => {
		event.stopPropagation();
		event.preventDefault();
		dispatch(setPostToEdit(post));
		dispatch(
			editModalVisibility({
				modalVisibilityState: true,
				modalChildren: "POST_MODAL",
			})
		);
	};

	const handleDeletePost = async (event) => {
		event.stopPropagation();
		event.preventDefault();
		try {
			const response = await dispatch(
				deletePost({ authToken, postId: _id })
			);
			if (response?.error) {
				throw new Error(
					"Failed to delete post. Please try again later."
				);
			}
			showToast("Post deleted successfully", "success");
		} catch (error) {
			showToast(error.message, "error");
		}
		if (location === "singlePost") navigate("/home");
	};

	const handlePostLikeChange = async (event) => {
		event.stopPropagation();
		event.preventDefault();

		handleChangeLoadingServiceState("loadingLikeService", true);

		try {
			const response = isPostLikedByAuthUser
				? await dispatch(unlikePost({ authToken, postId: _id }))
				: await dispatch(likePost({ authToken, postId: _id }));
			if (response?.error) {
				throw new Error(
					isPostLikedByAuthUser
						? "Could not unlike the post. Please try again later."
						: "Could not like the post. Please try again later."
				);
			}
		} catch (error) {
			showToast(error.message, "error");
		} finally {
			handleChangeLoadingServiceState("loadingLikeService", false);
		}
	};

	const handleBookmarkStateChange = async (event) => {
		event.stopPropagation();
		event.preventDefault();
		handleChangeLoadingServiceState("loadingBookmarkService", true);

		try {
			const response = isPostInBookmarks
				? await dispatch(
						removeBookmarkedPost({ authToken, postId: _id })
				  )
				: await dispatch(bookmarkPost({ authToken, postId: _id }));
			if (response?.error) {
				throw new Error(
					isPostInBookmarks
						? "Could not remove the post from bookmarks. Please try again later."
						: "Could not bookmark the post. Please try again later."
				);
			}
		} catch (error) {
			showToast(error.message, "error");
		} finally {
			handleChangeLoadingServiceState("loadingBookmarkService", false);
		}
	};

	const navigateToSinglePostView = () => {
		navigate(`/post/${_id}`);
	};

	const profileImage =
		authUsername === username
			? JSON.parse(localStorage.getItem("readers-space-user"))
					.profileImage
			: post.profileImage;

	const handleUserInfoClicked = (event) => {
		event.stopPropagation();

		navigate(`/profile/${username}`);
	};

	const handleShowLikedUserList = (event) => {
		event.stopPropagation();
		if (!likeCount) {
			return;
		}
		dispatch(
			editModalVisibility({
				modalVisibilityState: true,
				modalChildren: "USER_LIST",
			})
		);
		dispatch(setUserList({ list: likedBy, type: "LIKED BY" }));
	};

	const formattedDate = dayjs(createdAt).toNow(new Date());

	let likedByText = "";
	if (likeCount === 0) {
		likedByText = "Be the first of your friends to like this!";
	} else {
		const [firstLikedBy] = likedBy;
		const displayLikeCount = likeCount - 1;
		likedByText = `${firstLikedBy.username}`;
		if (displayLikeCount > 0) {
			likedByText += ` and ${displayLikeCount} ${
				displayLikeCount > 1 ? "others" : "other"
			}`;
		}
	}

	const handleCopyPostLinkToClipboard = (event) => {
		navigator.clipboard
			.writeText(`https://readers-space.netlify.app/post/${post.id}`)
			.then(() => showToast("Copied post link to clipboard."));
	};

	console.log(postImage);

	return (
		<div className="post-item border dark:bg-slate-800 bg-gray-100 border-gray-300 dark:border-slate-500 flex flex-col p-4 w-full rounded-sm gap-6 shadow-sm max-w-[1080px]">
			<div
				className="flex flex-row items-start justify-between gap-4 w-full rounded-sm cursor-pointer"
				onClick={navigateToSinglePostView}
			>
				<img
					className="inline-block h-10 w-10 md:h-8 md:w-8  rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
					onClick={handleUserInfoClicked}
					src={profileImage}
					alt={`${username} profile image`}
				/>
				<div className="flex flex-col items-start justify-between w-full gap-4">
					<div className="flex flex-row gap-1 justify-between items-center flex-wrap w-full">
						<div
							className="h4 text-base font-semibold md:text-lg"
							onClick={handleUserInfoClicked}
						>
							{username}
						</div>
						<p className="text-xs text-grat-400 w-max">
							{formattedDate}
						</p>
					</div>
					<div className="text-slate-900 font-normal rounded-sm bg-inherit text-inherit min-h-max text-sm whitespace-pre-wrap post-content">
						<Hyphenated>{content}</Hyphenated>
					</div>
					{postImage ? (
						<img
							src={postImage}
							alt="Uploaded image"
							className="max-w-[300px] mx-auto w-full"
						/>
					) : null}
				</div>
				{authUsername === username ? (
					<div className="more-options-container relative">
						<button
							className="text-sky-400 hover:text-sky-500"
							onClick={handleShowMoreOptionsChange}
						>
							<MoreHoriz />
						</button>
						<div
							className={`options-container absolute flex-col right-0 top-[105%] w-max h-max dark:bg-slate-800 border border-sky-500 bg-slate-200 z-[3] ${
								showMoreOptions ? "flex" : "hidden"
							}`}
						>
							<button
								className="py-2 px-4 border-b dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-slate-700 border-b-sky-500"
								onClick={handleEditPost}
							>
								Edit
							</button>
							<button
								className="py-2 px-4 dark:hover:bg-slate-700 hover:bg-gray-300 dark:text-gray-100"
								onClick={handleDeletePost}
							>
								Delete
							</button>
						</div>
					</div>
				) : null}
			</div>
			<div className="flex flex-col gap-2">
				{
					<div
						className={`ml-0.5 text-xs flex flex-row items-start justify-start gap-1.5 text-gray-400 ${
							likeCount ? "cursor-pointer" : "cursor-default"
						} w-max`}
						onClick={handleShowLikedUserList}
					>
						<Favorite className="text-sky-400 text-xs cursor-auto favorite-icon" />
						{likedByText}
					</div>
				}
				<div className="flex flex-row justify-between items-center">
					<button
						className="text-sky-400 hover:text-sky-500 disabled:disabled-icon-btn flex flex-row items-end justify-center gap-1 h-max"
						onClick={handlePostLikeChange}
						disabled={loadingLikeService}
					>
						<span className="like-icon">
							{isPostLikedByAuthUser ? (
								<Favorite />
							) : (
								<FavoriteBorder />
							)}
						</span>
						{likeCount > 0 ? (
							<span className="like-count text-base">
								{likeCount}
							</span>
						) : null}
					</button>
					<button
						className="text-sky-400 hover:text-sky-500 flex flex-row items-end justify-center gap-1"
						onClick={navigateToSinglePostView}
					>
						<span className="like-icon">
							<Comment />
						</span>
						{comments?.length}
					</button>
					<button
						className="text-sky-400 hover:text-sky-500 disabled:disabled-icon-btn"
						onClick={handleBookmarkStateChange}
						disabled={loadingBookmarkService}
					>
						{isPostInBookmarks ? <Bookmark /> : <BookmarkBorder />}
					</button>
					<button
						className="text-sky-400 hover:text-sky-500 disabled:disabled-icon-btn"
						onClick={handleCopyPostLinkToClipboard}
					>
						<Share />
					</button>
				</div>
			</div>

			<Outlet context={post} />
		</div>
	);
};

export { PostItem };
