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
import Cart from "./Components/Cart";

function App() {
    const { user } = useAuth();
    const userIsFound = user ?? false;

    return (
        <>
            <NavbarComponent isLogin={userIsFound} />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route
                    path="/wishlist/"
                    element={userIsFound ? <WishList /> : <RedirectToLogin />}
                />

                <Route path="/aboutUs/" element={<AboutUs />} />
                <Route
                    path="/login/"
                    element={
                        !userIsFound ? <Login /> : <Navigate to={"/"} replace />
                    }
                />
                <Route
                    path="/signup/"
                    element={
                        !userIsFound ? (
                            <Signup />
                        ) : (
                            <Navigate to={"/"} replace />
                        )
                    }
                />
                <Route
                    path="/accountDetails/"
                    element={
                        userIsFound ? <AccountDetails /> : <RedirectToLogin />
                    }
                />
                <Route
                    path="/billingDetails/"
                    element={
                        userIsFound ? <BillingDetails /> : <RedirectToLogin />
                    }
                />

                <Route
                    path="/productDetails/:id"
                    element={<ProductDetails />}
                />
                <Route
                    path="/SearchForProducts/:key"
                    element={<SearchForProducts />}></Route>
                <Route
                    path="/Cart"
                    element={
                        userIsFound ? <Cart /> : <RedirectToLogin />
                    }></Route>

                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
