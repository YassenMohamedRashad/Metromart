import { Link } from "react-router-dom";
import "../assets/css/footer.css";
import sendIcon from "../assets/images/Send-icon.png";

function footer() {
	return (
		<>
						<footer className="text-light pt-3">
				<div className="container-fluid px-5 ">
					<div className="row">
						<div className="col-lg-3  col-md-6 col-sm-12 mt-5">
							<h4 className="fw-bold">MetroMart</h4>
							<h6 className="mt-4">subscribe</h6>
							<h6 className="mb-2 mt-3">
                                Get 10% off your first order
                            </h6>
							<div className="d-flex mt-3">
								<form method="get" className="order-form ">
									<input
                                        type="email"
                                        name="search"
                                        placeholder="Enter your email"
                                    />
									<button type="submit">
                                        <img src={sendIcon} />
                                    </button>
								</form>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-12 mt-5">
							<h4>Support</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1">
                                    <h6>
                                        Egypt, Cairo, Nasr City,
                                        <br /> Zakir Hussain st.
                                    </h6>
                                </li>
								<li className="py-1">
                                    <h6>MetroMart@example.com</h6>
                                </li>
								<li className="py-1">
                                    <h6>+20 123 456 7890</h6>
                                </li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 mt-5">
							<h4>Account</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            My Account
                                        </Link>
                                    </h6>
                                </li>
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            Login / Register
                                        </Link>
                                    </h6>
                                </li>
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            Cart
                                        </Link>
                                    </h6>
                                </li>
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            Wishlist
                                        </Link>
                                    </h6>
                                </li>
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            Shop
                                        </Link>
                                    </h6>
                                </li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 mt-5">
							<h4>Quick Link</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            Privacy Policy
                                        </Link>
                                    </h6>
                                </li>
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            Terms of Use
                                        </Link>
                                    </h6>
                                </li>
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            FAQ
                                        </Link>
                                    </h6>
                                </li>
								<li className="py-1">
                                    <h6>
                                        <Link
                                            to="/"
                                            className="text-decoration-none text-light">
                                            Contact
                                        </Link>
                                    </h6>
                                </li>{" "}
                            </ul>
						</div>
					</div>
					<hr />
					<div className="d-sm-flex justify-content-center py-1 copyright ">
						<p className="text-center">
                            © Copyright{" "}
                            <span className="fw-bold">MetroMart</span> 2023. All
                            right reserved
                        </p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default footer;
