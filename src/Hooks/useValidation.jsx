import { isEmpty } from "lodash";

const strongPassRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])(?!.*\s).{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegex = /^01[0125]\d{8}$/g;

export const Validator = (data) => {
	let Errors = {};
	for (const key in data) {
		if (data.hasOwnProperty(key)) {
			const element = data[key];
			if (isEmpty(element) && key !== "address2") {
				Errors[key] = `${key} is Required`;
			} else {
				switch (key) {
					case "password":
						if (!strongPassRegex.test(element)) {
							Errors[key] = `Weak Password`;
						} else if (data[key] !== data["confirmPassword"]) {
							Errors[key] = `Passwords don't match`;
						}
						break;
					case "email":
						if (!emailRegex.test(element)) {
							Errors[key] = `Valid Email is Required`;
						}
						break;
					case "phone_number":
						if (!phoneNumberRegex.test(element)) {
							Errors[key] = `Valid Phone Number is Required`;
						}
						break;
					case "age":
						if (element < 10) {
							Errors[key] = `You Must be At Least 10 Years Old`;
						}
						break;
					default:
						break;
				}
			}
		}
	}
	delete data.confirmPassword;
	// data["gender"] = data["gender"] ? "male" : "female";
	return [Errors, data];
};
