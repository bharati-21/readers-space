import dayjs from "dayjs";

const getSortedPosts = (posts, sortBy) => {
	switch (sortBy) {
		case "LATEST":
			return [...posts].sort((postA, postB) =>
				dayjs(postA.createdAt).isBefore(dayjs(postB.createdAt)) ? 1 : -1
			);

		case "OLDEST":
			return [...posts].sort((postA, postB) =>
				dayjs(postA.createdAt).isBefore(dayjs(postB.createdAt)) ? -1 : 1
			);
		case "TRENDING":
			return [...posts].sort(
				(postA, postB) => postB.likes.likeCount - postA.likes.likeCount
			);
	}
};

export { getSortedPosts };
