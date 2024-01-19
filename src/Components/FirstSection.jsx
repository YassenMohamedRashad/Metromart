
import React from 'react';
import Products from "./Products.json"
import Cardsslider from "./CardsSlider/Cardsslider"
import Hero from './Hero';
import "../assets/css/FirstSection.css";
import "./CardsSlider/Cardsslider.css";

function FirstSection() {
	return (
		<div>
			<Hero />
			<Cardsslider Products={Products}/>
		</div>

	);
}
export default FirstSection;
