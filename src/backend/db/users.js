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
		followers: [
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
		],
		following: [
			{
				firstName: "Shubham",
				lastName: "Soni",
				username: "shubhamsoni",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
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
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				website: "https://adarshbalika.netlify.app/",
			},
			{
				firstName: "Bharati",
				lastName: "Subramanian",
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
			},
			{
				firstName: "Annabeth",
				lastName: "Chase",
				username: "annachase",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
			},
			{
				firstName: "Perseus",
				lastName: "Jackson",
				username: "percyblues",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
			},
		],
		following: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				website: "https://adarshbalika.netlify.app/",
			},
			{
				firstName: "Bharati",
				lastName: "Subramanian",
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
			},
			{
				firstName: "Jane",
				lastName: "Doe",
				username: "janedoe",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
			},
		],
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
		followers: [
			{
				firstName: "Shubham",
				lastName: "Soni",
				username: "shubhamsoni",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
			},
			{
				firstName: "Hermione",
				lastName: "Granger",
				username: "hergranger",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
			},
			{
				firstName: "Alex",
				lastName: "Smith",
				username: "youknowwho",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
			},
		],
		following: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				website: "https://adarshbalika.netlify.app/",
			},
			{
				firstName: "Shubham",
				lastName: "Soni",
				username: "shubhamsoni",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
			},
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
			},
			{
				firstName: "Perseus",
				lastName: "Jackson",
				username: "percyblues",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
			},
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
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				website: "https://adarshbalika.netlify.app/",
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
			{
				firstName: "Perseus",
				lastName: "Jackson",
				username: "percyblues",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
			},
		],
		following: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				website: "https://adarshbalika.netlify.app/",
			},
			{
				firstName: "Jane",
				lastName: "Doe",
				username: "janedoe",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
			},
			{
				firstName: "Alex",
				lastName: "Smith",
				username: "youknowwho",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
			},
		],
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
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				website: "https://adarshbalika.netlify.app/",
			},
			{
				firstName: "Shubham",
				lastName: "Soni",
				username: "shubhamsoni",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
			},
			{
				firstName: "John",
				lastName: "Doe",
				username: "johndoe",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
			},
			{
				firstName: "Annabeth",
				lastName: "Chase",
				username: "annachase",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
			},
			{
				firstName: "Ryan",
				lastName: "Terry",
				username: "terrry",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
			},
		],
		following: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				website: "https://adarshbalika.netlify.app/",
			},
			{
				firstName: "John",
				lastName: "Doe",
				username: "johndoe",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
			},
			{
				firstName: "Alex",
				lastName: "Smith",
				username: "youknowwho",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
			},
		],
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
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
				website: "https://adarshbalika.netlify.app/",
			},
			{
				firstName: "Bharati",
				lastName: "Subramanian",
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
			},
			{
				firstName: "Annabeth",
				lastName: "Chase",
				username: "annachase",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
			},
			{
				firstName: "Perseus",
				lastName: "Jackson",
				username: "percyblues",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
			},
		],
		following: [
			{
				firstName: "Bharati",
				lastName: "Subramanian",
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
			},
			{
				firstName: "John",
				lastName: "Doe",
				username: "johndoe",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
			},
			{
				firstName: "Annabeth",
				lastName: "Chase",
				username: "annachase",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
			},
			{
				firstName: "Perseus",
				lastName: "Jackson",
				username: "percyblues",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
			},
		],
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
		followers: [
			{
				firstName: "Bharati",
				lastName: "Subramanian",
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
			},
			{
				firstName: "Hermione",
				lastName: "Granger",
				username: "hergranger",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
			},
			{
				firstName: "Perseus",
				lastName: "Jackson",
				username: "percyblues",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
			},
			{
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
		],
		following: [
			{
				firstName: "Shubham",
				lastName: "Soni",
				username: "shubhamsoni",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
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
			{
				firstName: "Perseus",
				lastName: "Jackson",
				username: "percyblues",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
			},
		],
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
		followers: [
			{
				firstName: "Bharati",
				lastName: "Subramanian",
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
			},
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
			},
			{
				firstName: "Alex",
				lastName: "Smith",
				username: "youknowwho",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
			},
		],
		following: [
			{
				firstName: "Shubham",
				lastName: "Soni",
				username: "shubhamsoni",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
			},
			{
				firstName: "John",
				lastName: "Doe",
				username: "johndoe",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
			},
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
			},
		],
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
		followers: [
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
		],
		following: [
			{
				firstName: "Bharati",
				lastName: "Subramanian",
				username: "bhaaratii",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
			},
			{
				firstName: "Annabeth",
				lastName: "Chase",
				username: "annachase",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
			},
			{
				firstName: "Perseus",
				lastName: "Jackson",
				username: "percyblues",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
			},
			{
				firstName: "Alison",
				lastName: "Day",
				username: "aliiday",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
			},
		],
	},
	{
		_id: uuid(),
		firstName: "Ryan",
		lastName: "Terry",
		username: "terrry",
		password: "9uQFF1Lh",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Award winning 2D generalist that loves making beautiful games, characters, apps, products and more.",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
		website: "https://ryanterry.net/",
		followers: [
			{
				firstName: "Sheldon",
				lastName: "Borenstein",
				username: "shelbor",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
			},
			{
				firstName: "Dennis",
				lastName: "Snellenberg",
				username: "dennsnell",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
			},
		],
		following: [
			{
				firstName: "Annabeth",
				lastName: "Chase",
				username: "annachase",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
			},
			{
				firstName: "Jane",
				lastName: "Doe",
				username: "janedoe",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
			},
		],
	},
	{
		_id: uuid(),
		firstName: "Sheldon",
		lastName: "Borenstein",
		username: "shelbor",
		password: "CQutx25i8r",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "I teach at Sheldon’s art academy.",
		website: "https://www.artstation.com/sheldonborenstein",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
		followers: [],
		following: [
			{
				firstName: "Ryan",
				lastName: "Terry",
				username: "terrry",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
			},
			{
				firstName: "Jennifer",
				lastName: "Jäger",
				username: "jennyj",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
			},
		],
	},
	{
		_id: uuid(),
		firstName: "Alison",
		lastName: "Day",
		username: "aliiday",
		password: "zY1nE46Zm",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Bestselling author, award-winning food writer, recipe developer, and food stylist.",
		website: "https://yummybeet.com/",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
		followers: [
			{
				firstName: "Alex",
				lastName: "Smith",
				username: "youknowwho",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
			},
		],
		following: [
			{
				firstName: "Dennis",
				lastName: "Snellenberg",
				username: "dennsnell",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
			},
		],
	},
	{
		_id: uuid(),
		firstName: "Jennifer",
		lastName: "Jäger",
		username: "jennyj",
		password: "87hdjdhk",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Creative User Experience and Interface Designer",
		website: "https://jennifer-portfolio.netlify.app/",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
		followers: [
			{
				firstName: "Dennis",
				lastName: "Snellenberg",
				username: "dennsnell",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
			},
			{
				firstName: "Sheldon",
				lastName: "Borenstein",
				username: "shelbor",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
			},
		],
		following: [
			{
				firstName: "Dennis",
				lastName: "Snellenberg",
				username: "dennsnell",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
			},
		],
	},

	{
		_id: uuid(),
		firstName: "Dennis",
		lastName: "Snellenberg",
		username: "dennsnell",
		password: "jsgjdsgj",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "Helping brands thrive in the digital world",
		website: "https://dennissnellenberg.com/",
		profileImage:
			"https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
		followers: [
			{
				firstName: "Jennifer",
				lastName: "Jäger",
				username: "jennyj",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
			},
			{
				firstName: "Alison",
				lastName: "Day",
				username: "aliiday",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
			},
		],
		following: [
			{
				firstName: "Ryan",
				lastName: "Terry",
				username: "terrry",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
			},
			{
				firstName: "Jennifer",
				lastName: "Jäger",
				username: "jennyj",
				profileImage:
					"https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
			},
		],
	},
];
