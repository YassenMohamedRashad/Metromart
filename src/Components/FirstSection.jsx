
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

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FirstSection() {

	// CountDown Function
	const targetDate = new Date('2024-04-23');
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
		<div className="container p-5 pt-0" >
			{/* Hero Part */}

			<div className="row " style={{ marginBottom: 90 }}>
				<Slider {...settings} className='bg-black hero'>
					<img src={iphone15} alt="Slide 1" />
					<img src={iphone26} alt="Slide 2" />
				</Slider>

			</div>

			{/* Today's Part */}
			<div className="row position-relative mb-4">
				<div className="rounded	today" ></div>
				<h5 className="text-danger position-absolute mt-3 ms-4 fw-bold today-text"> Today's</h5>

				{/* CountDown Part */}
				<div className="d-flex count-down">
					<h2 className='text-black mb-4 mt-4 fw-bold'>Flash Sales</h2>

					<div className="days ms-5 position-relative">
						<p style={{ fontSize: 17 }}>Days</p>
						<span className='fw-bold me-5 position-absolute' style={{ fontSize: 35, left: 0, top: 19 }}>{timeRemaining.days}</span>
					</div>

					<div className="hours position-relative">
						<p className="ms-4" style={{ fontSize: 17 }}>Hours</p>
						<span className='fw-bold me-5 position-absolute' style={{ fontSize: 35, left: 15, top: 19 }}><span className='me-2' style={{ color: "#DC4345" }}>:</span>{timeRemaining.hours} </span>
					</div>

					<div className="minutes position-relative">
						<p className="ms-4" style={{ fontSize: 17 }}>Minutes</p>
						<span className='fw-bold me-5 position-absolute' style={{ fontSize: 35, left: 14, top: 19 }}><span className='me-2' style={{ color: "#DC4345" }}>:</span>{timeRemaining.minutes} </span>
					</div>

					<div className="seconds position-relative">
						<p className="ms-3	" style={{ fontSize: 17 }}>Seconds</p>
						<span className='fw-bold me-5 position-absolute' style={{ fontSize: 35, left: 1, top: 19 }}><span className='me-2' style={{ color: "#DC4345" }}>:</span>{timeRemaining.seconds} </span>
					</div>
				</div>
				{/* <h6 className="position-absolute fw-bold" style={{ top: 60, left: 220, fontSize: 12 }}>
					<span className="position-absolute" style={{ left: 25 }}>Days</span>
					<span className="position-absolute" style={{ left: 100 }}>Hours</span>
					<span className="position-absolute" style={{ left: 170 }}>Minutes</span>
					<span className="position-absolute" style={{ left: 240 }}>Seconds</span>
				</h6>
				<h2 className="text-black mb-4 mt-4 fw-bold">Flash Sales
					<span className="ms-5"> {timeRemaining.days}
						<span className="text-danger ms-2 me-2" style={{ fontSize: 35 }}>:</span> {timeRemaining.hours}
						<span className="text-danger ms-2 me-2" style={{ fontSize: 35 }}>:</span> {timeRemaining.minutes}
						<span className="text-danger ms-2 me-2" style={{ fontSize: 35 }}>:</span> {timeRemaining.seconds}
					</span>
				</h2> */}

				{/* Products Carousel */}

				<Swiper slidesPerView={3.5} spaceBetween={60} className="mySwiper" >
					{
						Products && Products.map((item) => {

							return (
								<SwiperSlide key={item.id}>
									<div className="card shadow-sm position-relative product-card " style={{ height: 250 }}	>
										<span className="position-absolute translate-middle badge rounded p-3 pt-2 pb-2" style={{ backgroundColor: "#DC4345", top: 30, left: 50 }}>
											{item.discountPercentage}%
										</span>

										<button className="btn position-absolute translate-middle badge rounded-pill bg-white heart_icon_container " style={{ top: 30, right: -5 }}>
											<svg width="22" height="18" viewBox="0 0 24 21" fill="none" className='heart_icon ' xmlns="http://www.w3.org/2000/svg">
												<path fillRule="nonzero" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>

										<button className="btn position-absolute translate-middle badge rounded-pill bg-white eye_icon_container " style={{ top: 70, right: -5 }}>

											<svg fill="#000000" className='eye_icon' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="23px" height="20px" viewBox="0 0 442.04 442.04" xmlSpace="preserve">
												<g>
													<g>
														<path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z" />
													</g>
													<g>
														<path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z" />
													</g>
													<g>
														<path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
													</g>
												</g>
											</svg>
										</button>

										<div className="d-flex justify-content-center product-img">
											<img src={item.image1} className=' border-0 rounded-2' alt="Title" />
										</div>
										<div className="overlay">
											<button className="btn text-white" >Add to Cart</button>
										</div>


									</div>
									<div className='mt-4 position-relative cardBody' style={{ height: 140 }}>
										<div className="d-flex justify-content-between">

											<h4 className="card-title fw-bold text-start">{item.title}</h4>

											<div className='price'>
												<h5 className="card-text me-2  d-inline" style={{ color: "#DC4345" }}>${item.discountedPrice}</h5>
												<h6 className="text-secondary d-inline" >
													<del>${item.price}</del>
												</h6>
											</div>
										</div>
										<div className='d-flex position-absolute top-50'>
											<img style={{ width: 20 }} src={checked_star_icon} alt="alt" />
											<img style={{ width: 20 }} src={checked_star_icon} alt="alt" />
											<img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
											<img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
											<img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
											<h6 className='text-secondary ms-2'>({item.stock})</h6>
										</div>
									</div>
								</SwiperSlide>
							)
						})
					}
				</Swiper>

			</div>

			<div className="d-flex justify-content-center mt-4 mb-5 ">
				<a href="#" className='btn text-white pt-3 pb-3 ps-5 pe-5 view-all-product' style={{ backgroundColor: "#DC4345" }} >View All Products</a>
			</div>

		</div >
	);
}
export default FirstSection;
