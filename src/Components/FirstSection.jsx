import React, { useState, useEffect } from 'react';
import "../assets/css/FirstSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import iphone15 from "../assets/images/Iphone-15.png";
import iphone16 from "../assets/images/Iphone-16.png";
import iphone26 from "../assets/images/Iphone-26.png";
import appleLogo from "../assets/images/apple-logo.png";
import heart_icon from "../assets/images/love.png";
import eye_icon from "../assets/images/eye-icon.png";
import unchecked_star_icon from "../assets/images/unchecked-star-icon.png";
import checked_star_icon from "../assets/images/checked-star-icon.png";


import Products from "./Products.json"

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


	return (
		<div className="container">
			{/* Hero Part */}
			<div className="row" style={{ marginBottom: 100 }}>
				<div id="heroCarousel" className="carousel slide bg-black hero" style={{ paddingRight: 100, paddingLeft: 100, paddingTop: 50 }} data-bs-ride="carousel">
					<div className="carousel-inner">

						<div className="carousel-item active">
							<div className="d-flex justify-content-between">
								<div className="firstSlide">
									<img src={appleLogo} alt="Slide 1" className="applelogo" />
									<h5 className="text-white firstSlideText" >iphone 15 Series</h5>
									<h1 className="text-white mt-4" style={{ fontSize: 60 }}>Up to 10% <br />off	Voucher</h1>
								</div>
								<div>
									<img src={iphone15} className="w-75 iphone mt-2" alt="Slide 1" />
								</div>
							</div>
						</div>

						<div className="carousel-item">
							<div className="d-flex justify-content-between">
								<div>
									<img src={iphone16} className="w-100 iphone mt-2" alt="Slide 2" />
								</div>
								<div className="secondSlide">
									<img src={appleLogo} alt="Slide 2" className="applelogo" />
									<h5 className="text-white secondSlideText" >iphone 26 Series</h5>
									<h1 className="text-white mt-4" style={{ fontSize: 60 }}>Up to 90% <br />off Voucher</h1>
								</div>
							</div>
						</div>

						<div className="carousel-item">
							<div className="d-flex justify-content-between">
								<div className="firstSlide">
									<img src={appleLogo} alt="Slide 3" className="applelogo" />
									<h5 className="text-white firstSlideText" >iphone 17 Series</h5>
									<h1 className="text-white mt-4" style={{ fontSize: 60 }}>Up to -10% <br />off Voucher</h1>
								</div>
								<div>
									<img src={iphone26} className="w-100 iphone mt-2" alt="Slide 3" />
								</div>
							</div>
						</div>

					</div>


				</div>
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

				{/* Products Carousel */}

				<Swiper slidesPerView={3.5} spaceBetween={60} className="mySwiper" >
					{
						Products && Products.map((item) => {

							return (
								<SwiperSlide >
									<div className="card border-0 rounded-2 shadow-sm position-relative product-card " style={{ height: 250 }}	>
										<span className="position-absolute translate-middle badge rounded p-3 pt-2 pb-2" style={{ backgroundColor: "#DC4345", top: 30, left: 50 }}>
											{item.discountPercent}%
										</span>
										<button className="btn position-absolute translate-middle badge rounded-pill bg-white " style={{ top: 30, right: -5 }}>
											<img src={heart_icon} style={{ height: 20 }} alt="" />
										</button>
										<button className="btn position-absolute translate-middle badge rounded-pill bg-white	" style={{ top: 70, right: -5 }}>
											<img src={eye_icon} style={{ height: 20 }} alt="" />
										</button>
										<div className="d-flex justify-content-center">
											<img className="card-img-top w-75 product-img align-self-center " src={item.image} alt="Title" />
										</div>
										<div className="overlay">
											<button className="btn text-white	">Add to Cart</button>
										</div>
									</div>
								</SwiperSlide>

							)
						})}
				</Swiper>

			</div>

			<div className="d-flex justify-content-center mt-5 mb-5 ">
				<a href="#" className='btn text-white pt-3 pb-3 ps-5 pe-5 view-all-product' style={{ backgroundColor: "#DC4345" }} >View All Products</a>
			</div>

		</div >
	);
}
export default FirstSection;
