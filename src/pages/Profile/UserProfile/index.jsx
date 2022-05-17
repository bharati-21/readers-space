import { NorthEast } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";

const UserProfile = ({ userProfile, userPostsLength }) => {
	const {
		profileImage,
		username,
		firstName,
		lastName,
		website,
		bio,
		followers,
		following,
	} = userProfile;

    const dispatch = useDispatch();

    const handleModalVisibilityChange = (e) => {
        e.stopPropagation();
        
    } 

	return (
		<div className="w-full h-max relative">
			<div className="image-container h-[8rem] w-full bg-sky-400 p-3 sm:p-5 ">
				<button className="bg-slate-900 hover:bg-slate-800 transition-all ease-linear text-gray-100 px-2 py-1 rounded-sm absolute right-3 top-3 sm:top-5 sm:right-5" onClick={handleModalVisibilityChange}>
					Edit Profile
				</button>
				<div className="absolute left-[50%] translate-x-[-50%] top-[40px] w-max text-center mx-auto">
					<img
						src={profileImage}
						alt={`${username} profile picture`}
						className="w-[10rem] h-[10rem] rounded-full object-cover"
					/>
					<div className="relative top-[15px] h-full">
						<h4 className="text-xl font-semibold">@{username}</h4>
						<p>{`${firstName} ${lastName}`}</p>
					</div>
				</div>
			</div>
			<div className="bg-gray-100 dark:bg-slate-800 h-max p-5 w-full">
				<div className="user-info flex flex-col gap-4 items-center w-full mt-[150px]">
					<div className="about mx-auto text-center">
						<p>{bio}</p>
						<a
							href={website}
							target="_blank"
							className="text-sm text-sky-400 hover:text-sky-500 py-1 px-2 rounded-sm border mt-1 border-sky-400 mx-auto text-center max-w-max inline-block"
						>
							Visit Website <NorthEast fontSize="small" />
						</a>
					</div>
					<div className="w-full mt-5 flex flex-wrap flex-row gap-4 items-center justify-center sm:justify-around mb-5">
						<h6>Followers: {followers.length}</h6>
						<h6>Posts: {userPostsLength}</h6>
						<h6>Following: {following.length}</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export { UserProfile };
