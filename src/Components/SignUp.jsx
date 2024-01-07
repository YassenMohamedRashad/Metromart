import "../assets/css/signup.css";
import signupImage from "../assets/images/signup.svg";
import googleLogo from "../assets/images/google-icon.svg";
import { useState } from "react";

function Login() {
	const [address2, setAddress2] = useState('')

	const handleChange = (e) => {
		setAddress2(e.target.value);
	}
	
	return (
		<div className="container mb-5">
			<div className="row signup align-items-center justify-content-center d-flex">
				<div className="col-lg-6 d-lg-block d-none ">
					<img src={signupImage} className="w-100 signup-image" alt='' />
				</div>

				<div className="col-lg-6 justify-content-center d-flex">
					<div className="mt-5 mb-5">
						<h1 className="fw-bolder">	Create an Account</h1>
						<form action="post" className="form signup-form " >
							<h5>Enter your Details Below</h5>
							{/* Name input */}

							<input type="text" name="name" className="mt-5 name-input inputs" required />
							<label className="name-label">Name</label>
							<br />

							{/* Email input */}
							<input type="text" name="email" className="mt-5 email-input inputs" required />
							<label className="email-label">Email or Phone Number</label>
							<br />

							{/* Password input */}
							<input type="password" name="password" className="mt-5 pass-input inputs" required />
							<label className="pass-label">Password</label>
							<br />

							{/* Confirm Password input */}
							<input type="password" name="confirmpassword" className="mt-5 confirmpass-input inputs" required />
							<label className="confirmpass-label">Confirm Password</label>
							<br />

							{/* Address one input */}
							<input type="text" name="address1" className="mt-5 address1-input inputs" required />
							<label className="address1-label">Address One</label>
							<br />

							{/* Address two input */}
							<input ype="text" name="address2" className="mt-5 address2-input inputs" onChange={handleChange} />
							<label className={`address2-label ${address2 ? 'active' : ''}`}>Address Two</label>
							<br />

							{/* Phone number input */}
							<input type="tel" name="phonenumber" className="mt-5 phonenumber-input inputs" required />
							<label className="phonenumber-label">Phone Number</label>
							<br />

							{/* Age input */}
							<input type="number" name="age" className="mt-5 age-input inputs" required />
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