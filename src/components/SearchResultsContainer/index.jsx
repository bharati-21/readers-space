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
			) : null}
		</div>
	);
};

export { SearchResultsContainer };
