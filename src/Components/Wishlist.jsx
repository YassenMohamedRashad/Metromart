// Importing dependencies
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, Close } from "./SweetAlert.jsx";
import { ProductsContext } from "../Context/ProductsContext.jsx";
import { useAuth } from "../Hooks/useAuth.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./utils/Card.jsx";

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
	const { wishlist, dispatch } = useAuth();
	const Products = useContext(ProductsContext);
	const [loading, setLoading] = useState(true);
	const [wishlistProducts, setWishlistProducts] = useState();
	const navigate = useNavigate();
	const handleDeletion = (id) => {
		dispatch({ type: "removeFromWishlist", payload: id });
		if (wishlist.length === 1) navigate("/Metromart/");
	};

	function filterUsersByIds(users, ids) {
		return users.filter((user) => ids.includes(user.id));
	}

	useEffect(() => {
		let wishlistProducts = filterUsersByIds(Products, wishlist);
		setWishlistProducts(wishlistProducts);
		return () => {
			setLoading(false);
		};
	}, [wishlist, loading]);

	return (
		<>
			{/* Wishlist and For You list content */}
			<div className="container my-container">
				<div className="row wishlist-row">
					<h4 className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col my-h4">
						Wishlist ({wishlistProducts && wishlistProducts?.length}
						)
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
							<Card
								key={item.id}
								item={item}
								handleDeletion={handleDeletion}
							/>
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
