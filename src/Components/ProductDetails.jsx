/* assets */
import { Roadmap } from "./Roadmap";
import { Slider } from "./Slider";
import "../assets/css/ProductDetails.css";
const ProductDetails = () => {
	return (
		<>
			<Roadmap />
			<div className="slider-container">
				<Slider />
			</div>
		</>
	);
};
export default ProductDetails;
