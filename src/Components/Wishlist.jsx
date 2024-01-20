// Importing dependencies
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContext.jsx";
import { useAuth } from "../Hooks/useAuth.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./utils/Card.jsx";
import { InfoAC } from "./SweetAlert.jsx";

// Responsiveness settings for the slider
const responsive = {
	hugeScreens: { breakpoint: { max: 5000, min: 3000 }, items: 6 },
	superLargeDesktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
	desktop: { breakpoint: { max: 1024, min: 800 }, items: 3 },
	tablet: { breakpoint: { max: 800, min: 464 }, items: 2 },
	mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Wishlist component
function WishList() {
	const { wishlist } = useAuth();
	const Products = useContext(ProductsContext);
	const [wishlistProducts, setWishlistProducts] = useState();
	const navigate = useNavigate();

	function filterUsersByIds(users, ids) {
		return users.filter((user) => ids.includes(user.id));
	}

	useEffect(() => {
		const updatedWishlistProducts = filterUsersByIds(Products, wishlist);
		setWishlistProducts(updatedWishlistProducts);

		// Check if updatedWishlistProducts has length > 0 and navigate accordingly
		if (updatedWishlistProducts.length === 0) {
			InfoAC("Your Wishlist Is Now Empty\nLet's Go To The Homepage", 3000)
			navigate("/Metromart/");
		};
	}, [wishlist, Products]);

	return (
		<>
			{/* Wishlist and For You list content */}
			<div className="container my-container">
				<div className="row wishlist-row">
					<h4 className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col my-h4">
						Wishlist( )
					</h4>
					<button className="col btn btn-outline-dark btn-lg">
						Move All To Cart
					</button>
				</div>

				{/* Wishlist row */}
				<div className="row">
					{/* Dynamic cards from API */}
					{wishlistProducts &&
						wishlistProducts.map((item) => (
							<Card key={item.id} item={item} />
						))}
				</div>

				{/* For You row */}
				<div className="row foryou-row">
					<h4 className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col my-h4">
						<span className="bg-danger space">&nbsp;&nbsp;</span>{" "}
						Just For You
					</h4>
					<button className="col btn btn-outline-dark btn-lg">
						See All
					</button>
				</div>

				{/* Slider */}
				<Carousel responsive={responsive}>
					{/* Dynamic cards from API */}
					{Products &&
						Products.map((item) => (
							<Card key={item.id} item={item} />
						))}
				</Carousel>
			</div>
		</>
	);
}

// Export the component
export default WishList;
