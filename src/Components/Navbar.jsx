import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import searchIcon from "../assets/images/Search_icon.png";


function NavbarComponent() {
	const [scrolled, setScrolled] = useState(false);

	const CartIconStyle = {
		fontSize: "12px",
	};

	const isLogin = localStorage.getItem("user") ? true : false;

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY >= 0.9 * window.innerHeight;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	const navbarClass = `bg-black navbar-dark fixed-top p-3 ${scrolled ? "scrolled" : "Navbar-background-color"
		}`;

	return (
		<>
			<Navbar expand="lg" className={navbarClass}>
				<Container>
					<Navbar.Brand href="/Metromart/" className="fw-bolder"><span className="text-danger">Metro</span>Mart</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<Nav.Link href="/Metromart/" className="me-4 fw-bold" >Home</Nav.Link>
							<Nav.Link href="/Metromart" className="me-4 fw-bold" >Contact</Nav.Link>
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
							<a href="/Metromart/wishlist"><i class="bi bi-heart text-white me-2 ms-2"></i></a>
							<a href="/Metromart/cart">
								<i class="bi bi-cart text-white me-2 ms-2 position-relative">
									<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={CartIconStyle}>2<span class="visually-hidden">unread messages</span></span>

								</i>
							</a>
							{
								isLogin && <a href="/Metromart/accountdetails"><i class="bi bi-person-circle text-danger me-2 ms-2"></i></a>
							}
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
