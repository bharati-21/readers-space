import React, { useEffect, useState } from "react";
import logoImage from "images/readers-space-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMoon,
	faMagnifyingGlass,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState, logoutUser } from "features";
import { useToast } from "hooks";

const Navbar = () => {
	const getSystemPreferenceThemeOrSavedTheme = () => {
		return (
			localStorage.getItem("readers-space-theme") ||
			(window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light")
		);
	};

	const auth = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { showToast } = useToast();
	const navigate = useNavigate();
	const [theme, setTheme] = useState(getSystemPreferenceThemeOrSavedTheme());

	const { isAuth } = auth;

	const handleLogout = async () => {
		try {
			const response = await dispatch(logoutUser());
			if (response) {
				showToast("Logged out successfully.", "success");
				navigate("/");
			}
		} catch (error) {
			showToast("Logout failed.", "error");
		}
	};

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem("readers-space-theme", theme);
	}, [theme]);

	const handleThemeChange = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<nav className="dark:bg-slate-800 navbar bg-gray-100 sticky top-0 left-0 z-[5] sm:py-0">
			<div className="max-w-8xl mx-auto px-4 py-1 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<Link
						to="/"
						className="flex-shrink-0 flex gap-4 items-center"
					>
						<img
							className="h-10 w-auto"
							src={logoImage}
							alt="Readers Space Logo"
						/>
						<h3 className="hidden md:block font-semibold text-3xl text-sky-400 logo-text">
							ReadersSpace
						</h3>
					</Link>
					<div className="search-form hidden sm:block">
						<form>
							<div className="relative rounded-sm shadow-sm bg-gray-200">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<span className="text-gray-400 sm:text-sm">
										<FontAwesomeIcon
											icon={faMagnifyingGlass}
										/>
									</span>
								</div>
								<input
									type="search"
									name="searchText"
									id="searchText"
									className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-8 bg-transparent pr-2 py-1.5 sm:text-base mr-1  text-slate-900 border-gray-300 rounded-sm outline-none"
									placeholder="Enter search text..."
								/>
							</div>
						</form>
					</div>
					<div className="flex gap-4 items-center justify-center">
						{isAuth ? (
							<button
								className="btn-primary min-w-[120px] py-1.5"
								onClick={handleLogout}
							>
								Logout
							</button>
						) : (
							<Link
								to="/signup"
								className="btn-primary min-w-[120px] py-1.5"
							>
								Join Now
							</Link>
						)}
						<button
							className="flex align-center justify-center transition-all ease-in  rounded-sm p-1.5 hover:text-gray-100 hover:bg-gray-500"
							onClick={handleThemeChange}
						>
							<FontAwesomeIcon
								icon={theme === "light" ? faMoon : faSun}
								className="text-2xl font-awesome-icon"
							/>
						</button>
					</div>
				</div>
			</div>
			<div className="search-form sm:hidden block px-4 py-2 pb-4">
				<form>
					<div className="relative rounded-sm shadow-sm bg-gray-100">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="text-gray-400 sm:text-sm">
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</span>
						</div>
						<input
							type="search"
							name="searchText"
							id="searchText"
							className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-8 bg-transparent pr-2 py-1.5 sm:text-base mr-1  text-slate-900 border-gray-300 rounded-sm outline-none"
							placeholder="Enter search text..."
						/>
					</div>
				</form>
			</div>
		</nav>
	);
};

export { Navbar };
