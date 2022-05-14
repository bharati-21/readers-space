import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { Login, SignUp } from "features";
import { Bookmarks, Home, LandingPage } from "pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

const NavRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/mockman" element={<Mockman />} />
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/home" element={<Home />} />
				<Route path="/bookmarks" element={<Bookmarks />} />
			</Route>
		</Routes>
	);
};

export { NavRoutes };
