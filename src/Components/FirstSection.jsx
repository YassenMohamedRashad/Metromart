import Hero from "./Hero";
import "../assets/css/FirstSection.css";
import "../assets/css/Cardsslider.css";
import ProductsContainer from "./utils/ProductsContainer";

function FirstSection() {
	return (
		<div>
			<Hero />
			<ProductsContainer />
		</div>
	);
}
export default FirstSection;
