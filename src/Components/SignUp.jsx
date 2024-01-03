import "../assets/css/signup.css";
import signupImage from "../assets/images/signup.svg";
import googleLogo from "../assets/images/google-icon.svg";

function Login() {
	return (
		<>
			<div className="row signup">
				<div className="col-lg-6 col-md-5">
					<img src={signupImage} alt=''/>
				</div>
				<div className="col-lg-6 col-md-7 align-self-center">
					<h1 style={{marginLeft:150}}>Create an account</h1>
					<form action="post" className="form signup-form"  style={{marginLeft:150}}>
						<h6>Enter your details below</h6>
                        <input type="text" name="name" className="mt-5 name-input" required/>
						<label className="name-label">Name</label>
						<br />
						<input type="text" name="email" className="mt-5 email-input" required/>
						<label className="email-label">Email or Phone Number</label>
						<br />
						<input type="password" name="password" className="mt-5 pass-input" required/>
						<label className="pass-label">Password</label>
						<br />
						<button className="btn btn-danger mt-4 " type="submit" style={{width:386,height:50}}>Create Account</button>
						<br />
					</form>
					<button className="btn btn-light border mt-2 " style={{width:386,height:50,marginLeft:150}}><img src={googleLogo} /> Sign Up with Google</button>
					<h6 className="text-secondary mt-4" style={{marginLeft:240}}>Aleardy have account? <a href="/e-commerce/login" className="text-secondary" > Log in</a></h6>
				</div>
			</div>
		</>
	);
}
export default Login;
	