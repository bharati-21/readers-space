import React, { useCallback, useState } from "react";
import { getUsersState } from "features";
import { useSelector } from "react-redux";
import { getSearchedUsers } from "utils";

const useDebounce = () => {
	const [searchLoading, setSearchLoading] = useState(false);
	const { users } = useSelector(getUsersState);
	const [searchQueryText, setSearchQueryText] = useState("");
	const [searchedUsers, setSearchedUsers] = useState([]);

	const handleSearchTextChange = (event) => {
		const searchText = event.target.value;
		setSearchQueryText(searchText);
		if (searchText !== "") {
			updateSearchedUsers(searchText);
		}
	};

	const debounce = (callback, delay = 1000) => {
		let timeout;
		return (...args) => {
			setSearchLoading(true);
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				setSearchLoading(false);
				callback(...args);
			}, delay);
		};
	};

	const updateSearchedUsers = useCallback(
		debounce((searchText) => {
			setSearchedUsers(getSearchedUsers(users, searchText));
		}),
		[users]
	);

	return {
		searchLoading,
		handleSearchTextChange,
		searchedUsers,
		searchQueryText,
	};
};

export { useDebounce };
