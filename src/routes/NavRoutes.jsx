import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { getAuthState, Login, SignUp } from "features";
import { Home, LandingPage } from "pages";
import { useSelector } from "react-redux";
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
			</Route>
		</Routes>
	);
};

export { NavRoutes };
