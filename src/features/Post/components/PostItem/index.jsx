import {
	FavoriteBorder,
	Favorite,
	BookmarkBorder,
	Bookmark,
	Comment,
	MoreHoriz,
} from "@mui/icons-material";
import React, { useState } from "react";
import { getPostModalState } from "features";
import { useDispatch, useSelector } from "react-redux";
import {
	EDIT_MODAL_VISIBILITY,
	SET_POST_TO_BE_EDITED,
	getAuthState,
	deletePost,
} from "features";
import { useToast } from "hooks";

const PostItem = ({ post }) => {
	const [showMoreOptions, setShowMoreOptions] = useState(false);
	const {
		authUser: { username: authUsername },
		authToken,
	} = useSelector(getAuthState);

	const { content, username, _id } = post;

	const postModal = useSelector(getPostModalState);
	const { postModalVisibilityState } = postModal;
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

	return (
		<div className="post-item border dark:bg-slate-800 bg-gray-100 border-gray-300 dark:border-slate-500 flex flex-col p-4 w-full rounded-sm cursor-pointer gap-6 shadow-sm">
			<div className="flex flex-row items-start justify-between gap-4 w-full rounded-sm">
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
					src="https://i.pravatar.cc/200"
					alt="Jane Doe Profile Image"
				/>
				<div className="flex flex-col items-start justify-between w-full gap-4">
					<div className="h4 text-lg">{username}</div>
					<div className="text-slate-900 font-normal rounded-sm bg-inherit text-inherit min-h-max text-sm">
						{content}
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between items-center">
				<button className="text-sky-400 hover:text-sky-500">
					<FavoriteBorder />
				</button>
				<button className="text-sky-400 hover:text-sky-500">
					<Comment />
				</button>
				<button className="text-sky-400 hover:text-sky-500">
					<BookmarkBorder />
				</button>
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
		</div>
	);
};

export { PostItem };
