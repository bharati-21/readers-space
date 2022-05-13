import React from "react";

const RightSidebar = () => {
	return (
		<aside className="p-4 py-8 pl-8 hidden lg:flex flex-col items-center w-full">
			<div className=" flex fixed flex-col gap-6 justify-between items-start w-full max-w-[250px]">
				<h3 className="text-xl">Who to Follow</h3>
				<ul className="flex list-none flex-col gap-4 justify-start w-full bg-slate-800 p-3 rounded-sm text-gray-100">
					<li className="flex flex-row items-center justify-between w-full gap-3">
						<div className="user-info gap-2 flex flex-row items-start justfiy-between">
							<img
								className="inline-block h-7 w-7 rounded-full ring-2 ring-sky-500"
								src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt="John Doe Profile Image"
							/>
							<div className="username-info flex flex-col justify-between items-center">
								<p className="text-xs break-before-all break-all">
									John Doe
								</p>
								<p className="text-xs break-before-all break-all">
									@johndoe
								</p>
							</div>
						</div>
						<button className="btn-primary text-xs py-1 px-2">
							Follow
						</button>
					</li>
					<li className="flex flex-row items-center justify-between w-full gap-3">
						<div className="user-info gap-2 flex flex-row items-start justfiy-between overflow-ellipsis">
							<img
								className="inline-block h-7 w-7 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
								alt="Jane Doe Profile Image"
							/>
							<div className="username-info flex flex-col justify-between items-center flex-wrap">
								<p className="text-xs break-before-all break-all">
									Jane Doe
								</p>
								<p className="text-xs break-before-all break-all">
									@janedoe
								</p>
							</div>
						</div>
						<button className="btn-primary text-xs py-1 px-2">
							Follow
						</button>
					</li>
					<li className="flex flex-row items-center justify-between w-full gap-3">
						<div className="user-info gap-2 flex flex-row items-start justfiy-between">
							<img
								className="inline-block h-7 w-7 rounded-full ring-2 ring-sky-500 shrink-0 object-cover"
								src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
								alt="You know who Profile Image"
							/>
							<div className="username-info flex flex-col justify-between align-center">
								<p className="text-xs break-before-all break-all">
									You know who
								</p>
								<p className="text-xs break-before-all break-all">
									@youknowho
								</p>
							</div>
						</div>
						<button className="btn-primary text-xs py-1 px-2">
							Follow
						</button>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export { RightSidebar };
