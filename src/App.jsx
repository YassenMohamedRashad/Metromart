/* dependencies */
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Hooks/useAuth";
/* components */
import NavbarComponent from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import AccountDetails from "./Components/AccountDetails";
import WishList from "./Components/Wishlist";
import BillingDetails from "./Components/BillingDetails";
import ProductDetails from "./Components/ProductDetails";
import { Home } from "./Components/Home";
import Error from "./Components/Error";
import SearchForProducts from "./Components/SearchForProducts";
import AboutUs from "./Components/Aboutus";
import RedirectToLogin from "./Components/RedirectToLogin";
import Contact from "./Components/Contact";

import Card from "./Components/utils/Card";
import Cart from "./Components/Cart";

function App() {
    const { user } = useAuth();
    const userIsFound = user ?? false;

    return (
        <>
            <NavbarComponent isLogin={userIsFound} />
            <Routes>
                <Route path={"/Metromart/"} element={<Home />} />
                <Route
                    path="/Metromart/wishlist/"
                    element={userIsFound ? <WishList /> : <RedirectToLogin />}
                />

				<Route path="/Metromart/aboutUs/" element={<AboutUs />} />
				<Route
					path="/Metromart/login/"
					element={
						!userIsFound ? (
							<Login />
						) : (
							<Navigate to={"/Metromart/"} replace/>
						)
					}
				/>
				<Route
					path="/Metromart/signup/"
					element={
						!userIsFound ? (
							<Signup />
						) : (
							<Navigate to={"/Metromart/"} replace/>
						)
					}
				/>
				<Route
					path="/Metromart/accountDetails/"
					element={
						userIsFound ? <AccountDetails /> : <RedirectToLogin />
					}
				/>
				<Route
					path="/Metromart/billingDetails/"
					element={
						userIsFound ? <BillingDetails /> : <RedirectToLogin />
					}
				/>

                <Route
                    path="/Metromart/productDetails/:id"
                    element={<ProductDetails />}
                />
                <Route
                    path="/Metromart/SearchForProducts/:key"
                    element={<SearchForProducts />}></Route>
                <Route
                    path="/Metromart/Cart"
                    element={
                        userIsFound ? <Cart /> : <RedirectToLogin />
                    }></Route>

				<Route path="/Metromart/*" element={<Error />} />
				<Route path="/Metromart/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
