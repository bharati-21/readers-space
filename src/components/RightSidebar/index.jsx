import React from "react";
import { SuggestedUsers } from "components";

const RightSidebar = () => {
	return (
		<aside className="p-4 py-8 pl-8 hidden lg:flex flex-col items-center w-full">
			<div className=" flex fixed flex-col gap-6 justify-between items-start w-full max-w-[250px]">
				<h3 className="text-xl font-semibold">Who to Follow</h3>
				<SuggestedUsers />
			</div>
		</aside>
	);
};

export { RightSidebar };
