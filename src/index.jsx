import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Nav from "./Components/Navbar";	
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import AccountDetails from "./Components/AccountDetails";
import WishList from "./Components/Wishlist";
import BillingDetails from "./Components/BillingDetails";
import FirstSection from "./Components/FirstSection";
import ProductDetails from "./Components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/nav.css";


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
				<Route path="/Metromart/billingdetails" element={ <BillingDetails /> } />
				<Route path="/Metromart/firstsection" element={ <FirstSection /> } />
				<Route path="/Metromart/productsDetails" element={ <ProductDetails /> } />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);