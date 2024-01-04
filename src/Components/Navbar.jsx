import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

function nav() {
	return (
		<Navbar bg="light" expand="lg" className="mb-3">
			<Container>
				<Navbar.Brand href="#home">MetroMart</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto">
						<Nav.Link href="#home" className="me-4">
							Home
						</Nav.Link>
						<Nav.Link href="#contact" className="me-4">
							Contact
						</Nav.Link>
						<Nav.Link href="#contact" className="me-4">
							About
						</Nav.Link>
						<Nav.Link href="#signup" className="me-4">
							Sign Up
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="What are you looking for ?"
							aria-label="Search"
						/>
						<button type="submit">
							<img
								src="src\assets\images\Search_icon.png"
								alt="Search"
							/>
						</button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default nav;