import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import "../../assets/css/Cardsslider.css";
import { ProductsContext } from "../../Context/ProductsContext";
import  Card  from "../utils/Card";

function Cardsslider({ title }) {
	const Products = useContext(ProductsContext);

	return (
		<div className="container mt-5 mb-5">
			<div className="row mt-5 mb-4 position-relative">
				<div className="rounded today"></div>
				<h5 className="text-danger position-absolute mt-3 ms-4 fw-bold today-text">
					{title || "This Month"}
				</h5>
			</div>
			<div className="d-flex justify-content-between align-items-center mb-5">
				<h2 className="text-black mb-4 fw-bold">{title ? "Exclusive offers" : "New Products"}</h2>
				<a
					href="#"
					className="btn text-white pt-3 pb-3 ps-5 pe-5 view-all-product"
					style={{ backgroundColor: "#DC4345" }}
				>
					View All
				</a>
			</div>

			<Swiper
				spaceBetween={40}
				className="mySwiper"
				breakpoints={{
					577: {
						slidesPerView: 1.5,
					},
					768: {
						slidesPerView: 2.5,
					},
					992: {
						slidesPerView: 3.5,
					},
					1200: {
						slidesPerView: 4.5,
					},	
				}}
			>
				{Products &&
					Products.map((item) => (
						<SwiperSlide key={item.id}>
							<Card item={item} /> 
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}

export default Cardsslider;
