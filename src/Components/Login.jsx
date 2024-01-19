/* dependencies */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, Fail, Success } from "./SweetAlert";
import { useAuth } from "../Hooks/useAuth";
/* assets */
import loginImage from "../assets/images/login.svg";
import "../assets/css/login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const { dispatch } = useAuth();

	/* handling changes */
	const handleChange = (e) => {
		/* Updates the state variables based on the user's input in the form fields. */
		const { name, value } = e.target;
		const updateStateVariable = (setter) => setter(value);
		const stateVariableMap = {
			email: setEmail,
			password: setPassword,
		};
		const setter = stateVariableMap[name];
		if (setter) updateStateVariable(setter);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (loading) Loader();
		let errors = {};

		// email validation
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) errors.email = "Enter a Valid Email";
		else delete errors.email;

		if (Object.keys(errors).length === 0) {
			const data = {
				email: email,
				password: password,
			};
			axios
				.post("http://localhost:5011/user/login", data)
				.then((response) => {
					setLoading((prev) => !prev);
					Success(
						"<i>You Have Logged In Successfully. 👌</i>",
						`/Metromart/`,
						navigate
					);
					const { data, token } = response.data;
					localStorage.clear();
					localStorage.setItem("user", JSON.stringify(data));
					localStorage.setItem("user_token", token);
					localStorage.setItem(
						"wishlist",
						JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
					);
					dispatch({
						type: "Login",
						payload: [
							JSON.parse(localStorage.getItem("user")),
							localStorage.getItem("user_token"),
							JSON.stringify(localStorage.getItem("wishlist")),
						],
					});
				})
				.catch((error) => {
					setLoading((prev) => !prev);
					Fail("Wrong Email Or Password!");
					console.log(error);
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
						>
							<h6>Enter your details below</h6>
							<input
								type="email"
								name="email"
								value={email}
								className="mt-5 email-input"
								onChange={handleChange}
								required
							/>
							<label className="email-label">Email</label>
							<br />

							<input
								type="password"
								name="password"
								value={password}
								className="mt-4 pass-input"
								onChange={handleChange}
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
