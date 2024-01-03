import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import searchIcon from "../assets/images/Search_icon.png";

function nav() {
	return (
		<>
			<Navbar expand="lg mt-3">
				<Container>
					<Navbar.Brand href="/Metromart/" className="fw-bold">MetroMart</Navbar.Brand>
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
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<hr />
		</>
	);
}

export default nav;

/* old code 
function nav() {
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<a className="navbar-brand fw-bold" href="#">
						MetroMart
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse d-flex justify-content-center"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Home
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Sign Up
								</a>
							</li>
						</ul>
					</div>

					<form method="get">
						<input
							type="text"
							name="search"
							placeholder="What are you looking for ?"
						/>
						<button type="submit">
							<img
								src="src\assets\images\Search_icon.png"
								alt="Search"
							/>
						</button>
					</form>
				</div>
			</nav>
		</>
	);
}
*/
