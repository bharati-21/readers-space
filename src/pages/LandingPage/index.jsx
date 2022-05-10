import React from "react";
import heroImage from "images/hero-image.svg";
import logoImage from "images/readers-space-logo.png";

const LandingPage = () => {
	return (
		<section className="hero flex-col items-center justify-center max-w-5xl mx-auto h-full p-4 md:p-8">
			<div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto gap-6">
				<div className="hero-text-content self-center shrink grow basis-full text-center flex flex-col items-center justify-center gap-5">
					<div className="flex flex-row gap-2 md:gap-4 items-center justify-center flex-wrap md:flex-nowrap">
						<img
							className="h-9 md:h-12 w-auto"
							src={logoImage}
							alt="Readers Space Logo"
						/>
						<h3 className="font-semibold text-3xl md:text-5xl text-sky-400 logo-text">
							ReadersSpace
						</h3>
					</div>
					<h1 className="hero-text text-lg md:text-2xl">
						Discover Books, Readers, and Friends!
					</h1>
					<button className="p-2 min-w-[120px] rounded-sm text-gray-900 bg-sky-400 hover:bg-sky-500 transition-all ease-linear font-medium md:mb-0 mt-6 mb-4">
						Join Now
					</button>
				</div>
				<div className="hero-image shrink grow basis-full">
					<img
						src={heroImage}
						alt="Hero image"
						className="hero-image w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export { LandingPage };
