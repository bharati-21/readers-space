import React from "react";
import { Footer, Navbar } from "components";
import { NavRoutes } from "routes/NavRoutes";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthState } from "features";

function App() {
	const location = useLocation();
	const { isAuth } = useSelector(getAuthState);

	return (
		<div className="bg-gray-100 text-slate-900 dark:bg-slate-900 dark:text-gray-100 shadow-xl transition-all ease-in">
			<Navbar />
			<div className="main h-full flex flex-col items-center justify-center min-h-[100vh]">
				<NavRoutes />
			</div>
			{!isAuth && location.pathname === "/" ? <Footer /> : null}
		</div>
	);
}

export default App;
