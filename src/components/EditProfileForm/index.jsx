import React, { useState } from "react";
import { InsertPhoto } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import {
	editAuthUser,
	editModalVisibility,
	editUserProfile,
	getAuthState,
	getUserProfileState,
} from "features";
import { CircleProgressBar } from "components";
import { useToast } from "hooks";

const EditProfileForm = () => {
	const dispatch = useDispatch();
	const { authToken } = useSelector(getAuthState);
	const { userProfile, userProfileLoading } =
		useSelector(getUserProfileState);
	const { showToast } = useToast();

	const [userFormData, setUserFormData] = useState({ ...userProfile });
	const { username, firstName, lastName, website, profileImage, bio } =
		userFormData;

	const handleUserFormDataChange = ({ target: { name, value } }) =>
		setUserFormData((prevUserFormData) => ({
			...prevUserFormData,
			[name]: value,
		}));

	const handleOnProfileImageChange = (event) => {
		const imageFile = event.target.files[0];
		if (Math.floor(imageFile / 1000000) > 3) {
			showToast("Image file size should be less than 3MB", "error");
			return;
		}
		const url = process.env.REACT_APP_CLOUDINARY_URL;

		const formData = new FormData();
		formData.append("file", imageFile);
		formData.append(
			"upload_preset",
			process.env.REACT_APP_CLOUD_UPLOAD_PRESET
		);

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUserFormData((prevUserFormData) => ({
					...prevUserFormData,
					profileImage: data.url,
				}));
			})
			.catch((error) =>
				showToast(
					"Failed to update image. Please try again later.",
					"error"
				)
			);
	};

	const handleEditProfile = async (event) => {
		event.preventDefault();

		try {
			const response = await dispatch(
				editUserProfile({
					authToken,
					editedUserProfile: {
						...userFormData,
						firstName: firstName.trim(),
						lastName: lastName.trim(),
						website: website.trim(),
						bio: bio.trim(),
					},
				})
			);
			if (response?.error)
				throw new Error(
					"Failed to edit profile. Please try again later."
				);
			showToast("User profile edited successfully.", "success");
			dispatch(
				editModalVisibility({
					modalVisibilityState: false,
					modalChildren: null,
				})
			);
			dispatch(editAuthUser(response.payload));
		} catch (error) {
			showToast(error.message, "error");
		}
	};

	const disableButton =
		userProfileLoading ||
		(userProfile.firstName === firstName &&
			userProfile.lastName === lastName &&
			userProfile.bio === bio &&
			userProfile.website === website &&
			userProfile.profileImage === profileImage) ||
		bio.trim().length > 150 ||
		!firstName.trim().length;

	return (
		<div className="new-post-container shadow-sm rounded-sm text-slate-900 dark:text-gray-100 bg-gray-100 dark:bg-slate-800 flex flex-col w-full gap-6 p-4 py-6 max-h-[90vh] overflow-y-auto">
			<div className="flex flex-row flex-wrap justify-between items-center w-full">
				<div>
					<h5 className="text-xl font-semibold">Edit Profile</h5>
					<div className="text-sm text-gray-400">@{username}</div>
				</div>
				<div className="img-container relative">
					<img
						className="inline-block h-10 w-10 rounded-full ring-2 ring-sky-500 object-cover"
						src={profileImage}
						alt={`{username} display image`}
					/>
					<label className="cursor-pointer absolute bottom-[-10px] right-[-5px]">
						<InsertPhoto className="text-sky-500" />
						<input
							type="file"
							name="profileImage"
							accept="image/*"
							className="hidden"
							disabled={userProfileLoading}
							onChange={handleOnProfileImageChange}
						/>
					</label>
				</div>
			</div>
			<form className="flex flex-col gap-3" onSubmit={handleEditProfile}>
				<div className="input-group flex flex-col gap-1">
					<label
						htmlFor="firstName"
						className="label-text w-max font-medium relative"
					>
						First Name
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						className="auth-form-input font-normal p-2"
						placeholder="First Name"
						value={firstName}
						required
						disabled={userProfileLoading}
						onChange={handleUserFormDataChange}
					/>
				</div>
				<div className="input-group flex flex-col gap-1">
					<label htmlFor="lastName font-medium">Last Name</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						className="auth-form-input font-normal p-2"
						placeholder="Last Name"
						value={lastName}
						disabled={userProfileLoading}
						onChange={handleUserFormDataChange}
					/>
				</div>
				<div className="input-group flex flex-col gap-1">
					<div className="flex flex-row justify-between items-center gap-2 my-1">
						<label htmlFor="bio font-medium">Bio</label>
						<CircleProgressBar
							length={bio.length}
							lengthToDisplay={150 - bio.length}
							maxLength={150}
							minLength={0}
						/>
					</div>
					<input
						type="text"
						id="bio"
						name="bio"
						className="auth-form-input font-normal p-2"
						placeholder="Bio"
						value={bio}
						disabled={userProfileLoading}
						onChange={handleUserFormDataChange}
					/>
				</div>
				<div className="input-group flex flex-col gap-1">
					<label htmlFor="Website font-medium">Website</label>
					<input
						type="url"
						placeholder="Website"
						name="website"
						value={website}
						disabled={userProfileLoading}
						className="auth-form-input font-normal p-2"
						onChange={handleUserFormDataChange}
					/>
				</div>
				<input
					type="submit"
					value="Update Profile"
					disabled={disableButton}
					className="self-end mt-4 btn-primary text-sm p-1.5 disabled:disabled-btn"
				/>
			</form>
		</div>
	);
};

export { EditProfileForm };
