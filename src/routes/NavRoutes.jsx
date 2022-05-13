import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Mockman from "mockman-js";

import { getAuthState, Home, LandingPage, Login, SignUp } from "features";
import { useSelector } from "react-redux";
import { ProtectedRoutes } from "./ProtectedRoutes";

const NavRoutes = () => {
	const { isAuth } = useSelector(getAuthState);

	return (
		<Routes>
			{!isAuth && <Route path="/" element={<LandingPage />} />}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/mockman" element={<Mockman />} />
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	);
};

export { NavRoutes };
