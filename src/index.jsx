import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import AccountDetails from "./Components/AccountDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/nav.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />

			<Routes>
				<Route path="/Metromart/" element={<App />} />
				<Route path="/Metromart/login" element={<Login />} />
				<Route path="/Metromart/signUp" element={<Signup />} />
				<Route path="/Metromart/AccountDetails" element={<AccountDetails />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
