/* libraries and modules imports */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* components imports */
import App from "./App";
import Nav from "./Components/Navbar";
import Footer from "./Components/footer.jsx";
import Login from "./Components/Login";
/* css files imports */
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/nav.css";
import "./assets/css/footer.css";
import "./assets/css/ProductDetails.css";
import "./assets/css/App.css";
import ProductDetails from "./Components/productDetails.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />

			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/product" element={<ProductDetails />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
