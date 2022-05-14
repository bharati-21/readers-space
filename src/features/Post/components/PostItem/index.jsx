import { FavoriteBorder, Favorite, BookmarkBorder, Bookmark, Comment, MoreHoriz } from "@mui/icons-material";
import React, { useState } from "react";

const PostItem = ({ post }) => {

    const [showMoreOptions, setShowMoreOptions] = useState(false);

	const { content, username } = post;

    const handleShowMoreOptionsChange = event => setShowMoreOptions(prevShowMoreOptions => !prevShowMoreOptions)

	return (
		<div className="post-item border border-slate-500 flex flex-col p-4 w-full rounded-sm cursor-pointer gap-6">
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
                <div className="more-options-container relative">
                    <button className="text-sky-400 hover:text-sky-500" onClick={handleShowMoreOptionsChange}>
                        <MoreHoriz />
                    </button>
                    <div className={`options-container absolute flex-col right-0 top-[105%] w-max h-max bg-slate-800 z-[5] ${showMoreOptions ? 'flex' : 'hidden'}`}>
                        <button className="py-2 px-4 border-b hover:bg-slate-500 border-b-sky-500">Edit</button>
                        <button className="py-2 px-4 hover:bg-slate-500">Delete</button>
                    </div>
                </div>
            </div>
		</div>
	);
};

export { PostItem };
