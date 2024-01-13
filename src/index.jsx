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
import WishList from "./Components/Wishlist";
import BillingDetails from "./Components/BillingDetails";
import Error from "./Components/Error";
import Aboutus from "./Components/Aboutus";
import "../src/assets/css/Aboutus.css"


const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/Metromart/" element={ <App /> } />
				<Route path="/Metromart/login" element={ <Login /> } />
				<Route path="/Metromart/signup" element={ <Signup /> } />
				<Route path="/Metromart/accountdetails" element={ <AccountDetails /> } />
				<Route path="/Metromart/wishlist" element={ <WishList /> } />
				<Route path="/Metromart/billingdetails" element={ <BillingDetails/> } />
				<Route path="/Metromart/error" element={ <Error/> } />
				<Route path="/Metromart/aboutus" element={ <Aboutus/> } />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);