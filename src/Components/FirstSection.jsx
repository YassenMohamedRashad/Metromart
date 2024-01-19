
import React from 'react';
import Products from "./Products.json"
import Cardsslider from "./CardsSlider/Cardsslider"
import Hero from './Hero';
import "../assets/css/FirstSection.css";
import "../assets/css/Cardsslider.css";
import ProductsContainer from "./utils/ProductsContainer"


function FirstSection() {
	return (
		<div>
			<Hero />
			<Cardsslider Products={ Products } />
			<ProductsContainer Products={ Products } /> 
		</div>

	);
}
export default FirstSection;
