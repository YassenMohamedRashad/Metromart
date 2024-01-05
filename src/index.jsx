/* libraries and modules imports */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* components imports */
import App from "./App";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import AccountDetails from "./Components/AccountDetails";
import ProductDetails from "./Components/productDetails.jsx";
/* css files imports */
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/nav.css";
import "./assets/css/footer.css";
import "./assets/css/ProductDetails.css";
import "./assets/css/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />

			<Routes>
				<Route path="/Metromart/" element={<App />} />
				<Route path="/Metromart/signup" element={<Signup />} />
				<Route path="/Metromart/login" element={<Login />} />
				<Route
					path="/Metromart/accountDetails"
					element={<AccountDetails />}
				/>
				<Route path="/Metromart/productDetails" element={<ProductDetails />} />
				<Route path="/Metromart/wishlist" element={<WishList />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
