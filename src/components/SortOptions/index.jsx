import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Sort,
	ArrowUpward,
	ArrowDownward,
	TrendingUp,
} from "@mui/icons-material";

import { getPostsState, setSortByOption } from "features";
import { useOnOutsideClick } from "hooks";

const SortOptions = () => {
	const dispatch = useDispatch();
	const { sortBy } = useSelector(getPostsState);
	const [showSortOptions, setShowSortOptions] = useState(false);
	const sortOptionsReference = useRef(null);

	const handleSortingOptionsVisibilityChange = (e) => {
		e.stopPropagation();
		setShowSortOptions((prevShowSortOptions) => !prevShowSortOptions);
	};

	const handleChangeSortOptions = (e, option) => {
		e.stopPropagation();
		dispatch(setSortByOption(option));
	};

	const handleClearSortOptions = () => dispatch(setSortByOption("LATEST"));

	useOnOutsideClick(sortOptionsReference, () => setShowSortOptions(false));

	return (
		<div className="flex flex-row w-full justify-between items-center">
			<button
				className={`btn ${
					sortBy === "LATEST" ? "invisible" : "visible"
				} btn-primary px-2 py-1`}
				onClick={handleClearSortOptions}
			>
				Clear Sort
			</button>
			<div className="sort-options-wrapper flex flex-row items-center justify-center relative">
				<p className="pr-1 text-lg">{sortBy}</p>
				<button
					className="btn btn-primary-icon"
					onClick={handleSortingOptionsVisibilityChange}
				>
					<Sort />
				</button>
				<div
					className={`sort-options border flex-col rounded-sm border-gray-400 absolute z-[2] top-[130%] bg-gray-200 dark:bg-slate-800 w-[150px] right-0 ${
						showSortOptions ? "flex" : "hidden"
					}`}
					ref={sortOptionsReference}
				>
					<button
						className={`btn-link p-1 font-semibold hover:text-sky-500 border-b w-full border-b-gray-400 ${
							sortBy === "LATEST"
								? "text-sky-400"
								: "text-inherit"
						} `}
						value="LATEST"
						onClick={(e) => handleChangeSortOptions(e, "LATEST")}
					>
						Latest <ArrowUpward />
					</button>
					<button
						className={`btn-link p-1 font-semibold hover:text-sky-500 border-b w-full border-b-gray-400 ${
							sortBy === "OLDEST"
								? "text-sky-400"
								: "text-inherit"
						} `}
						value="OLDEST"
						onClick={(e) => handleChangeSortOptions(e, "OLDEST")}
					>
						Oldest <ArrowDownward />
					</button>
					<button
						className={`btn-link p-1 font-semibold hover:text-sky-500  ${
							sortBy === "TRENDING"
								? "text-sky-400"
								: "text-inherit"
						} `}
						value="TRENDING"
						onClick={(e) => handleChangeSortOptions(e, "TRENDING")}
					>
						Trending <TrendingUp />
					</button>
				</div>
			</div>
		</div>
	);
};

export { SortOptions };
