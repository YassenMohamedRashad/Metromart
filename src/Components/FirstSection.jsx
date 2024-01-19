
import React, { useState, useEffect } from 'react';
import "../assets/css/FirstSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import iphone15 from "../assets/images/iphone15.png";
import iphone16 from "../assets/images/Iphone-16.png";
import iphone26 from "../assets/images/Iphone-26.png";
import unchecked_star_icon from "../assets/images/unchecked-star-icon.png";
import checked_star_icon from "../assets/images/checked-star-icon.png";

import Products from "./Products.json"

import Slider from 'react-slick';
import Cardsslider from "./CardsSlider/Cardsslider"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from './Hero';

function FirstSection() {
	return (
		<div>
			<Hero />
			<Cardsslider Products={Products}/>
		</div>

	);
}
export default FirstSection;
