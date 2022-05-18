import React from "react";

const CommentsList = ({ post }) => {
	const { comments } = post;
	return (
		<div className="flex flex-col gap-2 cursor-auto">
			{comments.map((comment) => (
				<div
					className="flex flex-row items-start justify-start gap-4 w-full bg-gray-200 dark:bg-slate-900 rounded-sm px-4 py-2 cursor-auto"
					key={comment._id}
				>
					<img
						className="inline-block w-8 h-8 cursor-pointer rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
						src="https://i.pravatar.cc/200"
						alt="Jane Doe Profile Image"
					/>
					<div className="flex-1 flex flex-col">
						<h4 className="text-base font-semibold leading-snug">
							{comment.username}
						</h4>
						<p className="whitespace-pre-wrap text-sm comment-text">
							{comment.text}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export { CommentsList };
