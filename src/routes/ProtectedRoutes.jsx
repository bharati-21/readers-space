import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAuthState } from "features";

const ProtectedRoutes = () => {
	const { isAuth } = useSelector(getAuthState);
	const location = useLocation();

	return isAuth ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location.pathname }} replace />
	);
};

export { ProtectedRoutes };
