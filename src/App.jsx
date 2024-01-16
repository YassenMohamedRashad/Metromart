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

function App() {
	const { user, user_token } = useAuth();
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/Metromart/aboutUs" element={<AboutUs />} />
				<Route path={"/Metromart/"} element={<Home />} />
				<Route
					path="/Metromart/login"
					element={
						!user ? <Login /> : <Navigate to={"/Metromart/"} />
					}
				/>
				<Route
					path="/Metromart/signup"
					element={
						!user ? <Signup /> : <Navigate to={"/Metromart/"} />
					}
				/>
				<Route
					path="/Metromart/accountdetails"
					element={user ? <AccountDetails /> : <RedirectToLogin />}
				/>
				<Route
					path="/Metromart/wishlist"
					element={user ? <WishList /> : <RedirectToLogin />}
				/>
				<Route
					path="/Metromart/billingdetails"
					element={user ? <BillingDetails /> : <RedirectToLogin />}
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
