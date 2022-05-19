import axios from "axios";

const editUserProfileService = (authToken, editedUserProfile) =>
	axios.post(
		"/api/users/edit",
		{
			userData: editedUserProfile,
		},
		{ headers: { authorization: authToken } }
	);

export { editUserProfileService };
