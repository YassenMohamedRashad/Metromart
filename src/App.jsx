/* dependencies */
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Hooks/useAuth";
/* components */
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import AccountDetails from "./Components/AccountDetails";
import WishList from "./Components/Wishlist";
import BillingDetails from "./Components/BillingDetails";
import ProductDetails from "./Components/ProductDetails";
import Home from "./Components/Home";
import Error from "./Components/Error";
import AboutUs from "./Components/Aboutus";
import RedirectToLogin from "./Components/RedirectToLogin";
import { useEffect } from "react";

function App() {
	const { user, user_token } = useAuth();
	const userIsFound = user ? true : false;
	// localStorage.clear();
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/Metromart/aboutUs" element={<AboutUs />} />
				<Route path={"/Metromart/"} element={<Home />} />
				<Route
					path="/Metromart/login"
					element={
						!userIsFound ? (
							<Login />
						) : (
							<Navigate to={"/Metromart/"} />
						)
					}
				/>
				<Route
					path="/Metromart/signup"
					element={
						!userIsFound ? (
							<Signup />
						) : (
							<Navigate to={"/Metromart/"} />
						)
					}
				/>
				<Route
					path="/Metromart/accountdetails"
					element={
						userIsFound ? <AccountDetails /> : <RedirectToLogin />
					}
				/>
				<Route
					path="/Metromart/wishlist/"
					element={userIsFound ? <WishList /> : <RedirectToLogin />}
				/>
				<Route
					path="/Metromart/billingdetails"
					element={
						userIsFound ? <BillingDetails /> : <RedirectToLogin />
					}
				/>
				<Route
					path="/Metromart/productDetails"
					element={<ProductDetails />}
				/>
				<Route path="/Metromart/*" element={<Error />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
