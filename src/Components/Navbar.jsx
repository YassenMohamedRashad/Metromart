import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import searchIcon from "../assets/images/Search_icon.png";
import Cart from "../assets/images/cart-icon.svg";
import Favourite from "../assets/images/love.png";

function nav() {
	return (
		<>
			<Navbar expand="lg mt-3">
				<Container>
					<Navbar.Brand href="/Metromart/" className="fw-bolder">MetroMart</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<Nav.Link href="/Metromart/" className="me-4 fw-bold">Home</Nav.Link>
							<Nav.Link href="#contact" className="me-4 fw-bold">Contact</Nav.Link>
							<Nav.Link href="#contact" className="me-4 fw-bold">About</Nav.Link>
							<Nav.Link href="/Metromart/signUp" className="me-4 fw-bold">Sign Up</Nav.Link>
						</Nav>
						<Form className="d-flex search-form">
							<FormControl
								type="search"
								placeholder="What are you looking for ?"
								aria-label="Search"
							/>
							<button type="submit">
								<img
									src={searchIcon}
									alt="Search"
								/>
							</button>
						</Form>
						<div className="d-flex ">
							<a href="#" className="ms-4"><img src={Favourite} alt='' style={{width:25}} /></a>
							<a href="#" className="ms-4"><img src={Cart} alt='' style={{width:25}} /></a>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<hr />
		</>
	);
}

export default nav;