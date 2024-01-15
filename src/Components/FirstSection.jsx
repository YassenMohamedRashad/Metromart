import "../assets/css/FirstSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import iphone15 from "../assets/images/Iphone-15.png";
import iphone16 from "../assets/images/Iphone-16.png";
import iphone26 from "../assets/images/Iphone-26.png";
import appleLogo from "../assets/images/apple-logo.png";
import heart_icon from "../assets/images/love.png";
import eye_icon from "../assets/images/eye-icon.png";

function FirstSection() {
	return (
		<div className="container">
			<div className="row" style={{ marginBottom: 100 }}>
				<div id="heroCarousel" className="carousel slide bg-black" style={{ paddingRight: 100, paddingLeft: 100, paddingTop: 50 }} data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="d-flex justify-content-between">
								<div className="firstSlide">
									<img src={appleLogo} alt="Slide 1" className="applelogo" />
									<h5 className="text-white firstSlideText" >iphone 15 Series</h5>
									<h1 className="text-white mt-4" style={{ fontSize: 70 }}>Up to 10% <br />off	Voucher</h1>
								</div>

								<div>
									<img src={iphone15} className="w-75 iphone	" alt="Slide 1" />
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="d-flex justify-content-between">
								<div>
									<img src={iphone16} className="w-100 iphone	" alt="Slide 2" />
								</div>

								<div className="secondSlide">
									<img src={appleLogo} alt="Slide 2" className="applelogo" />
									<h5 className="text-white secondSlideText" >iphone 16 Series</h5>
									<h1 className="text-white mt-4" style={{ fontSize: 70 }}>Up to 10% <br />off Voucher</h1>
								</div>

							</div>
						</div>
						<div className="carousel-item">
							<div className="d-flex justify-content-between">
								<div className="firstSlide">
									<img src={appleLogo} alt="Slide 3" className="applelogo" />
									<h5 className="text-white firstSlideText" >iphone 17 Series</h5>
									<h1 className="text-white mt-4" style={{ fontSize: 70 }}>Up to 10% <br />off Voucher</h1>
								</div>

								<div>
									<img src={iphone26} className="w-100 iphone	" alt="Slide 3" />
								</div>
							</div>
						</div>
					</div>

					<ol className="carousel-indicators list-unstyled">
						<li data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></li>
						<li data-bs-target="#heroCarousel" data-bs-slide-to="1"></li>
						<li data-bs-target="#heroCarousel" data-bs-slide-to="2"></li>
					</ol>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row position-relative mb-4">
					<div className="rounded	" style={{ width: 25, height: 50, backgroundColor: "#DC4345" }}></div>
					<h5 className="text-danger position-absolute mt-3 ms-4 fw-bold"> Today's</h5>
				</div>
				<div className="row">
					<h1 className="text-black mb-4">Flash Sales <span className="ms-5">03 <span className="text-danger" style={{fontSize:35}}>:</span> 23 <span className="text-danger" style={{fontSize:35}}>:</span> 19 <span className="text-danger" style={{fontSize:35}}>:</span> 56</span></h1>
					<Swiper slidesPerView={3.5} spaceBetween={100} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode]} className="mySwiper" >
						<SwiperSlide>
							<div className="card bg-light border-0 shadow-sm">
								<img className="card-img-top position-relative w-75 ms-4" src={iphone15} alt="Title" />
								<button className="btn position-absolute translate-middle badge rounded p-3 pt-2 pb-2" style={{ backgroundColor: "#DC4345", top:30, left:50   }}>
									- 40%
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white " style={{ top:30, right:-5   }}>
									<img src={heart_icon} style={{height:20}} alt="" />
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white	" style={{ top:70, right:-5   }}>
									<img src={eye_icon} style={{height:20}} alt="" />
								</button>	
								<div className="card-body">
									<h4 className="card-title">Title</h4>
									<p className="card-text">Text</p>
								</div>
							</div>

						</SwiperSlide>
						<SwiperSlide>
							<div className="card bg-light border-0 shadow-sm">
								<img className="card-img-top position-relative w-75 ms-4" src={iphone15} alt="Title" />
								<button className="btn position-absolute translate-middle badge rounded p-3 pt-2 pb-2" style={{ backgroundColor: "#DC4345", top:30, left:50   }}>
									- 40%
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white " style={{ top:30, right:-5   }}>
									<img src={heart_icon} style={{height:20}} alt="" />
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white	" style={{ top:70, right:-5   }}>
									<img src={eye_icon} style={{height:20}} alt="" />
								</button>
								<div className="card-body">
									<h4 className="card-title">Title</h4>
									<p className="card-text">Text</p>
								</div>
							</div>

						</SwiperSlide>
						<SwiperSlide>
							<div className="card bg-light border-0 shadow-sm">
								<img className="card-img-top position-relative w-75 ms-4" src={iphone15} alt="Title" />
								<button className="btn position-absolute translate-middle badge rounded p-3 pt-2 pb-2" style={{ backgroundColor: "#DC4345", top:30, left:50   }}>
									- 40%
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white " style={{ top:30, right:-5   }}>
									<img src={heart_icon} style={{height:20}} alt="" />
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white	" style={{ top:70, right:-5   }}>
									<img src={eye_icon} style={{height:20}} alt="" />
								</button>
								<div className="card-body">
									<h4 className="card-title">Title</h4>
									<p className="card-text">Text</p>
								</div>
							</div>

						</SwiperSlide>
						<SwiperSlide>
							<div className="card bg-light border-0 shadow-sm">
								<img className="card-img-top position-relative w-75 ms-4" src={iphone15} alt="Title" />
								<button className="btn position-absolute translate-middle badge rounded p-3 pt-2 pb-2" style={{ backgroundColor: "#DC4345", top:30, left:50   }}>
									- 40%
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white " style={{ top:30, right:-5   }}>
									<img src={heart_icon} style={{height:20}} alt="" />
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white	" style={{ top:70, right:-5   }}>
									<img src={eye_icon} style={{height:20}} alt="" />
								</button>
								<div className="card-body">
									<h4 className="card-title">Title</h4>
									<p className="card-text">Text</p>
								</div>
							</div>

						</SwiperSlide>
						<SwiperSlide>
							<div className="card bg-light border-0 shadow-sm">
								<img className="card-img-top position-relative w-75 ms-4" src={iphone15} alt="Title" />
								<button className="btn position-absolute translate-middle badge rounded p-3 pt-2 pb-2" style={{ backgroundColor: "#DC4345", top:30, left:50   }}>
									- 40%
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white " style={{ top:30, right:-5   }}>
									<img src={heart_icon} style={{height:20}} alt="" />
								</button>
								<button className="btn position-absolute translate-middle badge rounded-pill bg-white	" style={{ top:70, right:-5   }}>
									<img src={eye_icon} style={{height:20}} alt="" />
								</button>
								<div className="card-body">
									<h4 className="card-title">Title</h4>
									<p className="card-text">Text</p>
								</div>
							</div>

						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div >
	);
}
export default FirstSection;
