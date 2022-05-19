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
			"Progress lies not in enhancing what is, but in advancing toward what will be.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Shubham",
					lastName: "Soni",
					username: "shubhamsoni",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
				},
				{
					firstName: "Annabeth",
					lastName: "Chase",
					username: "annachase",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "shubhamsoni",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
				text: "Interesting",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "annachase",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
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
			"The longest period I went without picking a book was a month! It was super weird",
		likes: {
			likeCount: 4,
			likedBy: [
				{
					firstName: "Hermione",
					lastName: "Granger",
					username: "hergranger",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
				},
				{
					firstName: "Annabeth",
					lastName: "Chase",
					username: "annachase",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
					website: "https://riordan.fandom.com/wiki/Annabeth_Chase",
				},
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				},
				{
					firstName: "Bharati",
					lastName: "Subramanian",
					username: "bhaaratii",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
				},
			],
			dislikedBy: [],
		},
		username: "hergranger",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
		comments: [
			{
				_id: uuid(),
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
				text: "Haha, I know the feeling! *grimace*",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				text: "Hey, why don't you go out for a change! xD",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: `A little girl just ran into the library screaming "Books! BOOKS! BOOOOKS! books! BOOKS!" and honestly my day can't get better than that`,
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Alison",
					lastName: "Day",
					username: "aliiday",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
				},
				{
					firstName: "Jennifer",
					lastName: "Jäger",
					username: "jennyj",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
				},
			],
			dislikedBy: [],
		},
		username: "aliiday",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
		comments: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: `Harry Potter and that's it that's the book...\n"Ah yes, of course, I haven't told you," said Dumbledore.
        `,
		likes: {
			likeCount: 1,
			likedBy: [
				{
					firstName: "Hermione",
					lastName: "Granger",
					username: "hergranger",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "bhaaratii",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
		comments: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"if you speak to me when i'm reading i will find a way to break into your home and force you to listen to my feelings on ostriches until you agree never to invade the world i'm visiting again.",
		likes: {
			likeCount: 6,
			likedBy: [
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
				},
				{
					firstName: "Ryan",
					lastName: "Terry",
					username: "terrry",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
				},
				{
					firstName: "Sheldon",
					lastName: "Borenstein",
					username: "shelbor",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
				},
				{
					firstName: "Alison",
					lastName: "Day",
					username: "aliiday",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
				},
				{
					firstName: "Alex",
					lastName: "Smith",
					username: "youknowwho",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
				},
				{
					firstName: "Dennis",
					lastName: "Snellenberg",
					username: "dennsnell",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "jennyj",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "janedoe",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
				text: "Ahh! Absolutely hilarious!!",
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
			"my ideal partner is thick, has a tough spine, travels with me wherever I go, and might actually be a book.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "youknowwho",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [],
	},
	{
		_id: uuid(),
		content: "I love blue food and books. Oh, and obviously you Annabeth!",
		likes: {
			likeCount: 4,
			likedBy: [
				{
					firstName: "Annabeth",
					lastName: "Chase",
					username: "annachase",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
				},
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
				},
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
				},
				{
					firstName: "Hermione",
					lastName: "Granger",
					username: "hergranger",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "percyblues",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "annachase",

				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
				website: "https://riordan.fandom.com/wiki/Annabeth_Chase",
				text: "Haha, it's okay. I love books and architecture more than I love you as well!",
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
			"God bless Jane Austen for naming the prettiest, kindest, most generous, most patient character in Pride and Prejudice after herself that is self-love and I am on board",
		likes: {
			likeCount: 1,
			likedBy: [
				{
					firstName: "Sheldon",
					lastName: "Borenstein",
					username: "shelbor",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "shelbor",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [],
	},
	{
		_id: uuid(),
		content: `reads book: *favorite character dies*\nme: maybe if i read this again he won't die`,
		likes: {
			likeCount: 7,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				},
				{
					firstName: "Shubham",
					lastName: "Soni",
					username: "shubhamsoni",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
				},
				{
					firstName: "Bharati",
					lastName: "Subramanian",
					username: "bhaaratii",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
				},
				{
					_id: uuid(),
					firstName: "Alex",
					lastName: "Smith",
					username: "youknowwho",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
				},
				{
					firstName: "Ryan",
					lastName: "Terry",
					username: "terrry",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
				},
				{
					_id: uuid(),
					firstName: "Sheldon",
					lastName: "Borenstein",
					username: "shelbor",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
				},
				{
					firstName: "Alison",
					lastName: "Day",
					username: "aliiday",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "johndoe",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
		comments: [
			{
				_id: uuid(),
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
				text: "me: cries in a corner!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: `You should be able to call into work because you are mourning the end of a really good book.`,
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "dennsnell",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
		comments: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content: "Starting a cover band called book so no one can judge us.",
		likes: {
			likeCount: 1,
			likedBy: [
				{
					firstName: "Jennifer",
					lastName: "Jäger",
					username: "jennyj",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
				},
			],
			dislikedBy: [],
		},
		username: "terrry",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "jennyj",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
				text: "Lol! I loved this one!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content: "I wish someone would pay me to read books.",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
				},
				{
					_id: uuid(),
					firstName: "Hermione",
					lastName: "Granger",
					username: "hergranger",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
				},
				{
					firstName: "Annabeth",
					lastName: "Chase",
					username: "annachase",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "bhaaratii",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "annachase",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
				text: "Oh wow! That's the dream!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content: `me: I love that character\nauthor: *laughs in evil*`,
		likes: {
			likeCount: 1,
			likedBy: [
				{
					firstName: "Dennis",
					lastName: "Snellenberg",
					username: "dennsnell",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "aliiday",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [],
	},
	{
		_id: uuid(),
		content: `I do not enjoy people. All I enjoy is books.`,
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "terrry",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [],
	},
	{
		_id: uuid(),
		content: `Reach for a book. It's a weapon.`,
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Ryan",
					lastName: "Terry",
					username: "terrry",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
				},
				{
					_id: uuid(),
					firstName: "Sheldon",
					lastName: "Borenstein",
					username: "shelbor",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
				},
				{
					firstName: "Alison",
					lastName: "Day",
					username: "aliiday",
					profileImage:
						"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "jennyj",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
		comments: [
			{
				_id: uuid(),
				username: "aliiday",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
				text: "So true. Very true. My brain's as sharp as a knife. Hehe",
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
