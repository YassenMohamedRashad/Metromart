import Hero from "./Hero";
import "../assets/css/FirstSection.css";
import "../assets/css/Cardsslider.css";
import ProductsContainer from "./utils/ProductsContainer";
import Cardsslider from "./CardsSlider/Cardsslider"

function FirstSection() {
	return (
		<div>
			<Hero />
			{/* <ProductsContainer /> */ }
			<Cardsslider title1={"Weekend offers"} title2={"Best Offers"}/>
		</div>
	);
}
export default FirstSection;
