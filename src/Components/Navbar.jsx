import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import searchIcon from "../assets/images/Search_icon.png";
import Cart from "../assets/images/cart-icon.svg";
import Favourite from "../assets/images/love.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function NavbarComponent() {
	const CartIconStyle = {
		fontSize: "12px"
	}
	const isLogin = localStorage.getItem('user') ? true : false;

	const [navBackground, setNavBackground] = useState(false);
	const location = useLocation();

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
			<Navbar expand="lg" className={`bg-black navbar-dark  ${navBackground || location.pathname !== "/Metromart/" ? "Navbar-background-color sticky-top" : "Navbar-background-transparent fixed-top"} p-3`}>				
			<Container>
				<Navbar.Brand href="/Metromart/" className="fw-bolder"><span className="text-danger">Metro</span>Mart</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto">
						<Nav.Link href="/Metromart/" className="me-4 fw-bold" >Home</Nav.Link>
						<Nav.Link href="/Metromart/contact" className="me-4 fw-bold" >Contact</Nav.Link>
						<Nav.Link href="/Metromart/aboutUs" className="me-4 fw-bold" >About us</Nav.Link>
						{!isLogin && <Nav.Link href="/Metromart/signUp" className="me-4 fw-bold" >Sign Up</Nav.Link>}
					</Nav>
					<Form className="d-flex search-form mb-3 mb-lg-0 me-lg-3">
						<FormControl
							type="search"
							placeholder="search for products"
							aria-label="Search"
						/>
						<button type="submit">
							<img
								src={searchIcon}
								alt="Search"
							/>
						</button>
					</Form>
					<div className="text-dark fs-4">
						<a href="/Metromart/wishlist"><i className="bi bi-heart text-white me-2 ms-2"></i></a>
						<a href="/Metromart/cart">
							<i className="bi bi-cart text-white me-2 ms-2 position-relative">
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={CartIconStyle}>2<span className="visually-hidden">unread messages</span></span>

							</i>
						</a>
						{
							isLogin && <a href="/Metromart/accountdetails"><i className="bi bi-person-circle text-danger me-2 ms-2"></i></a>
						}
					</div>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</>
	);
}

export default NavbarComponent;