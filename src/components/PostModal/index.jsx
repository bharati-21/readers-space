import React from "react";
import { PostContainer } from "features";

const PostModal = ({ modalContainerRef }) => {
	return (
		<div
			className="rounded-lg shadow-xl transition-all align-middle max-w-lg h-max w-full relative"
			ref={modalContainerRef}
		>
			<PostContainer container="modal" />
		</div>
	);
};

export { PostModal };
