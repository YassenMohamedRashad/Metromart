import { Link } from "react-router-dom";
import "../assets/css/Error.css";

function Error() {
	const ErrorStyle = {
		height: "80vh",
		display: "grid",
		"place-items": "center",
	};
	const heading = {
		fontSize: "4.375rem",
	};
	return (
		<div className="container" style={ErrorStyle}>
			<div className="text-center">
				<h1 className="" style={heading}>
					404 Page Not Found
				</h1>
				<p className="text-capitalize">
					your visited page not found, you may go to the home page.
				</p>
				<Link to="/Metromart/" className="btn-danger btn">
					Back to home page
				</Link>
			</div>
		</div>
	);
}

export default Error;
