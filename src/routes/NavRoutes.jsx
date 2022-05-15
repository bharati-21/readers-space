import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { CommentsContainer, Login, SignUp } from "features";
import { Bookmarks, Home, LandingPage, SinglePost } from "pages";
import { Footer } from "components";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { NavRoutesWithNavbar } from "./NavRoutesWithNavbar";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<NavRoutesWithNavbar />}>
				<Route path="/" element={<LandingPage />}>
					<Route path="/" element={<Footer />} />
				</Route>
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/home" element={<Home />} />
					<Route path="/bookmarks" element={<Bookmarks />} />
					<Route path="/post/:postId" element={<SinglePost />}>
						<Route
							path="/post/:postId"
							element={<CommentsContainer />}
						/>
					</Route>
				</Route>
				<Route path="/mockman" element={<Mockman />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
};

export { NavRoutes };
