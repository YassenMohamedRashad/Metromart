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


	//  For testing the products part dynamically 
	const products = [
		{
			name: "HAVIT HV-G92 Gamepad",
			rate: 4.5,
			reviews: 120,
			price: 49.99,
			discountPercent: 10,
			image: "https://www.pngall.com/wp-content/uploads/4/USB-Gamepad-PNG-Free-Image.png",
		},
		{
			name: "IPS LCD Gaming Monitor",
			rate: 4.0,
			reviews: 95,
			price: 399.99,
			discountPercent: 5,
			image: "https://storage.aoc.com/assets/10935/AOC_AG405UXC_BK_PV_-HERO1-large.png",
		},
		{
			name: "S-Series Comfort Chair",
			rate: 4.2,
			reviews: 150,
			price: 199.99,
			discountPercent: 12,
			image: "https://www.kindpng.com/picc/m/381-3818681_transparent-computer-chair-png-gaming-chair-png-download.png",
		},
		{
			name: "Wireless Gaming Mouse",	
			rate: 4.7,
			reviews: 80,
			price: 39.99,
			discountPercent: 20,
			image: "https://www.vhv.rs/dpng/f/72-720542_razer-mouse-png-transparent-png.png",
		}
	];

	// Calculate the price after discount for each product
	products.forEach((product) => {
		const discountAmount = (product.price * product.discountPercent) / 100;
		product.priceAfterDiscount = (product.price - discountAmount).toFixed(2);
	});

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
				<div className="rounded	today" style={{ width: 25, height: 50, backgroundColor: "#DC4345" }}></div>
				<h5 className="text-danger position-absolute mt-3 ms-4 fw-bold today-text"> Today's</h5>

				{/* CountDown Part */}
				<div className="d-flex count-down">
					<h2 className='text-black mb-4 mt-4 fw-bold'>Flash Sales</h2>

					<div className="days ms-5 position-relative">
						<p style={{fontSize:17}}>Days</p>
						<span className='fw-bold me-5 position-absolute' style={{fontSize:35, left:0, top:19}}>{timeRemaining.days}</span>
					</div>

					<div className="hours position-relative">
						<p className="ms-4" style={{fontSize:17}}>Hours</p>
						<span className='fw-bold me-5 position-absolute' style={{fontSize:35, left:15, top:19}}><span className='me-2' style={{color:"#DC4345"}}>:</span>{timeRemaining.hours} </span>
					</div>
					
					<div className="minutes position-relative">
						<p className="ms-4" style={{fontSize:17}}>Minutes</p>
						<span className='fw-bold me-5 position-absolute' style={{fontSize:35, left:14, top:19}}><span className='me-2' style={{color:"#DC4345"}}>:</span>{timeRemaining.minutes} </span>
					</div>

					<div className="seconds position-relative">
						<p className="ms-3	" style={{fontSize:17}}>Seconds</p>
						<span className='fw-bold me-5 position-absolute' style={{fontSize:35, left:1, top:19}}><span className='me-2' style={{color:"#DC4345"}}>:</span>{timeRemaining.seconds} </span>
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
						products.map((item) => {
							return (
								<SwiperSlide >
									<div className="card border-0 rounded-2 shadow-sm position-relative product-card " style={{ height: 250 }}	>
										<span className="position-absolute translate-middle badge rounded product-badge p-3 pt-2 pb-2" style={{ backgroundColor: "#DC4345", top: 30, left: 50 }}>
											{item.discountPercent}%
										</span>
										<button className="btn position-absolute translate-middle badge rounded-pill heart-badge bg-white " style={{ top: 30, right: -5 }}>
											<img src={heart_icon} style={{ height: 20 }} alt="" />
										</button>
										<button className="btn position-absolute translate-middle badge rounded-pill eye-badge bg-white	" style={{ top: 70, right: -5 }}>
											<img src={eye_icon} style={{ height: 20 }} alt="" />
										</button>
										<div className="d-flex justify-content-center">
											<img className="card-img-top w-75 product-img align-self-center " src={item.image} alt="Title" />
										</div>
										<div className="overlay">
											<button className="btn text">Add to Cart</button>
										</div>


									</div>
									<div className='mt-4 position-relative cardBody'>
										<h5 className="card-title fw-bold text-start">{item.name}</h5>
										<p className="card-text text-start mt-2" style={{ color: "#DC4345" }}>${item.priceAfterDiscount}</p>
										<p className="text-secondary position-absolute" style={{ top: 31, left: 80 }}>
											<del>${item.priceAfterDiscount}</del>
										</p>
										<div className='d-flex'>
											<img style={{ width: 20 }} src={checked_star_icon} alt="alt" />
											<img style={{ width: 20 }} src={checked_star_icon} alt="alt" />
											<img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
											<img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
											<img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
											<h6 className='text-secondary ms-2'>({item.reviews})</h6>
										</div>
									</div>
								</SwiperSlide>
							)
						})
					}
				</Swiper>

			</div>

			<div className="d-flex justify-content-center mt-5 mb-5 ">
				<a href="#" className='btn text-white pt-3 pb-3 ps-5 pe-5 view-all-product' style={{ backgroundColor: "#DC4345" }} >View All Products</a>
			</div>

		</div >
	);
}
export default FirstSection;
