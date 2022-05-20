import React, { useEffect, useRef, useState } from "react";

const useInfiniteScroll = (posts) => {
	const [pageNumber, setPageNumber] = useState(1);
	const lastElementReference = useRef(null);
	const postsLength = posts.length;
	const hasMorePosts = pageNumber <= Math.ceil(postsLength / 3);
	const [loading, setLoading] = useState(false);

	const handleObserver = (entries) => {
		const [target] = entries;

		if (!loading && target.isIntersecting && hasMorePosts) {
			setLoading(true);

			setTimeout(() => {
				setPageNumber((prevPageNumber) => prevPageNumber + 1);
				setLoading(false);
			}, 1000);
		}
	};

	useEffect(() => {
		const reference = lastElementReference.current;
		const observer = new IntersectionObserver(handleObserver, {
			threshold: 1,
		});

		if (reference) observer.observe(reference);

		return () => {
			if (reference) observer.unobserve(reference);
		};
	}, [hasMorePosts, handleObserver]);

	return { loading, lastElementReference, pageNumber, hasMorePosts };
};

export { useInfiniteScroll };
