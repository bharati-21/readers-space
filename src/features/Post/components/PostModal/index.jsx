import React, { useEffect, useRef, useState } from "react";
import { PostContainer, EDIT_MODAL_VISIBILITY } from "features";
import { useDispatch, useSelector } from "react-redux";
import { getPostModalState, SET_POST_TO_BE_EDITED } from "./postModalSlice";

const PostModal = () => {
	const modalContentRef = useRef();

	const postModal = useSelector(getPostModalState);
	const { postModalVisibilityState, postToBeEdited } = postModal;
	const dispatch = useDispatch();

	const handleOutsideClick = (event) => {
		if (
			modalContentRef.current &&
			modalContentRef.current.contains(event.target)
		) {
			return;
		}
		dispatch(EDIT_MODAL_VISIBILITY(false));
		Object.keys(postToBeEdited).length &&
			dispatch(SET_POST_TO_BE_EDITED({}));
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);
		return () => document.removeEventListener("click", handleOutsideClick);
	});

	useEffect(() => {
		if (postModalVisibilityState) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [postModalVisibilityState]);

	return !postModalVisibilityState ? null : (
		<div
			className="absolute z-10 h-screen transition-all ease-in"
			role="dialog"
		>
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed z-10 inset-0 overflow-y-auto h-full w-full flex flex-col justify-start items-center p-4 my-8">
				<div
					className="rounded-lg shadow-xl transition-all align-middle max-w-lg h-max w-full relative"
					ref={modalContentRef}
				>
					<PostContainer container="modal" />
				</div>
			</div>
		</div>
	);
};

export { PostModal };
