import React from "react";
import notFoundImage from "images/not-found.svg";
const NotFound = () => {
	return (
		<section className="home p-0 md:px-8 border-0 md:border-l lg:border-r border-x-sky-400 flex flex-col items-center justify-start w-full">
			<h1 className="text-3xl mt-8">Page Not Found</h1>
			<img src={notFoundImage} className="object-cover h-full w-full" />
		</section>
	);
};

export { NotFound };
