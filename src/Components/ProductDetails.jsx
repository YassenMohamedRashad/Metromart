import img1 from "../assets/images/gammaxx-l240-argb-1-500x500 1.png";
import "../assets/css/ProductDetails.css";
import { Roadmap } from "./Roadmap";
const ProductDetails = () => {
	return (
		<>
			<Roadmap />
				<img src={img1} className="card-img-top" alt="" />
			
		</>
	);
};
export default ProductDetails;
