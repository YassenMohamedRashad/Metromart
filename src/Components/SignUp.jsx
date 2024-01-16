/* dependencies */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, Fail, Success, Close } from "./SweetAlert";
/* assets */
import "../assets/css/signup.css";
import signupImage from "../assets/images/signup.svg";
import googleLogo from "../assets/images/google-icon.svg";

function SignUp({ handleUserData, handleToken }) {
	const navigate = useNavigate();
	/* setting the states of the app */
	const [formErrors, setFormErrors] = useState({});
	const [loading, setLoading] = useState(true);
	/* input fields values */
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		address1: "",
		address2: "",
		phoneNumber: "",
		age: "",
		gender: "",
	});

	const [MaleChecked, setMaleChecked] = useState(false);
	const [FemaleChecked, setFemaleChecked] = useState(false);

	/* handling changes */
	const handleChange = (e) => {
		/* Updates the formData based on the user's input in the form fields. */
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let errors = {};
		setLoading((prev) => !prev);
		// password validation
		/* regex explanation:
		^: Start of the string, 
		(?=.*[a-z]): at least one lowercase, 
		(?=.*[A-Z]): at least one uppercase, 
		(?=.*\d): at least one digit, 
		(?=.*[^a-zA-Z\d\s]): at least one symbol, 
		(?!.*\s): no whitespace allowed,
		.{8,}: at least 8 chars long, 
		$: End of string
		*/
		const strongPassRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])(?!.*\s).{8,}$/;

		if (!strongPassRegex.test(formData.password))
			errors.password = "Weak Password";
		else delete errors.password;
		if (formData.password !== formData.confirmPassword)
			errors.password = "Passwords don't match";
		else delete errors.password;

		// email validation
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(formData.email))
			errors.email = "Enter a Valid Email";
		else delete errors.email;

		// phoneNumber validation
		const phoneNumberRegex = /^01[0125]\d{8}$/g;
		if (!phoneNumberRegex.test(formData.phoneNumber))
			errors.phoneNumber = "Enter a Valid Phone Number";
		else delete errors.phoneNumber;

		// age validation
		if (formData.age < 18 || formData.age > 100)
			errors.age = "Enter a Valid Age";
		else delete errors.age;

		// Update formErrors state with all errors at once
		setFormErrors(errors);
		if (Object.keys(errors).length === 0) {
			if (loading) Loader();
			const userData = {
				name: formData.username,
				email: formData.email,
				password: formData.password,
				address1: formData.address1,
				address2: formData.address1,
				phone_number: formData.phoneNumber,
				gender: formData.gender,
				age: formData.age,
			};

			/* Send a POST Request To create a New User */
			try {
				const response = await axios.post(
					"http://localhost:5011/user/signup",
					userData
				);

				// Assuming the response data has a status property indicating success
				if (response.data.status === "success") {
					setFormErrors({});
					console.log("then=>", response.data.status);
					/* clear out the form */
					setFormData({
						username: "",
						email: "",
						password: "",
						confirmPassword: "",
						address1: "",
						address2: "",
						phoneNumber: "",
						age: "",
						gender: "",
					});
					setFemaleChecked(false);
					setMaleChecked(false);
					/* store user's data */
					localStorage.setItem(
						"user",
						JSON.stringify({ ...userData })
					);
					localStorage.setItem(
						"user_token",
						response.data.data.user_token
					);
					const storedUser = JSON.parse(localStorage.getItem("user"));
					handleUserData(storedUser);
					handleToken(localStorage.token);
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
					setFormData((prevState) => ({
						...prevState,
						password: "",
						confirmPassword: "",
					}));
				}
			} catch (error) {
				// Handle network errors or other issues
				console.log("Error: ", error);
			}
		} else {
			setLoading((prev) => !prev);
			Close();
		}
	};

	return (
		<div className="container mb-5">
			<div className="row signup align-items-center justify-content-center d-flex">
				<div className="col d-xl-block d-none ">
					<img
						src={signupImage}
						className="w-100 signup-image"
						alt=""
					/>
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
								value={formData.username}
								required
								onChange={handleChange}
							/>
							<label className="name-label">Name</label>
							<br />

							{/* Email input */}
							<input
								type="text"
								name="email"
								value={formData.email}
								className="mt-5 email-input inputs"
								required
								onChange={handleChange}
							/>
							<label className="email-label">Email</label>
							<br />
							<small className="text-danger mt-2">
								{formErrors.email}
							</small>
							<br />

							{/* Password input */}
							<input
								type="password"
								name="password"
								className="mt-4 pass-input inputs"
								required
								value={formData.password}
								onChange={handleChange}
							/>
							<label className="pass-label">Password</label>
							<br />

							{/* Confirm Password input */}
							<input
								type="password"
								name="confirmPassword"
								className="mt-5 confirmpass-input inputs"
								required
								value={formData.confirmPassword}
								onChange={handleChange}
							/>
							<label className="confirmpass-label">
								Confirm Password
							</label>
							<br />
							<small className="text-danger mt-2">
								{formErrors.password}
							</small>
							<br />

							{/* Address one input */}
							<input
								type="text"
								name="address1"
								className="mt-4 address1-input inputs"
								required
								value={formData.address1}
								onChange={handleChange}
							/>
							<label className="address1-label">
								Address One
							</label>
							<br />

							{/* Address two input */}
							<input
								ype="text"
								name="address2"
								className="mt-4 address2-input inputs"
								value={formData.address2}
								onChange={handleChange}
							/>
							<label
								className={`address2-label ${
									formData.address2 ? "active" : ""
								}`}
							>
								Address Two
							</label>
							<br />

							{/* Phone number input */}
							<input
								type="tel"
								name="phoneNumber"
								className="mt-5 phonenumber-input inputs"
								required
								value={formData.phoneNumber}
								onChange={handleChange}
							/>
							<label className="phonenumber-label">
								Phone Number
							</label>
							<br />
							<small className="text-danger mt-2">
								{formErrors.phoneNumber}
							</small>
							<br />

							{/* Age input */}
							<input
								type="number"
								name="age"
								className="mt-4 age-input inputs"
								required
								value={formData.age}
								onChange={handleChange}
							/>
							<label className="age-label">Age</label>
							<small className="text-danger mt-2 d-block">
								{formErrors.age}
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
										value={"male"}
										checked={MaleChecked}
										onChange={handleChange}
										onClick={() => {
											setMaleChecked(true);
											setFemaleChecked(false);
										}}
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
										value={"female"}
										checked={FemaleChecked}
										onChange={handleChange}
										onClick={() => {
											setMaleChecked(false);
											setFemaleChecked(true);
										}}
									/>
									<label className="form-check-label female-label">
										Female
									</label>
								</div>
							</div>

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
