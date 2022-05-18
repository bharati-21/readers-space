import React from "react";
import { Footer, Navbar } from "components";
import { NavRoutes } from "routes/NavRoutes";
import { useLocation } from "react-router-dom";

const App = () => {
	return (
		<div className="bg-gray-200 min-h-[100vh] flex-col flex justify-center w-full items-center text-slate-900 dark:bg-slate-900 dark:text-gray-100 shadow-xl transition-all ease-in">
			<NavRoutes />
		</div>
	);
};

export default App;
