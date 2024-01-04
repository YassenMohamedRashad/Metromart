import { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import SearchIcon from "../assets/images/icons/Search_icon.png";

function Navigation() {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar bg="light" expand="lg" className="mb-3" expanded={expanded}>
			<Container>
				<Navbar.Brand href="#home" className="fw-bold">
					MetroMart
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					onClick={() => setExpanded(expanded ? false : "expanded")}
				/>
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex">
					<Nav className="m-auto">
						<Nav.Link
							href="#home"
							className="me-4"
							onClick={() => setExpanded(false)}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#contact"
							className="me-4"
							onClick={() => setExpanded(false)}
						>
							Contact
						</Nav.Link>
						<Nav.Link
							href="#about"
							className="me-4"
							onClick={() => setExpanded(false)}
						>
							About
						</Nav.Link>
						<Nav.Link
							href="#signup"
							className="me-4"
							onClick={() => setExpanded(false)}
						>
							Sign Up
						</Nav.Link>
					</Nav>
					<Form>
						<FormControl
							type="search"
							placeholder="What are you looking for ?"
							aria-label="Search"
						/>
						<button type="submit">
							<img src={SearchIcon} alt="Search" />
						</button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
