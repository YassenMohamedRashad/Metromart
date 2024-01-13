import img1 from "../assets/images/gammaxx-l240-argb-1-500x500 1.png";
import "../assets/css/ProductDetails.css";
import { Roadmap } from "./Roadmap";
const ProductDetails = () => {
	return (
		<>
			<Roadmap />
			<div className="card">
				<img src={img1} className="card-img-top" alt="" />
				<div className="card-body">
					<h5 className="card-title">Havic HV-G92 Gamepad</h5>
					<p className="card-text">
						$192.00 <span className="discount">$120.00</span>
					</p>
					<a href="#" className="btn btn-primary">
						Buy Now
					</a>
				</div>
			</div>
		</>
	);
};
export default ProductDetails;
