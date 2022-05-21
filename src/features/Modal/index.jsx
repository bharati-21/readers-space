import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getModalState, PostContainer } from "features";
import { useOnOutsideClick } from "hooks";
import { EditProfileForm, UsersList } from "components";
import { useLocation } from "react-router-dom";
import { editModalVisibility, setPostToEdit, setUserList } from "./modalSlice";
import { Close } from "@mui/icons-material";

const Modal = () => {
	const modalContainerRef = useRef();

	const modal = useSelector(getModalState);
	const {
		modalVisibilityState,
		modalChildren,
		userList: { list, type },
		postToEdit,
	} = modal;
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

	const resetModalStates = () => {
		dispatch(
			editModalVisibility({
				modalVisibilityState: false,
				modalChildren: null,
			})
		);
		dispatch(
			setUserList({
				list: [],
				type: null,
			})
		);
		Object.keys(postToEdit).length && dispatch(setPostToEdit({}));
	};

	useEffect(() => {
		resetModalStates();
	}, [location.pathname]);

	const handleModalClose = () => {
		resetModalStates();
	};

	return !modalVisibilityState ? null : (
		<div
			className="absolute z-10 h-screen transition-all ease-in"
			role="dialog"
		>
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed z-10 inset-0 overflow-y-auto h-full w-full flex flex-col justify-start items-center p-8">
				<div
					className="rounded-sm shadow-xl transition-all align-middle max-w-lg max-h-[90vh] w-full relative border-2 overflow-y-auto border-gray-600 bg-gray-100 dark:bg-slate-800 dark:text-gray-100 px-4"
					ref={modalContainerRef}
				>
					<button
						className="btn-primary-icon relative left-[94%] top-2"
						onClick={handleModalClose}
					>
						<Close />
					</button>
					{modalChildren === "USER_LIST" ? (
						<h3 className="px-4 font-semibold text-2xl text-left capitalize">
							{type.toLowerCase()}
						</h3>
					) : null}
					{modalChildren === "POST_MODAL" ? (
						<PostContainer container="modal" />
					) : modalChildren === "EDIT_PROFILE" ? (
						<EditProfileForm />
					) : modalChildren === "USER_LIST" ? (
						<UsersList userList={list} inComponent="MODAL" />
					) : null}
				</div>
			</div>
		</div>
	);
};

export { Modal };
