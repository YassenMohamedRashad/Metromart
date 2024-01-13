import "../assets/css/signup.css";
import signupImage from "../assets/images/signup.svg";
import googleLogo from "../assets/images/google-icon.svg";
import { useState } from "react";
import axios from "axios";
function SignUp() {
	/* setting the states of the app */
	const [MaleChecked, setMaleChecked] = useState(false);
	const [FemaleChecked, setFemaleChecked] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	/* input fields values */
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [address1, setAddress1] = useState("");
	const [address2, setAddress2] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");

	/* handling changes */
	const handleChange = (e) => {
		/* Updates the state variables based on the user's input in the form fields. */
		const { name, value } = e.target;
		const updateStateVariable = (setter) => setter(value);
		const stateVariableMap = {
			username: setUsername,
			email: setEmail,
			password: setPassword,
			confirmPassword: setConfirmPassword,
			address1: setAddress1,
			address2: setAddress2,
			phoneNumber: setPhoneNumber,
			age: setAge,
			gender: setGender,
		};
		const setter = stateVariableMap[name];
		if (setter) updateStateVariable(setter);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let errors = {};

		// password validation
		/* regex explanation:
		^: Start of the string, 
		(?=.*[a-z]): at least one lowercase, 
		(?=.*[A-Z]): at least one uppercase, 
		(?=.*\d): at least one digit, 
		(?=.*[@$!%*?&]): at least one symbol, 
		[A-Za-z\d@$!%*?&]: Match any upper, lower, digit, or symbol, 
		{8,}: at least 8 chars long, 
		$: End of string
		*/
		const strongPassRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

		if (!strongPassRegex.test(password)) errors.password = "Weak Password";
		if (password !== confirmPassword)
			errors.password = "Passwords don't match";

		// email validation
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) errors.email = "Enter a Valid Email";

		// phoneNumber validation
		const phoneNumberRegex = /^01[0125]\d{8}$/g;
		if (!phoneNumberRegex.test(phoneNumber))
			errors.phoneNumber = "Enter a Valid Phone Number";

		// age validation
		if (age < 1 || age > 100) errors.age = "Enter a Valid Age";

		// Update formErrors state with all errors at once
		setFormErrors(errors);
		if (Object.keys(errors).length === 0) {
			const userData = {
				name: username,
				email: email,
				password: password,
				address1: address1,
				address2: address1,
				phone_number: phoneNumber,
				gender: gender,
				age: age,
			};

			/* Send a POST Request To create a New User */
			const request = await axios
				.post("http://localhost:5011/user/signup", userData)
				.then((response) => {
					errors = {};
					console.log(response.data.status);
					if (response.data.status === "success") {
						setGender("");
						setAge("");
						setAddress1("");
						setAddress2("");
						setUsername("");
						setEmail("");
						setPassword("");
						setConfirmPassword("");
						setPhoneNumber("");
						setFemaleChecked(false);
						setMaleChecked(false);
					}
				})
				.catch((error) => {
					console.log(error.response.data.status);
					// The request was made and the server responded with an error
					if (error.response.data.status === "fail") {
						errors.email = "Email Is Already Taken";
						setFormErrors(errors);
						setPassword("");
						setConfirmPassword("");
					}
				});
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
								value={username}
								required
								onChange={handleChange}
							/>
							<label className="name-label">Name</label>
							<br />

							{/* Email input */}
							<input
								type="text"
								name="email"
								value={email}
								className="mt-5 email-input inputs"
								required
								onChange={handleChange}
							/>
							<label className="email-label">Email</label>
							<br />
							<span
								className="text-danger mt-2 "
								style={{ marginLeft: 366 }}
							>
								{formErrors.email}
							</span>
							<br />

							{/* Password input */}
							<input
								type="password"
								name="password"
								className="mt-4 pass-input inputs"
								required
								value={password}
								onChange={handleChange}
							/>
							<label className="pass-label">Password</label>
							<br />
							<span className="text-danger mt-2" style={{ marginLeft: 320 }}>{error_strongPass}</span>
							<br />

							{/* Confirm Password input */}
							<input
								type="password"
								name="confirmPassword"
								className="mt-5 confirmpass-input inputs"
								required
								value={confirmPassword}
								onChange={handleChange}
							/>
							<label className="confirmpass-label">
								Confirm Password
							</label>
							<br />
							<span
								className="text-danger mt-2"
								style={{ marginLeft: 320 }}
							>
								{formErrors.password}
							</span>
							<br />

							{/* Address one input */}
							<input
								type="text"
								name="address1"
								className="mt-4 address1-input inputs"
								required
								value={address1}
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
								value={address2}
								onChange={handleChange}
							/>
							<label
								className={`address2-label ${
									address2 ? "active" : ""
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
								value={phoneNumber}
								onChange={handleChange}
							/>
							<label className="phonenumber-label">
								Phone Number
							</label>
							<br />
							<span
								className="text-danger mt-2"
								style={{ marginLeft: 295 }}
							>
								{formErrors.phoneNumber}
							</span>
							<br />

							{/* Age input */}
							<input
								type="number"
								name="age"
								className="mt-4 age-input inputs"
								required
								value={age}
								onChange={handleChange}
							/>
							<label className="age-label">Age</label>
							<span
								className="text-danger mt-2 d-block"
								style={{ marginLeft: 366 }}
							>
								{formErrors.age}
							</span>

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
								style={{ height: 50 }}
							>
								Create Account
							</button>
							<br />
						</form>
						<button
							className="btn btn-light border mt-2 w-100 "
							style={{ height: 50 }}
						>
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
