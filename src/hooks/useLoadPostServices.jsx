import React, { useState } from "react";

const useLoadPostServices = () => {
	const [isLoadingService, setIsLoadingService] = useState({
		loadingLikeService: false,
		loadingBookmarkService: false,
	});

	const handleChangeLoadingServiceState = (service, state) => {
		setIsLoadingService((prevIsLoadingService) => ({
			...prevIsLoadingService,
			[service]: state,
		}));
	};

	return { isLoadingService, handleChangeLoadingServiceState };
};

export { useLoadPostServices };
