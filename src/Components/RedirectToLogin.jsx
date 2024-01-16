import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { InfoAC } from "./SweetAlert";

const RedirectToLogin = () => {
	const [shouldRedirect, setShouldRedirect] = useState(false);
	useEffect(() => {
		InfoAC("You Have To Login To Access This Page").then(() => {
			setShouldRedirect(true);
		});
	}, []);
	return shouldRedirect ? <Navigate to="/Metromart/login" /> : null;
};

export default RedirectToLogin;
