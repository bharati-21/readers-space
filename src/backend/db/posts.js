import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deseru max.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "adarshbalika",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "shubhamsoni",
				text: "Interesting",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "sohamshah",
				text: "Wow!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed molestie lacus, eu accumsan felis. Cras dictum lorem a diam ultricies, et volutpat ipsum sagittis. Fusce at metus elit. Etiam pharetra felis ipsum, quis scelerisque urna malesuada at.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "shubhamsoni",

		comments: [
			{
				_id: uuid(),
				username: "shubhamsoni",
				text: "Interesting",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "sohamshah",
				text: "Wow!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
