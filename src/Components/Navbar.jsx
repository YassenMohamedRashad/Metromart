import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import searchIcon from "../assets/images/Search_icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { InfoAC } from "./SweetAlert";
import { Cart as CartIcon, PersonCircle, Heart } from "react-bootstrap-icons";

function NavbarComponent({ isLogin }) {
	const { wishlist, user } = useAuth();
	const [navBackground, setNavBackground] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const [searchInput, setSearchInput] = useState("");

	const handleClick = (e) => {
		e.preventDefault();
		if (user && wishlist.length === 0) {
			InfoAC(
				"Your Wishlist Is Empty\nLet's Fill It with some Items 😊",
				2000,
			);
		} else navigate("/wishlist");
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchInput.trim() !== "") {
			// Redirect to the search results page with the input value
			navigate(`/SearchForProducts/${encodeURIComponent(searchInput)}`);
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
					navBackground || location.pathname !== "/"
						? "Navbar-background-color sticky-top"
						: "Navbar-background-transparent fixed-top"
				} p-3`}>
				<Container>
					<Navbar.Brand href="/" className="fw-bolder">
						<span className="text-danger">Metro</span>Mart
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<Link to="/" className="me-4 fw-bold nav-link">
								Home
							</Link>
							
                            <Link
								to="/contact/"
								className="me-4 fw-bold nav-link">
								Contact
							</Link>

                            <Link
								to="/aboutUs/"
								className="me-4 fw-bold nav-link">
								About us
							</Link>

							{!isLogin && (
								<Link
									to="/login/"
									className="me-4 fw-bold nav-link">
                                    Login
								</Link>
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
						<div className="text-dark fs-4 d-flex">
							<Link
								onClick={handleClick}
								to="/wishlist/"
							className="position-relative me-2 ms-2">
                                <Heart className="bi text-white" />
							</Link>
							
                            <Link
                                to="/cart/"
                                className="position-relative me-2 ms-2">
                                <CartIcon className="bi text-white" />
							</Link>

							{isLogin && (
								<Link
                                    to="/accountdetails/"
                                    className="me-2 ms-2">
									<PersonCircle className="bi text-danger" />
								</Link>
							)}
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
