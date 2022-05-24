import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useReducer } from "react";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useDocumentTitle, useToast } from "hooks";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState, signupUser } from "features";
import { isFormDataValid } from "utils";

const SignUp = () => {
	const { setDocumentTitle } = useDocumentTitle();
	const dispatch = useDispatch();
	const auth = useSelector(getAuthState);
	const { showToast } = useToast();
	const navigate = useNavigate();
	const location = useLocation();

	const initialErrorState = {
		firstNameError: null,
		lastNameError: null,
		usernameError: null,
		passwordError: null,
		confirmPasswordError: null,
	};

	const errorReducer = (state, { type, payload: { error, errorValue } }) => {
		switch (type) {
			case "RESET_ERROR_STATES":
				return { ...initialErrorState };
			case "SET_ERROR":
				return { ...state, [error]: errorValue };
		}
	};

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		confirmPassword: "",
	});

	const [formDataError, setFormDataError] = useReducer(
		errorReducer,
		initialErrorState
	);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [error, setError] = useState(null);

	const { firstName, lastName, username, password, confirmPassword } =
		formData;

	const {
		firstNameError,
		lastNameError,
		usernameError,
		passwordError,
		confirmPasswordError,
	} = formDataError;
	const { isAuth, authLoading, authError } = auth;

	const handleFormDataChange = ({ target: { name, value } }) => {
		if (name === "password" || name === "confirmPassword") {
			if (name === "confirmPassword") {
				if (password && password !== value) {
					setError("Passwords do not match");
				} else setError(null);
			} else {
				if (name === "password") {
					if (confirmPassword && confirmPassword !== value) {
						setError("Passwords do not match");
					} else setError(null);
				}
			}
		}
		if (formDataError[name + "Error"]) {
			setFormDataError({
				type: "SET_ERROR",
				payload: { error: name + "Error", errorValue: null },
			});
		}
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handlePasswordVisibilityChange = (event) =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	const handleConfirmPasswordVisibilityChange = (event) =>
		setShowConfirmPassword(
			(prevShowConfirmPassword) => !prevShowConfirmPassword
		);

	const handleChangeConfirmPassword = ({ target: { value, name } }) => {
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
		if (password) {
			if (value !== password) setError("Passwords do not match");
			else setError(null);
		} else {
			setError(null);
		}
	};

	const handleSignup = async (event) => {
		event.preventDefault();
		if (
			!isFormDataValid(
				firstName,
				lastName,
				username,
				password,
				confirmPassword,
				setFormDataError,
				setError
			)
		) {
			return;
		}

		try {
			const response = await dispatch(signupUser(formData));

			if (response?.error) {
				if (response.payload.includes("422"))
					throw new Error("Username already exists!");
				throw new Error("Signup Failed");
			}

			if (response?.payload.encodedToken) {
				showToast("Signup Successfull.", "success");
				navigate(location?.state?.from ?? "/home", { replace: true });
			}
		} catch (error) {
			showToast(error.message, "error");
		}
	};

	useEffect(() => {
		setDocumentTitle("ReadersSpace | Signup");
		if (isAuth) {
			navigate(-1, { replace: true });
		}
	}, []);

	return (
		<section className="auth-container p-4 md:p-12 min-h-[90vh] w-full flex flex-col justify-center items-center my-8">
			<div className="signup-container max-w-[500px] w-full mx-auto h-full flex flex-col justify-center items-center gap-8 drop-shadow bg-sky-300/10 rounded-sm md:p-5 p-3">
				<h2 className="section-head auth-head text-sky-400 uppercase text-3xl md:text-4xl font-medium">
					Signup
				</h2>
				<form
					className="login-form flex flex-col items-center justify-center gap-4 w-full"
					onSubmit={handleSignup}
				>
					<div className="form-group w-full">
						<label
							htmlFor="input-fname"
							className="auth-form-label"
						>
							<span className="label-text relative w-max">
								First Name
							</span>
							<input
								type="text"
								id="input-fname"
								name="firstName"
								className="auth-form-input"
								required
								placeholder="First name"
								autoComplete="off"
								value={firstName}
								onChange={handleFormDataChange}
							/>
						</label>
						{firstNameError && (
							<span className="error-message text-red-500 text-xs">
								{firstNameError}
							</span>
						)}
					</div>
					<div className="form-group w-full">
						<label
							htmlFor="input-lname"
							className="auth-form-label"
						>
							<span className="label-text relative w-max">
								Last Name
							</span>
							<input
								type="text"
								id="input-lname"
								name="lastName"
								placeholder="Last name"
								className="auth-form-input"
								required
								autoComplete="off"
								value={lastName}
								onChange={handleFormDataChange}
							/>
						</label>
						{lastNameError && (
							<span className="error-message text-red-500 text-xs">
								{lastNameError}
							</span>
						)}
					</div>
					<div className="form-group w-full">
						<label
							htmlFor="input-username"
							className="auth-form-label"
						>
							<span className="label-text relative w-max">
								Username
							</span>
							<input
								type="text"
								id="input-username"
								name="username"
								className="auth-form-input"
								required
								placeholder="Username"
								autoComplete="off"
								value={username}
								onChange={handleFormDataChange}
							/>
						</label>
						{usernameError && (
							<span className="error-message text-red-500 text-xs">
								{usernameError}
							</span>
						)}
					</div>
					<div className="form-group w-full">
						<label
							htmlFor="input-password"
							className="auth-form-label"
						>
							<span className="label-text relative w-max">
								Password
							</span>
							<div className="input-container w-full relative">
								<input
									type={showPassword ? "text" : "password"}
									id="input-password"
									name="password"
									placeholder="Password"
									className="auth-form-input"
									required
									autoComplete="off"
									value={password}
									onChange={handleFormDataChange}
								/>
								<button
									type="button"
									className="password-visibility-icon absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer"
									onClick={handlePasswordVisibilityChange}
								>
									<FontAwesomeIcon
										className="text-slate-900"
										icon={showPassword ? faEyeSlash : faEye}
									/>
								</button>
							</div>
						</label>
						{passwordError && (
							<span className="error-message text-red-500 text-xs">
								{passwordError}
							</span>
						)}
					</div>
					<div className="form-group w-full">
						<label
							htmlFor="input-confirm-password"
							className="auth-form-label"
						>
							<span className="label-text relative w-max">
								Confirm Password
							</span>
							<div className="input-container w-full relative">
								<input
									type={
										showConfirmPassword
											? "text"
											: "password"
									}
									id="input-confirm-password"
									name="confirmPassword"
									className="auth-form-input"
									required
									placeholder="Confirm Password"
									autoComplete="off"
									value={confirmPassword}
									onChange={handleChangeConfirmPassword}
								/>
								<button
									type="button"
									className="password-visibility-icon absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer"
									onClick={
										handleConfirmPasswordVisibilityChange
									}
								>
									<FontAwesomeIcon
										className="text-slate-900"
										icon={
											showConfirmPassword
												? faEyeSlash
												: faEye
										}
									/>
								</button>
							</div>
						</label>
						{confirmPasswordError && (
							<span className="error-message text-red-500 text-xs">
								{confirmPasswordError}
							</span>
						)}
					</div>
					{error ? (
						<div className="error-message w-full mt-2 text-red-500 text-xs">
							{error}
						</div>
					) : null}
					<div className="auth-button-containers w-full mt-6 flex flex-col items-center justify-center gap-5">
						<input
							type="submit"
							className={`btn-primary-full disabled:disabled-btn`}
							value="Signup"
							disabled={
								authLoading ||
								error ||
								firstNameError ||
								lastNameError ||
								usernameError ||
								passwordError ||
								confirmPasswordError
							}
						/>
						<Link to="/login" className="btn-primary-link">
							Already ReadersSpace member? Login
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export { SignUp };
