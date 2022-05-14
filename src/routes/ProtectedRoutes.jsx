import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAuthState } from "features";
import { LeftSidebar, RightSidebar } from "components";

const ProtectedRoutes = () => {
	const { isAuth } = useSelector(getAuthState);
	const location = useLocation();

	return isAuth ? (
		<main className="min-h-[100vh] w-full px-8 sm:px-6 grid grid-cols-1 md:grid-container">
			<LeftSidebar />
			<Outlet />
			<RightSidebar />
		</main>
	) : (
		<Navigate to="/login" state={{ from: location.pathname }} replace />
	);
};

export { ProtectedRoutes };
