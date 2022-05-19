import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editModalVisibility, getModalState, setPostToEdit } from "features";

const useOnOutsideClick = (modalReference) => {
	const dispatch = useDispatch();

	const modal = useSelector(getModalState);
	const { postToEdit } = modal;

	const handleOutsideClick = (event) => {
		if (
			modalReference.current &&
			modalReference.current.contains(event.target)
		) {
			return;
		}
		dispatch(
			editModalVisibility({
				modalVisibilityState: false,
				modalChildren: null,
			})
		);
		Object.keys(postToEdit).length && dispatch(setPostToEdit({}));
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);
		return () => document.removeEventListener("click", handleOutsideClick);
	});
};

export { useOnOutsideClick };
