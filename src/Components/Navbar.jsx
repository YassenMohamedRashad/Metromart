import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import searchIcon from "../assets/images/Search_icon.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { InfoAC } from "./SweetAlert";

const CartIconStyle = {
    fontSize: "12px",
};

function NavbarComponent({ isLogin }) {
    const { wishlist } = useAuth();
    const [navBackground, setNavBackground] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        wishlist.length !== 0
            ? navigate("/Metromart/wishlist")
            : InfoAC(
                "Your Wishlist Is Empty\nLet's Fill It with some Items 😊",
                2000,
            );
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchInput.trim() !== "") {
            // Redirect to the search results page with the input value
            navigate(
                `/Metromart/SearchForProducts/${encodeURIComponent(
                    searchInput,
                )}`,
            );
        }
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 0.9 * window.innerHeight) {
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            <Navbar
                expand="lg"
                className={`bg-black navbar-dark  ${
                    navBackground || location.pathname !== "/Metromart/"
                        ? "Navbar-background-color sticky-top"
                        : "Navbar-background-transparent fixed-top"
                } p-3`}>
                <Container>
                    <Navbar.Brand href="/Metromart/" className="fw-bolder">
                        <span className="text-danger">Metro</span>Mart
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link
                                href="/Metromart/"
                                className="me-4 fw-bold">
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="/Metromart/contact/"
                                className="me-4 fw-bold">
                                Contact
                            </Nav.Link>
                            <Nav.Link
                                href="/Metromart/aboutUs/"
                                className="me-4 fw-bold">
                                About us
                            </Nav.Link>
                            {!isLogin && (
                                <Nav.Link
                                    href="/Metromart/signUp/"
                                    className="me-4 fw-bold">
                                    Sign Up
                                </Nav.Link>
                            )}
                        </Nav>
                        <Form
                            className="d-flex search-form mb-3 mb-lg-0 me-lg-3"
                            onSubmit={handleSearchSubmit}>
                            <FormControl
                                type="search"
                                placeholder="search for products"
                                aria-label="Search"
                                name="key"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <button type="submit">
                                <img src={searchIcon} alt="Search" />
                            </button>
                        </Form>
                        <div className="text-dark fs-4">
                            <NavLink
                                onClick={handleClick}
                                to="/Metromart/wishlist/">
                                <i className="bi bi-heart text-white me-2 ms-2 position-relative"></i>
                            </NavLink>
                            <NavLink to="/Metromart/cart/">
                                <i className="bi bi-cart text-white me-2 ms-2 position-relative"></i>
                            </NavLink>
                            {isLogin && (
                                <NavLink to="/Metromart/accountdetails/">
                                    <i className="bi bi-person-circle text-danger me-2 ms-2"></i>
                                </NavLink>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
