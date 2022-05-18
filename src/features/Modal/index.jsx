import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getModalState, PostContainer } from "features";
import { useOnOutsideClick } from "hooks";
import { EditProfileForm, PostModal } from "components";
import { useLocation } from "react-router-dom";
import { editModalVisibility } from "./modalSlice";

const Modal = () => {
	const modalContainerRef = useRef();

	const modal = useSelector(getModalState);
	const { modalVisibilityState, modalChildren } = modal;
	const location = useLocation();

	useOnOutsideClick(modalContainerRef);
	const dispatch = useDispatch();

	useEffect(() => {
		if (modalVisibilityState) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [modalVisibilityState]);

	useEffect(() => {
		dispatch(
			editModalVisibility({
				modalVisibilityState: false,
				modalChildren: null,
			})
		);
	}, [location.pathname]);

	return !modalVisibilityState ? null : (
		<div
			className="absolute z-10 h-screen transition-all ease-in"
			role="dialog"
		>
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed z-10 inset-0 overflow-y-auto h-full w-full flex flex-col justify-start items-center p-8">
				<div
					className="rounded-lg shadow-xl transition-all align-middle max-w-lg h-max w-full relative"
					ref={modalContainerRef}
				>
					{modalChildren === "POST_MODAL" ? (
						<PostContainer container="modal" />
					) : modalChildren === "EDIT_PROFILE" ? (
						<EditProfileForm />
					) : null}
				</div>
			</div>
		</div>
	);
};

export { Modal };
