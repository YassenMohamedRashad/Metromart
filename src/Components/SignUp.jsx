import "../assets/css/signup.css";
import signupImage from "../assets/images/signup.svg";
import googleLogo from "../assets/images/google-icon.svg";

function Login() {
	return (
		<div className="container ">
			<div className="row signup align-items-center">
				<div className="col d-lg-block d-none">
					<img src={signupImage} className="w-100" alt='' />
				</div>

				<div className="col justify-content-center d-flex">
					<div className="mt-5 mb-5">
						<h2 className="fw-bolder">	Create an account</h2>
						<form action="post" className="form signup-form " >
							<h6>Enter your details below</h6>
							<input type="text" name="name" className="mt-5 name-input" required />
							<label className="name-label">Name</label>
							<br />
							<input type="text" name="email" className="mt-5 email-input" required />
							<label className="email-label">Email or Phone Number</label>
							<br />
							<input type="password" name="password" className="mt-5 pass-input" required />
							<label className="pass-label">Password</label>
							<br />
							<button className="btn btn-danger mt-4 " type="submit" style={{ width: 386, height: 50 }}>Create Account</button>
							<br />
						</form>
						<button className="btn btn-light border mt-2 " style={{ width: 386, height: 50 }}><img src={googleLogo} /> Sign Up with Google</button>
						<h6 className="text-secondary mt-4">Aleardy have account? <a href="/Metromart/login" className="text-secondary" > Log in</a></h6>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Login;