import React from "react";
import logoImage from "images/readers-space-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState, logoutUser } from "features";
import { useToast } from "hooks";

const Navbar = () => {
	const auth = useSelector(getAuthState);
	const dispatch = useDispatch();
	const { showToast } = useToast();
	const navigate = useNavigate();

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

	return (
		<nav className="dark:bg-slate-800 navbar sticky top-0 left-0 z-[5]">
			<div className="max-w-8xl mx-auto px-4 py-1 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-shrink-0 flex gap-4 items-center">
						<img
							className="h-10 w-auto"
							src={logoImage}
							alt="Readers Space Logo"
						/>
						<h3 className="hidden md:block font-semibold text-3xl text-sky-400 logo-text">
							ReadersSpace
						</h3>
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
						<button className="flex align-center justify-center transition-all ease-in  rounded-sm p-1.5 hover:bg-gray-500">
							<FontAwesomeIcon
								icon={faMoon}
								className="text-2xl font-awesome-icon"
							/>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export { Navbar };
