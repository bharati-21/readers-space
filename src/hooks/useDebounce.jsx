import React, { useEffect, useState } from "react";
import { getUsersState } from "features";
import { useSelector } from "react-redux";
import { getSearchedUsers } from "utils";

const useDebounce = () => {
	const [searchLoading, setSearchLoading] = useState(false);
	const { users } = useSelector(getUsersState);
	const [searchQueryText, setSearchQueryText] = useState("");
	let timeout;
	const [searchedUsers, setSearchedUsers] = useState([]);

	const handleSearchTextChange = (event) => {
		const searchText = event.target.value;
		setSearchQueryText(searchText);
		setSearchedUsers([]);
		if (searchText !== "") updateSearchedUsers(searchText);
	};

	const updateSearchedUsers = debounce((searchText) => {
		setSearchedUsers(getSearchedUsers(users, searchText));
	});

	function debounce(callback, delay = 1000) {
		return (...args) => {
			setSearchLoading(true);
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				setSearchLoading(false);
				callback(...args);
			}, delay);
		};
	}

	return {
		searchLoading,
		handleSearchTextChange,
		searchedUsers,
		searchQueryText,
	};
};

export { useDebounce };
