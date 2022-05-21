import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { CommentsContainer, Login, SignUp } from "features";
import {
	Bookmarks,
	Explore,
	Home,
	LandingPage,
	Profile,
	SinglePost,
} from "pages";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { NavRoutesWithNavbar } from "./NavRoutesWithNavbar";
import { NotFound } from "pages/NotFound";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<NavRoutesWithNavbar />}>
				<Route path="/" element={<LandingPage />} />
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/home" element={<Home />} />
					<Route path="/bookmarks" element={<Bookmarks />} />
					<Route path="/post/:postId" element={<SinglePost />}>
						<Route
							path="/post/:postId"
							element={<CommentsContainer />}
						/>
					</Route>
					<Route path="/profile/:username" element={<Profile />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route path="/mockman" element={<Mockman />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
};

export { NavRoutes };
