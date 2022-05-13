import React, { useEffect, useRef, useState } from "react";
import { PostContainer } from "features";

const NewPostModal = ({ handleShowModalDialog }) => {
	const modalContentRef = useRef();

	const handleOutsideClick = (event) => {
		if (
			modalContentRef.current &&
			modalContentRef.current.contains(event.target)
		) {
			return;
		}
		handleShowModalDialog(false);
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);
		return () => document.removeEventListener("click", handleOutsideClick);
	});

	return (
		<div
			className="absolute z-10 h-screen transition-all ease-in"
			role="dialog"
		>
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div class="fixed z-10 inset-0 overflow-y-auto min-h-screen w-full flex flex-col justify-center items-center p-4 mb-8">
				<div
					className="rounded-lg shadow-xl transition-all align-middle max-w-lg h-max w-full relative"
					ref={modalContentRef}
				>
					<PostContainer />
				</div>
			</div>
		</div>
	);
};

export { NewPostModal };
