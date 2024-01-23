/* dependencies */
import axios from "axios";
import { isEmpty } from "lodash";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, Fail, Success } from "./SweetAlert";
import { useAuth } from "../Hooks/useAuth";
/* assets */
import loginImage from "../assets/images/login.svg";
import "../assets/css/login.css";

function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { dispatch } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		Loader();
		const data = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		console.log(data);
		// email validation
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (isEmpty(data.email) || !emailRegex.test(data.email)) {
			Fail("Valid Email is Required");
		} else if (isEmpty(data.password)) Fail("Password is Required");
		else {
			axios
				.post("http://localhost:5011/user/login", data)
				.then((response) => {
					Success(
						"<i>You Have Logged In Successfully. 👌</i>",
						`/Metromart/`,
						navigate
					);
					const { data, token } = response.data;
					localStorage.clear();
					localStorage.setItem("user", JSON.stringify(data));
					localStorage.setItem("user_token", token);
					dispatch({
						type: "Login",
						payload: [
							JSON.parse(localStorage.getItem("user")),
							localStorage.getItem("user_token"),
							null, // Change this line to pass an empty array instead of [null]
						],
					});
				})
				.catch((error) => {
					Fail("Wrong Email Or Password!");
				});
		}
	};
	return (
		<div className="container">
			<div className="row align-items-center login">
				<div className="col d-none d-lg-block">
					<img src={loginImage} alt="" />
				</div>
				<div className="col justify-content-center d-flex">
					<div className="mt-5 mb-5">
						<h1>Log in to Metromart</h1>
						<form
							method="post"
							className="form login-form"
							onSubmit={handleSubmit}
							noValidate
						>
							<h6>Enter your details below</h6>
							<input
								type="text"
								name="email"
								ref={emailRef}
								className="mt-5 email-input"
								required
							/>
							<br />
							<label className="email-label">Email</label>
							<input
								type="password"
								name="password"
								ref={passwordRef}
								className="mt-4 pass-input"
								required
							/>
							<label className="pass-label">Password</label>
							<button
								className="btn btn-danger mt-4 w-50 mb-3"
								type="submit"
								style={{ height: 50 }}
							>
								Login
							</button>
							<br />
							<a
								href="#"
								className="text-danger text-decoration-none mt-5 "
							>
								Forget Password?
							</a>
							<h6 className="text-danger mt-2">
								Don't have account?
								<a
									href="/Metromart/signup"
									className="text-danger p-1"
								>
									Create account
								</a>
							</h6>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Login;
