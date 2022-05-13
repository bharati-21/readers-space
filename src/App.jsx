import React from "react";
import { Footer, Navbar } from "components";
import { NavRoutes } from "routes/NavRoutes";
import { useLocation } from "react-router-dom";

function App() {
	const location = useLocation();

	return (
		<div className="bg-gray-200 text-slate-900 dark:bg-slate-900 dark:text-gray-100 shadow-xl transition-all ease-in">
			{location.pathname === "/signup" ||
			location.pathname === "/login" ? null : (
				<Navbar />
			)}
			<div className="main h-full flex flex-col items-center justify-center min-h-[100vh]">
				<NavRoutes />
			</div>
			{location.pathname === "/" ? <Footer /> : null}
		</div>
	);
}

export default App;
