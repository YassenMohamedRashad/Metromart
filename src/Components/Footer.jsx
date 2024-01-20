import "../assets/css/footer.css";
import sendIcon from "../assets/images/Send-icon.png";
function footer() {
	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,500;0,800;1,600&display=swap" rel="stylesheet" />
			<footer className="text-light pt-3">
				<div className="container-fluid px-5 ">
					<div className="row">

						<div className="col-lg-3  col-md-6 col-sm-12 mt-5">
							<h4 className="fw-bold">MetroMart</h4>
							<h6 className="mt-4">subscribe</h6>
							<h6 className="mb-2 mt-3">Get 10% off your first order</h6>
							<div className="d-flex mt-3" >
								<form method="get" className="order-form ">
									<input type="email" name="search" placeholder="Enter your email" />
									<button type="submit"><img src={sendIcon} /></button>
								</form>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-12 mt-5">
							<h4>Support</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1"><h6>Zakir Hussein st., Nasr<br />city, cairo, Egypt</h6></li>
								<li className="py-1"><h6>MetroMart@example.com</h6></li>
								<li className="py-1"><h6>+20 123 456 7890</h6></li>

							</ul>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 mt-5">
							<h4>Account</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">My Account</a></h6></li>
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">Login / Register</a></h6></li>
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">Cart</a></h6></li>
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">Wishlist</a></h6></li>
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">Shop</a></h6></li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 mt-5">
							<h4>Quick Link</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">Privacy Policy</a></h6></li>
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">Terms of Use</a></h6></li>
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">FAQ</a></h6></li>
								<li className="py-1"><h6><a href="#" className="text-decoration-none text-light">Contact</a></h6></li>							</ul>
						</div>

					</div>
					<hr />
					<div className="d-sm-flex justify-content-center py-1 copyright ">
						<p className="text-center">© Copyright <span className="fw-bold">MetroMart</span> 2023. All right reserved</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default footer;