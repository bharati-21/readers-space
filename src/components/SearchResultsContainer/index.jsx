import React, { forwardRef } from "react";
import { UsersList } from "components";
import infinityLoader from "images/loading-infinity.svg";

const SearchResultsContainer = ({
	searchedUsers,
	searchLoading,
	searchText,
}) => {
	return (
		<div className="absolute top-[60px] sm:w-full sm:left-0 sm:right-0 left-4 right-4 z-[3] text-slate-900 bg-gray-200">
			{searchLoading ? (
				<img
					src={infinityLoader}
					alt="Infinity loader"
					className="w-10 h-10 mx-auto text-center"
				/>
			) : searchText && searchedUsers.length ? (
				<UsersList
					userList={searchedUsers}
					inComponent="SEARCH_RESULTS"
				/>
			) : searchText && !searchedUsers.length ? (
				<div className="flex list-none flex-col gap-4 justify-start w-full bg-gray-100  p-3  text-slate-900 border border-gray-400">
					No Users Found
				</div>
			) : null}
		</div>
	);
};

export { SearchResultsContainer };
