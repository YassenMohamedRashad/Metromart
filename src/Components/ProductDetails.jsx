/* assets */
import { Roadmap } from "./Roadmap";
import { Slider } from "./Slider";
import "../assets/css/ProductDetails.css";
const ProductDetails = () => {
	return (
		<>
			<div className="container-fluid">
				<Roadmap />
				<div className="row d-flex justify-content-between">
					<div className="col">
						<div className="slider-Container mb-5">
							<Slider />
						</div>
					</div>
					<div className="col">
						<div className="details-container">hello</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProductDetails;
