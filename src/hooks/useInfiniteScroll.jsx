import React, { useEffect, useRef, useState } from "react";

const useInfiniteScroll = (posts) => {
	const [pageNumber, setPageNumber] = useState(1);
	const lastElementReference = useRef(null);
	const postsLength = posts.length;
	const hasMorePosts = pageNumber <= Math.ceil(postsLength / 3);
	const [loading, setLoading] = useState(false);

    let interval;

	const handleObserver = (entries) => {
		const [target] = entries;

		if (target.isIntersecting && hasMorePosts) {
			setLoading(true);

			interval = setTimeout(() => {
				setPageNumber((prevPageNumber) => prevPageNumber + 1);
				setLoading(false);
			}, 800);
		}
	};

	useEffect(() => {
		const reference = lastElementReference.current;
		const observer = new IntersectionObserver(handleObserver, {
			threshold: 1,
		});

		if (reference) observer.observe(reference);

		return () => {
			if (interval) clearInterval(interval);
			if (reference) observer.unobserve(reference);
		};
	}, [hasMorePosts, handleObserver]);

	return { loading, lastElementReference, pageNumber, hasMorePosts };
};

export { useInfiniteScroll };
