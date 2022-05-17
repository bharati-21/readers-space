import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "adarshbalika",
		password: "adarshBalika123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "A very adarsh developer balika",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
		website: "https://adarshbalika.netlify.app/",
		followers: ["shubhamsoni", "bhaaratii", "johndoe", "janedoe"],
		following: ["shubhamsoni", "johndoe", "janedoe", "hergranger"],
	},
	{
		_id: uuid(),
		firstName: "Shubham",
		lastName: "Soni",
		username: "shubhamsoni",
		password: "shubhamsoni123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Loves Code, Books, Coffee, and Songs in no particular order!",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
		website: "https://www.shubhamsoni.me/",
		followers: ["adarshbalika", "bhaaratii", "annachase", "percyblues"],
		following: ["adarshbalika", "bhaaratii", "janedoe"],
	},
	{
		_id: uuid(),
		firstName: "Bharati",
		lastName: "Subramanian",
		username: "bhaaratii",
		password: "bharati123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Loves Code, Books, Coffee, and Songs in no particular order!",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
		website: "bharati-21.github.io",
		followers: ["shubhamsoni", "hergranger", "youknowhow"],
		following: [
			"adarshbalika",
			"shubhamsoni",
			"hergranger",
			"annachase",
			"percyblues",
		],
	},
	{
		_id: uuid(),
		firstName: "John",
		lastName: "Doe",
		username: "johndoe",
		password: "johndoe",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Graphic Design | UI/ UX Design | Photography",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
		website: "https://johndoe-portfolio.netlify.app/",
		followers: ["adarshbalika", "janedoe", "hergranger", "percyblues"],
		following: ["adarshbalika", "janedoe", "youknowwho"],
	},
	{
		_id: uuid(),
		firstName: "Jane",
		lastName: "Doe",
		username: "janedoe",
		password: "janedoe789",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Web Developer",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
		website: "https://dev-portfolio-template.netlify.app/",
		followers: ["adarshbalika", "shubhamsoni", "johndoe", "annachase"],
		following: ["adarshbalika", "johndoe", "youknowwho"],
	},
	{
		_id: uuid(),
		firstName: "Hermione",
		lastName: "Granger",
		username: "hergranger",
		password: "granferspew",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Web Developer",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
		website: "https://harrypotter.fandom.com/wiki/Hermione_Granger",
		followers: ["adarshbalika", "bhaaratii", "annachase", "percyblues"],
		following: ["bhaaratii", "johndoe", "annachase", "percyblues"],
	},
	{
		_id: uuid(),
		firstName: "Annabeth",
		lastName: "Chase",
		username: "annachase",
		password: "grayeyes",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Architecht | Demigod | Daughter of Athena",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
		website: "https://riordan.fandom.com/wiki/Annabeth_Chase",
		followers: ["bhaaratii", "hergranger", "percyblues", "youknowwho"],
		following: ["shubhamsoni", "janedoe", "hergranger", "percyblues"],
	},
	{
		_id: uuid(),
		firstName: "Perseus",
		lastName: "Jackson",
		username: "percyblues",
		password: "riptide",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Demigod | Son of Poseidon | Loves Annabeth and all food blue!",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
		website: "https://riordan.fandom.com/wiki/Percy_Jackson",
		followers: ["bhaaratii", "hergranger", "percyblues", "youknowwho"],
		following: ["shubhamsoni", "johndoe", "hergranger", "annachase"],
	},
	{
		_id: uuid(),
		firstName: "Alex",
		lastName: "Smith",
		username: "youknowwho",
		password: "emgraphics",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Passionate Graphic Designer from New York",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
		website: "https://bootstrapmade.com/demo/templates/iPortfolio/",
		followers: ["johndoe", "janedoe"],
		following: ["bhaaratii", "annachase", "percyblues"],
	},
];
