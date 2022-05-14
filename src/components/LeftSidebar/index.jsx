import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
	Home,
	Explore,
	Bookmark,
	AccountCircle,
	Add,
} from "@mui/icons-material";
import { v4 as uuid } from "uuid";
import { NewPostModal } from "features";

const LeftSidebar = () => {
	const getActiveClassName = ({ isActive }) =>
		isActive ? `active-link link` : `link`;

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showModal]);

	const sidebarLinks = [
		{
			id: uuid(),
			link: "Home",
			icon: <Home />,
			to: "/home",
		},
		{
			id: uuid(),
			link: "Explore",
			icon: <Explore />,
			to: "/explore",
		},
		{
			id: uuid(),
			link: "Bookmarks",
			icon: <Bookmark />,
			to: "/bookmarks",
		},
		{
			id: uuid(),
			link: "Profile",
			icon: <AccountCircle />,
			to: "/profile",
		},
	];

	const getMappedLinks = (linkFor = "footer") =>
		sidebarLinks.map(({ to, id, link, icon }) => (
			<li key={id}>
				<NavLink to={to} className={getActiveClassName}>
					{icon} {linkFor === "sidebar" ? link : null}
				</NavLink>
			</li>
		));

	const handleShowModalDialog = (modalVisibilityState) => {
		setShowModal(modalVisibilityState);
	};

	return (
		<>
			{showModal ? (
				<NewPostModal handleShowModalDialog={handleShowModalDialog} />
			) : null}
			<aside className="sidebar-nav py-8 p-4 pr-8 hidden md:flex flex-col justify-start items-center h-full w-full max-w-[180px]">
				<div className="flex fixed flex-col justify-between items-center">
					<ul className="flex list-none flex-col gap-4 justify-center w-full">
						{getMappedLinks("sidebar")}
					</ul>
					<button
						className="btn-primary max-w-[160px] w-full py-1.5 fixed bottom-10"
						onClick={(e) => handleShowModalDialog(true)}
					>
						Create New Post
					</button>
				</div>
			</aside>
			<ul className="list-none fixed bottom-0 md:hidden flex flex-row gap-4 py-4 bg-gray-100 dark:bg-slate-800 px-8 justify-between items-center w-full left-0 right-0 flex-wrap z-[5]">
				{getMappedLinks()}
			</ul>
			<button
				className="btn-primary md:hidden flex flex-col justify-center items-center w-10 h-10 py-1.5 fixed right-[2rem] bottom-[5rem] z-[5] rounded-[50%]"
				onClick={(e) => handleShowModalDialog(true)}
			>
				<Add />
			</button>
		</>
	);
};

export { LeftSidebar };
