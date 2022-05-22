const isFormDataValid = (
	firstName,
	lastName,
	username,
	password,
	confirmPassword,
	setFormDataError
) => {
	const isMinPasswordLength = (password) => password.trim().length >= 7;
	const isMinNameLength = (name) => name.trim().length >= 2;
	const isMinUsernameLength = (username) => username.trim().length >= 3;

	const isPasswordValid = (passwordValue) =>
		/^[A-Za-z0-9]{7,15}$/.test(passwordValue);
	const isNameValid = (name) => /^[A-Za-z]{2,20}$/.test(name);
	const isUsernameValid = (username) => {
		return /^[a-zA-Z0-9]{3,20}$/.test(username);
	};

	if (!isMinNameLength(firstName)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "firstNameError",
				errorValue:
					"Invalid first name. Name must have least 2 characters.",
			},
		});
		return false;
	}
	if (!isNameValid(firstName)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "firstNameError",
				errorValue:
					"Invalid first name. Name should only contain letters.",
			},
		});
		return false;
	}

	if (!isMinNameLength(lastName)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "lastNameError",
				errorValue:
					"Invalid first name. Name must have least 2 characters.",
			},
		});
		return false;
	}

	if (!isNameValid(lastName)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "lastNameError",
				errorValue:
					"Invalid lastName name. Name should only contain letters.",
			},
		});
		return false;
	}

	if (!isMinUsernameLength(username)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "usernameError",
				errorValue:
					"Invalid username. Name must have least 3 characters.",
			},
		});
		return false;
	}

	if (!isUsernameValid(username)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "usernameError",
				errorValue:
					"Invalid username. Username should only contain letters and numbers.",
			},
		});
		return false;
	}

	if (!isMinPasswordLength(password)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "passwordError",
				errorValue:
					"Invalid password. Password must have least 7 characters.",
			},
		});
		return false;
	}

	if (!isPasswordValid(password)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "passwordError",
				errorValue:
					"Invalid password. Password should only contain only letters and numbers.",
			},
		});
		return false;
	}

	if (!isMinPasswordLength(confirmPassword)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "confirmPasswordError",
				errorValue:
					"Invalid confirm password. Confirm password must have least 7 characters.",
			},
		});
		return false;
	}

	if (!isPasswordValid(confirmPassword)) {
		setFormDataError({
			type: "SET_ERROR",
			payload: {
				error: "confirmPasswordError",
				errorValue:
					"Invalid confirm password. Password should only contain only letters and numbers.",
			},
		});
		return false;
	}

	if (password !== confirmPassword) {
		setError("Passwords do not match");
		return false;
	}
	return true;
};

export { isFormDataValid };
