import React from "react";

const CircleProgressBar = ({
	length,
	lengthToDisplay,
	minLength,
	maxLength,
}) => {
	const style = {
		background:
			length > maxLength
				? "#EF4444"
				: `conic-gradient(#38bdf8 ${length * 1.44}deg, #ccc ${
						length * 1.44
				  }deg)`,
	};
	return (
		<div className="progress-ring" style={style}>
			<div
				className={`progress-value ${
					lengthToDisplay < minLength
						? "text-red-500"
						: "text-slate-900 dark:text-gray-100"
				}`}
			>
				{lengthToDisplay}
			</div>
		</div>
	);
};

export { CircleProgressBar };
