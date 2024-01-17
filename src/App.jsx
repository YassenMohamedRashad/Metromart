/* dependencies */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
/* components */
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import AccountDetails from "./Components/AccountDetails";
import WishList from "./Components/Wishlist";
import BillingDetails from "./Components/BillingDetails";
import ProductDetails from "./Components/ProductDetails";
import { Home } from "./Components/Home";
import Error from "./Components/Error"
import SearchForProducts from "./Components/SearchForProducts"

function App() {
	const [userData, setUserData] = useState(null);
	const [token, setToken] = useState(null);

	const handleUserData = (data) => setUserData(data);
	const handleToken = (data) => setToken(data);
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/Metromart/" element={<Home />} />
				<Route
					path="/Metromart/login"
					element={
						<Login
							handleUserData={handleUserData}
							handleToken={handleToken}
						/>
					}
				/>
				<Route path="/Metromart/signup" element={<Signup />} />
				<Route
					path="/Metromart/accountdetails"
					element={<AccountDetails />}
				/>
				<Route path="/Metromart/wishlist" element={<WishList />} />
				<Route
					path="/Metromart/billingdetails"
					element={<BillingDetails />}
				/>

				<Route
					path="/Metromart/productDetails"
					element={<ProductDetails />}
				/>
				<Route path="/Metromart/SearchForProducts/:key" element={ <SearchForProducts /> }></Route>
				
				<Route path="/Metromart/*" element={ <Error />}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
