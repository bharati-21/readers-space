import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAuthState, loginUser } from "features";
import { useDocumentTitle, useToast } from "hooks";

const Login = () => {
	const { setDocumentTitle } = useDocumentTitle();
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const { showToast } = useToast();
	const auth = useSelector(getAuthState);

	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const { username, password } = formData;

	const { authLoading, authError, isAuth } = auth;

	const handleFormDataChange = ({ target: { name, value } }) => {
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handlePasswordVisibilityChange = (event) =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			const response = await dispatch(loginUser(formData));

			if (response?.error) {
				if (response.payload.includes("404"))
					throw new Error("Username not found!");
				throw new Error("Login Failed");
			}

			if (response?.payload.encodedToken) {
				showToast("Login Successfull.", "success");
				navigate(location.state?.from ?? "/home", { replace: true });
			}
		} catch (error) {
			showToast(error.message, "error");
		}
	};

	const handleLoginWithTestCredentials = () => {
		setFormData({
			username: process.env.REACT_APP_GUEST_USERNAME,
			password: process.env.REACT_APP_GUEST_PASSWORD,
		});
	};

	useEffect(() => {
		setDocumentTitle("ReadersSpace | Login");
		if (isAuth) {
			navigate(-1, { replace: true });
		}
	}, []);

	return (
		<section className="auth-container p-4 md:p-12 min-h-[90vh] w-full flex flex-col justify-center items-center">
			<div className="login-container max-w-[500px] w-full mx-auto h-full flex flex-col justify-center items-center gap-8 drop-shadow bg-sky-300/10 rounded-sm md:p-5 p-3">
				<h2 className="section-head auth-head text-sky-400 uppercase text-3xl md:text-4xl font-medium">
					Login
				</h2>
				<form
					className="login-form flex flex-col items-center justify-center gap-4 w-full"
					onSubmit={handleLogin}
				>
					<div className="form-group w-full">
						<label
							htmlFor="input-username"
							className="auth-form-label username-label"
						>
							<div className="label-text relative w-max">
								Username
							</div>
							<input
								type="text"
								id="input-username"
								name="username"
								className="auth-form-input"
								required
								value={username}
								onChange={handleFormDataChange}
							/>
						</label>
					</div>
					<div className="form-group w-full">
						<label
							htmlFor="input-password"
							className="auth-form-label password-label"
						>
							<div className="label-text relative w-max">
								Password
							</div>
							<div className="input-container w-full relative">
								<input
									type={showPassword ? "text" : "password"}
									id="input-password"
									name="password"
									className="auth-form-input"
									required
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
										icon={showPassword ? faEye : faEyeSlash}
									/>
								</button>
							</div>
						</label>
					</div>
					<div className="auth-button-containers w-full mt-6 flex flex-col items-center justify-center gap-5">
						<input
							type="submit"
							className="btn-primary-full"
							value="Login"
						/>
						<input
							type="submit"
							className="btn-primary-full-outline disabled:disabled-btn text-slate-900 dark:text-gray-100"
							value="Login as Guest"
							disabled={authLoading}
							onClick={handleLoginWithTestCredentials}
						/>
						<Link to="/signup" className="btn-primary-link mt-2">
							New to ReadersSpace? Sign up
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export { Login };
