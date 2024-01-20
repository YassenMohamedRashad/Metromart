import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { Loader, Fail, Success, Close } from "./SweetAlert";
import "../assets/css/AccountDetails.css";

function AccountDetails() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		phoneNumber: "",
		address1: "",
		address2: "",
		currentPassword: "",
		newPassword: "",
		confirmNewPassword: "",
	});
	const navigate = useNavigate();
	/* setting the states of the app */
	const [formErrors, setFormErrors] = useState({});
	const [loading, setLoading] = useState(true);
	const { dispatch, user, user_token } = useAuth();

	const handleLogout = () => {
		localStorage.clear();
		navigate("/Metromart/");
		window.location.reload();
	};
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

		const strongPassRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])(?!.*\s).{8,}$/;

		// Password validation
		if (!strongPassRegex.test(formData.currentPassword))
			errors.currentPassword = "Weak Password";
		else delete errors.currentPassword;

		// New password validation
		if (!strongPassRegex.test(formData.newPassword))
			errors.newPassword = "Weak Password";
		else if (formData.newPassword !== formData.confirmNewPassword)
			errors.newPassword = "Passwords don't match";
		else delete errors.newPassword;

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

		// Update formErrors state with all errors at once
		setFormErrors(errors);

		if (Object.keys(errors).length === 0) {
			if (loading) Loader();

			const updatedUserData = {
				...user,
				name: formData.username,
				email: formData.email,
				password: formData.currentPassword,
				new_password: formData.newPassword,
				address1: formData.address1,
				address2: formData.address2,
				phone_number: formData.phoneNumber,
			};

			try {
				const response = await axios.put(
					"http://localhost:5011/user/updateAccount", // Update this URL to the correct endpoint
					updatedUserData,
					{
						headers: {
							Authorization: `Bearer ${user_token}`,
							"Content-Type": "application/json",
						},
					}
				);

				// Assuming the response data has a status property indicating success
				if (response.data.status === "success") {
					setFormErrors({});
					Success("User data updated successfully", "/Metromart/", navigate);
					// Handle any additional logic after successful update
				} else {
					Fail("Failed to update user data");
					// Handle errors or show appropriate messages
				}
			} catch (error) {
				Fail("Error updating user data: ", error);
				// Handle network errors or other issues
			} finally {
				setLoading((prev) => !prev);
				Close();
			}
		} else {
			setLoading((prev) => !prev);
			Close();
		}
	};

	return (
		<>
			<div className="container mt-5 mb-5" style={{ marginTop: 75 }}>
				<div className="row">
					<div className="d-flex justify-content-between">
						<div>
							<a
								href="/Metromart/"
								className="text-secondary text-decoration-none"
							>
								Home
							</a>
							<span className="text-secondary me-2 ms-2">
								{" "}
								/{" "}
							</span>
							<a
								href="/Metromart/AccountDetails"
								className="text-black text-decoration-none"
							>
								My Account
							</a>
						</div>
						<div>
							<p>
								Welcome!{" "}
								<span className="text-danger">{user.name}</span>
							</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-8 manage-my-account m-auto mt-5 ">
						<form method="post" className="shadow rounded p-5">
							<div className="d-flex justify-content-between">
								<h3 className=" text-danger ">
									Edit Your Profile
								</h3>
								<a
									onClick={handleLogout}
									className="btn btn-danger"
								>
									Logout
								</a>
							</div>
							<div className="d-flex justify-content-between mt-5">
								<div>
									<label htmlFor="Name" className="fw-bold">
										Name
									</label>
									<input
										type="text"
										name="username"
										className="form-control text-black shadow-sm bg-light text-secondary border-0 mt-2  account-inputs "
										placeholder="Name"
										onChange={handleChange}
										value={formData.name || user.name}
									/>
								</div>
								<div>
									<label htmlFor="Email" className="fw-bold">
										Email
									</label>
									<small className="text-danger mt-2 d-block">
										{formErrors.email}
									</small>
									<input
										type="email"
										placeholder="Email"
										onChange={handleChange}
										value={formData.email || user.email}
										name="email"
										className="form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 account-inputs"
									/>
								</div>
							</div>
							<div className="d-flex justify-content-between mt-3">
								<div>
									<label
										htmlFor="PhoneNumber"
										className="fw-bold"
									>
										Phone Number
									</label>
									<small className="text-danger mt-2 d-block">
										{formErrors.phoneNumber}
									</small>
									<input
										type="text"
										name="phoneNumber"
										className="form-control text-black shadow-sm bg-light text-secondary border-0 mt-2 account-inputs"
										placeholder="Phone Number"
										onChange={handleChange}
										value={
											formData.phoneNumber ||
											user.phone_number
										}
									/>
								</div>
								<div>
									<label
										htmlFor="Address1"
										className="fw-bold"
									>
										Address One
									</label>
									<input
										type="text"
										placeholder="Address One"
										onChange={handleChange}
										value={
											formData.address1 || user.address1
										}
										name="address1"
										className="form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 account-inputs"
									/>
								</div>
							</div>

							<label htmlFor="Address2" className="fw-bold mt-4">
								Address Two
							</label>
							<input
								type="text"
								placeholder="Address Two"
								onChange={handleChange}
								value={formData.address2 || user.address2}
								name="address2"
								className="form-control shadow-sm text-black bg-light text-secondary border-0 mt-2 address2-input"
							/>

							<label
								htmlFor="PasswordChanges"
								className="fw-bold mt-4"
							>
								Password Changes
							</label>
							<input
								type="password"
								name="currentPassword"
								placeholder="Current Password"
								onChange={handleChange}
								value={formData.currentPassword}
								className="form-control text-black shadow-sm bg-light text-secondary border-0 mt-2"
								style={{ height: 50 }}
							/>
							<input
								type="password"
								name="newPassword"
								placeholder="New Password"
								onChange={handleChange}
								value={formData.newPassword}
								className="form-control text-black shadow-sm bg-light text-secondary border-0 mt-2"
								style={{ height: 50 }}
							/>
							<input
								type="password"
								name="confirmNewPassword"
								placeholder="Confirm New Password"
								onChange={handleChange}
								value={formData.confirmNewPassword}
								className="form-control text-black shadow-sm bg-light text-secondary border-0 mt-2"
								style={{ height: 50 }}
							/>
							<small className="text-danger mt-2 d-block">
								{formErrors.newPassword || formErrors.currentPassword}
							</small>
							<div className="d-flex justify-content-end mt-5">
								<div>
									<a className="btn me-3">Cancel</a>
									<button
										className="btn btn-danger"
										type="submit"
									>
										Save Changes
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default AccountDetails;
