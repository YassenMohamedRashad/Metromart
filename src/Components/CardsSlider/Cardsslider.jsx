import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import "../../assets/css/Cardsslider.css";
import { ProductsContext } from "../../Context/ProductsContext";
import  Card  from "../utils/Card";
import SliderTitle from "../utils/SliderTitle";

function Cardsslider({title1,title2}) {
	const Products = useContext(ProductsContext);

	return (
		<div className="container mt-5 mb-5">
			<SliderTitle title={ title1 } subTitle={ title2 } />

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
