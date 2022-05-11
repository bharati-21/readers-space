import React from "react";
import logoImage from "images/readers-space-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<nav className="dark:bg-slate-800 navbar sticky top-0 left-0">
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
						<button className="py-1.5 px-2 min-w-[100px] rounded-sm text-gray-900 bg-sky-400 hover:bg-sky-500 transition-all ease-in font-medium">
							Join Now
						</button>
						<button className="flex align-center justify-center transition-all ease-in bg-gray-500 rounded-sm p-1.5 hover:bg-gray-600">
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
