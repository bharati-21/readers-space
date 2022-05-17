import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { getModalState } from "features";
import { useOnOutsideClick } from "hooks";
import { PostModal } from "components";

const Modal = () => {
	const modalContainerRef = useRef();

	const modal = useSelector(getModalState);
	const { modalVisibilityState, modalChildren } = modal;

	useOnOutsideClick(modalContainerRef);

	useEffect(() => {
		if (modalVisibilityState) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [modalVisibilityState]);

	return !modalVisibilityState ? null : (
		<div
			className="absolute z-10 h-screen transition-all ease-in"
			role="dialog"
		>
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed z-10 inset-0 overflow-y-auto h-full w-full flex flex-col justify-start items-center p-4 my-8">
				{modalChildren === "POST_MODAL" ? (
					<PostModal modalContainerRef={modalContainerRef} />
				) : null}
			</div>
		</div>
	);
};

export { Modal };
