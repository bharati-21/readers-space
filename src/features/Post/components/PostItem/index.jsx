import {
	FavoriteBorder,
	Favorite,
	BookmarkBorder,
	Bookmark,
	Comment,
	MoreHoriz,
	MoreVert,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { getPostModalState } from "features";
import { useDispatch, useSelector } from "react-redux";
import {
	EDIT_MODAL_VISIBILITY,
	SET_POST_TO_BE_EDITED,
	getAuthState,
	deletePost,
	likePost,
	unlikePost,
	bookmarkPost,
	removeBookmarkedPost,
	getPostsState,
} from "features";
import { useLoadPostServices, useToast } from "hooks";

const PostItem = ({ post }) => {
	const [showMoreOptions, setShowMoreOptions] = useState(false);

	const {
		authToken,
		authUser: { username: authUsername },
	} = useSelector(getAuthState);
	const { bookmarks } = useSelector(getPostsState);

	const { isLoadingService, handleChangeLoadingServiceState } =
		useLoadPostServices();
	const { loadingLikeService, loadingBookmarkService } = isLoadingService;

	const {
		content,
		username,
		_id,
		likes: { likeCount, likedBy },
	} = post;

	const getIsPostLikedByAuthUser = () =>
		likedBy.find((likedUsers) => likedUsers.username === authUsername)
			? true
			: false;

	const [isPostLikedByAuthUser, setIsPostLikedByAuthUser] = useState(
		getIsPostLikedByAuthUser
	);

	const getIsPostInBookmarks = () => bookmarks.includes(_id);

	const [isPostInBookmarks, setIsPostInBookmarks] =
		useState(getIsPostInBookmarks);

	useEffect(() => {
		setIsPostLikedByAuthUser(getIsPostLikedByAuthUser());
		setIsPostInBookmarks(getIsPostInBookmarks());
	}, [likedBy, bookmarks]);

	const dispatch = useDispatch();

	const { showToast } = useToast();

	const handleShowMoreOptionsChange = (event) =>
		setShowMoreOptions((prevShowMoreOptions) => !prevShowMoreOptions);

	const handleEditPost = (event) => {
		event.stopPropagation();
		dispatch(SET_POST_TO_BE_EDITED(post));
		dispatch(EDIT_MODAL_VISIBILITY(true));
	};

	const handleDeletePost = async (event) => {
		event.stopPropagation();
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
	};

	const handlePostLikeChange = async (event) => {
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
		}

		handleChangeLoadingServiceState("loadingLikeService", false);
	};

	const handleBookmarkStateChange = async (event) => {
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
		}

		handleChangeLoadingServiceState("loadingBookmarkService", false);
	};

	const likeMessage =
		likeCount === 0
			? "Be the first of your friends to like this!"
			: likeCount;

	return (
		<div className="post-item border dark:bg-slate-800 bg-gray-100 border-gray-300 dark:border-slate-500 flex flex-col p-4 w-full rounded-sm cursor-pointer gap-6 shadow-sm">
			<div className="flex flex-row items-start justify-between gap-4 w-full rounded-sm">
				<img
					className="inline-block w-8 h-8 md:h-10 md:w-10 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
					src="https://i.pravatar.cc/200"
					alt="Jane Doe Profile Image"
				/>
				<div className="flex flex-col items-start justify-between w-full gap-4">
					<div className="h4 text-base md:text-lg">{username}</div>
					<div className="text-slate-900 font-normal rounded-sm bg-inherit text-inherit min-h-max text-sm">
						{content}
					</div>
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
			<div className="ml-0.5 text-xs flex flex-row items-start justify-start gap-1.5 text-gray-400 mb-[-15px]">
				<Favorite className="text-sky-400 text-xs cursor-auto favorite-icon" />{" "}
				{likeMessage}
			</div>
			<div className="flex flex-row justify-between items-center">
				<button
					className="text-sky-400 hover:text-sky-500 disabled:disabled-icon-btn"
					onClick={handlePostLikeChange}
					disabled={loadingLikeService}
				>
					{isPostLikedByAuthUser ? <Favorite /> : <FavoriteBorder />}
				</button>
				<button className="text-sky-400 hover:text-sky-500">
					<Comment />
				</button>
				<button
					className="text-sky-400 hover:text-sky-500 disabled:disabled-icon-btn"
					onClick={handleBookmarkStateChange}
					disabled={loadingBookmarkService}
				>
					{isPostInBookmarks ? <Bookmark /> : <BookmarkBorder />}
				</button>
			</div>
		</div>
	);
};

export { PostItem };
