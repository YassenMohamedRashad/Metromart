/* dependencies */
import axios from "axios";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Validator } from "../Hooks/useValidation";
import { Loader, Fail, Success } from "./SweetAlert";

/* assets */
import "../assets/css/signup.css";
import signupImage from "../assets/images/signup.svg";
import googleLogo from "../assets/images/google-icon.svg";

function SignUp() {
	const navigate = useNavigate();
	const { dispatch } = useAuth();
	const [address2, setAddress2] = useState();
	// Use state hook for Errors
	const [errors, setErrors] = useState({}); // Changed from let Errors to const [errors, setErrors]
	/* input fields values */
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const confirmPassword = useRef();
	const address1 = useRef();
	const phoneNumber = useRef();
	const age = useRef();
	const MaleChecked = useRef();
	const FemaleChecked = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let isMale = false;
		if (MaleChecked.current.checked && !FemaleChecked.current.checked)
			isMale = "male";
		else if (FemaleChecked.current.checked && !MaleChecked.current.checked)
			isMale = "female";
		else if (!MaleChecked.current.checked && !FemaleChecked.current.checked)
			isMale = null;

		const data = {
			name: username.current.value,
			email: email.current.value,
			password: password.current.value,
			confirmPassword: confirmPassword.current.value,
			address1: address1.current.value,
			address2: address2 || null,
			phone_number: phoneNumber.current.value,
			gender: isMale,
			age: age.current.value,
		};
		// Handle the validation errors here
		const [validationErrors, Data] = Validator(data);
		setErrors(validationErrors); // Update the state with validation errors
		if (isEmpty(validationErrors)) {
			console.log("entered");
			// Loader();
			/* Send a POST Request To create a New User */
			try {
				Loader();
				const response = await axios.post(
					"http://localhost:5011/user/signup",
					data
				);

				// Assuming the response data has a status property indicating success
				if (response.data.status === "success") {
					// setFormErrors({});
					console.log("then=>", response.data.status);
					/* clear out the form */
					//
					/* store user's data */
					const { user_token, ...userData } = response.data.data;
					localStorage.clear();
					localStorage.setItem(
						"user",
						JSON.stringify({ ...userData })
					);
					localStorage.setItem("user_token", user_token);
					dispatch({
						type: "Login",
						payload: [
							JSON.parse(localStorage.getItem("user")),
							localStorage.getItem("user_token"),
							null, // Change this line to pass an empty array instead of [null]
						],
					});

					Success(
						"<i>Your account is all set up 👌</i>",
						`/Metromart/`,
						navigate
					);
				} else {
					Fail(
						"Failed To Create Account",
						"This Email Is Already Taken!"
					);
					// empty the password fields
				}
			} catch (error) {
				// Handle network errors or other issues
				console.log("Error: ", error);
			}
		}
	};

	return (
		<div className="container mb-5">
			<div className="row signup align-items-center justify-content-center d-flex">
				<div className="col d-xl-block d-none ">
					<img src={signupImage} className="w-100 signup-image" />
				</div>

				<div className="col justify-content-center d-flex">
					<div className="mt-5 mb-5">
						<h1 className="fw-bolder"> Create an Account</h1>
						<form
							className="form signup-form"
							method="post"
							onSubmit={handleSubmit}
						>
							<h5>Enter your Details Below</h5>
							{/* Name input */}

							<input
								type="text"
								name="username"
								className="mt-5 name-input inputs"
								ref={username}
								required
							/>
							<label className="name-label">Name</label>
							<small className="text-danger d-block">
								{errors?.name}
							</small>
							{/* Email input */}
							<input
								type="text"
								name="email"
								className="mt-5 email-input inputs"
								ref={email}
								required
							/>
							<label className="email-label">Email</label>
							<small className="text-danger d-block">
								{errors?.email}
							</small>

							{/* Password input */}
							<input
								type="password"
								name="password"
								className="mt-4 pass-input inputs"
								ref={password}
								required
							/>
							<label className="pass-label">Password</label>
							<small className="text-danger d-block">
								{errors?.password}
							</small>
							{/* Confirm Password input */}
							<input
								type="password"
								name="confirmPassword"
								className="mt-5 confirmpass-input inputs"
								ref={confirmPassword}
								required
							/>
							<label className="confirmpass-label">
								Confirm Password
							</label>
							<small className="text-danger d-block">
								{errors?.confirmPassword}
							</small>
							{/* Address one input */}
							<input
								type="text"
								name="address1"
								className="mt-4 address1-input inputs"
								ref={address1}
								required
							/>
							<label className="address1-label">
								Address One
							</label>
							<small className="text-danger d-block">
								{errors?.address1}
							</small>
							{/* Address two input */}
							<input
								type="text"
								name="address2"
								className="mt-4 address2-input inputs"
								onChange={(e) => setAddress2(e.target.value)}
							/>
							<label
								className={`address2-label ${
									address2 ? "active" : ""
								}`}
							>
								Address Two
							</label>

							{/* Phone number input */}
							<input
								type="tel"
								name="phoneNumber"
								className="mt-5 phonenumber-input inputs"
								ref={phoneNumber}
								required
							/>
							<label className="phonenumber-label">
								Phone Number
							</label>
							<small className="text-danger d-block">
								{errors?.phone_number}
							</small>

							{/* Age input */}
							<input
								type="number"
								name="age"
								className="mt-4 age-input inputs"
								ref={age}
								required
							/>
							<label className="age-label">Age</label>
							<small className="text-danger d-block">
								{errors?.age}
							</small>

							{/* Gender input */}
							<label className="mt-4 text-secondary">
								Gender
							</label>
							<div className="d-flex">
								<div className="form-check mt-2 me-4">
									<input
										className="form-check-input male-input shadow"
										type="radio"
										name="gender"
										value="male"
										ref={MaleChecked}
									/>
									<label className="form-check-label male-label">
										Male
									</label>
								</div>
								<div className="form-check mt-2 ">
									<input
										className="form-check-input female-input shadow"
										type="radio"
										name="gender"
										value="female"
										ref={FemaleChecked}
									/>
									<label className="form-check-label female-label">
										Female
									</label>
								</div>
							</div>
							<small className="text-danger d-block">
								{errors?.gender}
							</small>

							<button
								className="btn btn-danger mt-4 w-100"
								type="submit"
							>
								Create Account
							</button>
							<br />
						</form>
						<button className="btn btn-light border mt-2 w-100 ">
							<img src={googleLogo} /> Sign Up with Google
						</button>
						<h6 className="text-secondary mt-4">
							Already have account?{" "}
							<a
								href="/Metromart/login"
								className="text-secondary"
							>
								{" "}
								Log in
							</a>
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
}
export default SignUp;
