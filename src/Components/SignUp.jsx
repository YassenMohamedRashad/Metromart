import "../assets/css/signup.css";
import signupImage from "../assets/images/signup.svg";
import googleLogo from "../assets/images/google-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
// const link = "https://tryingtodeploy-rton.onrender.com/";
function SignUp() {
	/* Requests to the backend */
	// const get = async () => {
	// 	const res = await axios.get("http://localhost:5011");
	// 	console.log(res.data);
	// };
	/* updating the state of the component */
	// useEffect(() => {
	// 	get();
	// }, []);
	/* setting the states of the app */
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
		/**
		 * Updates the state variables based on the user's input in the form fields.
		 * @param {Object} e - The event object triggered by the user's input.
		 */
		const { name, value } = e.target;
		const updateStateVariable = (setter) => setter(value);
		const stateVariableMap = {
			gender: setGender,
			age: setAge,
			address1: setAddress1,
			address2: setAddress2,
			username: setUsername,
			email: setEmail,
			password: setPassword,
			confirmPassword: setConfirmPassword,
			phoneNumber: setPhoneNumber,
		};
		const setter = stateVariableMap[name];
		if (setter) {
			updateStateVariable(setter);
			console.log(name, value);
		}
	};

	// Validation
	const [error_pass, setError_pass] = useState(false);
	const [error_email, setError_email] = useState(false);
	const [error_phonenumber, setError_phonenumber] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// password validation
		if (password != confirmPassword) {
			setError_pass("Passwords don't match");
		} else {
			setError_pass(false);
		}

		// email validation
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) {
			setError_email("Enter a Valid Email");
		} else {
			setError_email(false);
		}

		// phonenumber validation
		const phoneNumberRegex = /^0\d{10}$/g;
		if (!phoneNumberRegex.test(phoneNumber)) {
			setError_phonenumber("Enter a Valid Phone Number");
		} else {
			setError_phonenumber(false);
		}
		if (!error_pass && !error_email && !error_phonenumber) {
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
			console.log(userData);
			// Send a POST request to your API endpoint
			const res = await axios.post(
				"http://localhost:5011/user/signup",
				userData
			);
			if (res.data === "ERROR: this email is exists") {
				throw new Error("duplicated Entry");
			}
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
								required
								onChange={handleChange}
							/>
							<label className="name-label">Name</label>
							<br />

							{/* Email input */}
							<input
								type="text"
								name="email"
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
								{error_email}
							</span>
							<br />

							{/* Password input */}
							<input
								type="password"
								name="password"
								className="mt-4 pass-input inputs"
								required
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
								{error_pass}
							</span>
							<br />

							{/* Address one input */}
							<input
								type="text"
								name="address1"
								className="mt-4 address1-input inputs"
								required
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
								{error_phonenumber}
							</span>
							<br />

							{/* Age input */}
							<input
								type="number"
								name="age"
								className="mt-4 age-input inputs"
								required
								onChange={handleChange}
							/>
							<label className="age-label">Age</label>
							<br />

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
										onChange={handleChange}
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
										onChange={handleChange}
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
