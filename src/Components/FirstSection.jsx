
import React, { useState, useEffect } from 'react';
import "../assets/css/FirstSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import iphone15 from "../assets/images/iphone15.png";
import iphone16 from "../assets/images/Iphone-16.png";
import iphone26 from "../assets/images/Iphone-26.png";
import unchecked_star_icon from "../assets/images/unchecked-star-icon.png";
import checked_star_icon from "../assets/images/checked-star-icon.png";

import Products from "./Products_With_saleas.json"

import Slider from 'react-slick';
import Cardsslider from "./CardsSlider/Cardsslider"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from './Hero';

function FirstSection() {

	// CountDown Function
	const targetDate = new Date('2024-04-26');
	const calculateTimeRemaining = () => {
		const now = new Date();
		const difference = targetDate - now;
		let days = Math.floor(difference / (1000 * 60 * 60 * 24));
		let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((difference % (1000 * 60)) / 1000);

		days = days.toString().padStart(2, '0');
		hours = hours.toString().padStart(2, '0');
		minutes = minutes.toString().padStart(2, '0');
		seconds = seconds.toString().padStart(2, '0');

		return { days, hours, minutes, seconds };
	};

	const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeRemaining(calculateTimeRemaining());
		}, 1000);

		// to avoid memory leaks
		return () => {
			clearInterval(timer);
		};
	},);


	// Function to calculate discounted price and add it to the product
	function calculateDiscountedPrice(Products) {
		const price = parseFloat(Products.price);
		const discountPercentage = parseFloat(Products.discountPercentage);
		const discountedPrice = price - (price * discountPercentage / 100).toFixed(0);
		Products.discountedPrice = discountedPrice;
	}
	Products.forEach(calculateDiscountedPrice);


	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000, 
		prevArrow: <button className="slick-prev">Previous</button>,
		nextArrow: <button className="slick-next">Next</button>,
	};
	
	return (
		<div>
			<Hero />
			<Cardsslider/>
		</div>

	);
}
export default FirstSection;
