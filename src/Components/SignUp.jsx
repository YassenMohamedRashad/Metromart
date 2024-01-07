import "../assets/css/signup.css";
import signupImage from "../assets/images/signup.svg";
import googleLogo from "../assets/images/google-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
	const [address2, setAddress2] = useState('')
	const handleChange = (e) => {
		setAddress2(e.target.value);
	}

	// Validatoin
	const [error_pass, setError_pass] = useState("")
	const [error_email, setError_email] = useState("")
	const [error_phonenumber, setError_phonenumber] = useState("")
	const handleSubmit = (e) => {
		e.preventDefault();
		// password validation
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmpassword.value;
		if (password !== confirmPassword) {
			setError_pass("Password not matched")
		} else{
			setError_pass("")
		}

		// email validation
		const email = e.target.email.value;
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) {
			setError_email("Enter Valid Email")
		} else {
			setError_email("")
		}

		// phonenumber validation
		const phoneNumber = e.target.phonenumber.value;
		const phoneNumberRegex = /^[0-9]{10}$/;
		if (!phoneNumberRegex.test(phoneNumber)) {
			setError_phonenumber("Enter Valid Phone Number")
		} else {
			setError_phonenumber("")
		}
		
	};

	return (
		<div className="container mb-5">
			<div className="row signup align-items-center justify-content-center d-flex">
				<div className="col-lg-6 d-lg-block d-none ">
					<img src={signupImage} className="w-100 signup-image" alt='' />
				</div>

				<div className="col-lg-6 justify-content-center d-flex">
					<div className="mt-5 mb-5">
						<h1 className="fw-bolder">	Create an Account</h1>
						<form action="post" className="form signup-form " onSubmit={handleSubmit}>
							<h5>Enter your Details Below</h5>
							{/* Name input */}

							<input type="text" name="name" className="mt-5 name-input inputs" required />
							<label className="name-label">Name</label>
							<br />

							{/* Email input */}
							<input type="text" name="email" className="mt-5 email-input inputs" required />
							<label className="email-label">Email</label>
							<br />
							<span className="text-danger mt-2 " style={{ marginLeft: 366 }}>{error_email}</span>
							<br />

							{/* Password input */}
							<input type="password" name="password" className="mt-4 pass-input inputs" required />
							<label className="pass-label">Password</label>
							<br />

							{/* Confirm Password input */}
							<input type="password" name="confirmpassword" className="mt-5 confirmpass-input inputs" required />
							<label className="confirmpass-label">Confirm Password</label>
							<br />
							<span className="text-danger mt-2" style={{ marginLeft: 320 }}>{error_pass}</span>
							<br />

							{/* Address one input */}
							<input type="text" name="address1" className="mt-4 address1-input inputs" required />
							<label className="address1-label">Address One</label>
							<br />

							{/* Address two input */}
							<input ype="text" name="address2" className="mt-4 address2-input inputs" onChange={handleChange} />
							<label className={`address2-label ${address2 ? 'active' : ''}`}>Address Two</label>
							<br />

							{/* Phone number input */}
							<input type="tel" name="phonenumber" className="mt-5 phonenumber-input inputs" required />
							<label className="phonenumber-label">Phone Number</label>
							<br />
							<span className="text-danger mt-2" style={{ marginLeft: 295 }}>{error_phonenumber}</span>
							<br />

							{/* Age input */}
							<input type="number" name="age" className="mt-4 age-input inputs" required />
							<label className="age-label">Age</label>
							<br />

							{/* Gender input */}
							<label className="mt-4 text-secondary">Gender</label>
							<div className="d-flex">
								<div class="form-check mt-2 me-4">
									<input class="form-check-input male-input shadow" type="radio" name="gender" value={'male'} />
									<label class="form-check-label male-label">Male</label>
								</div>
								<div class="form-check mt-2 ">
									<input class="form-check-input female-input shadow" type="radio" name="gender" value={'female'} />
									<label class="form-check-label female-label">Female</label>
								</div>
							</div>

							<button className="btn btn-danger mt-4 w-100" type="submit" style={{height: 50 }}>Create Account</button>
							<br />
						</form>
						<button className="btn btn-light border mt-2 w-100 " style={{ height: 50 }}><img src={googleLogo} /> Sign Up with Google</button>
						<h6 className="text-secondary mt-4">Aleardy have account? <a href="/Metromart/login" className="text-secondary" > Log in</a></h6>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Login;