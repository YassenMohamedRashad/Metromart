import "../assets/css/login.css";
import loginImage from "../assets/images/login.svg";

function Login() {
	return (
		<div className="container">
			<div className="row align-items-center login">
				<div className="col d-none d-lg-block">
					<img src={loginImage} alt='' />
				</div>
<<<<<<< HEAD
				<div className="col-12 p-5 p-lg-0 col-lg-6 col-md-7 align-self-center">
					<h2 className="fw-bolder">Log in to Exclusive</h2>
					<form action="post" className="form login-form">
						<h6>Enter your details below</h6>
						<input type="text" name="email" className="mt-5 email-input w-100" required/>
						<label className="email-label">Email or Phone Number</label>
						<br />
						<input type="password" name="password" className="mt-5 pass-input w-100" required/>
						<label className="pass-label">Password</label>
						<br />
						<button className="btn btn-danger mt-4 w-50 mb-3" type="submit" style={{height:50}}>Login</button>
						<br />
						<a href="#" className="text-danger text-decoration-none mt-5 " >Forget Password?</a>
						<h6 className="text-danger mt-2" >Don&lsquo;t have account? <a href="/Metromart/signup" className="text-danger" > Create account</a></h6>
					</form>
=======
				<div className="col justify-content-center d-flex">
					<div className="mt-5 mb-5">
						<h1>Log in to Exclusive</h1>
						<form action="post" className="form login-form">
							<h6>Enter your details below</h6>
							<input type="text" name="email" className="mt-5 email-input" required />
							<label className="email-label">Email or Phone Number</label>
							<br />
							<input type="password" name="password" className="mt-5 pass-input" required />
							<label className="pass-label">Password</label>
							<br />
							<button className="btn btn-danger mt-4 w-50 mb-3" type="submit" style={{ height: 50 }}>Login</button>
							<br />
							<a href="#" className="text-danger text-decoration-none mt-5 " >Forget Password?</a>
							<h6 className="text-danger mt-2" >Don&lsquo;t have account? <a href="/Metromart/signup" className="text-danger" > Create account</a></h6>
						</form>
					</div>
>>>>>>> Hyman
				</div>
			</div>
		</div>
	);
}
export default Login;
