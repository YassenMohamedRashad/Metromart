// Importing dependencies
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContext.jsx";
import { useAuth } from "../Hooks/useAuth.jsx";
import { InfoAC } from "./SweetAlert.jsx";
import Cardsslider from "./CardsSlider/Cardsslider.jsx";
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
	const { wishlist } = useAuth();
	const Products = useContext(ProductsContext);
	const [wishlistProducts, setWishlistProducts] = useState();
	const navigate = useNavigate();

	function filterProductsByIds(products, ids) {
		setWishlistProducts(products.filter((product) => ids.includes(product.id)));
	}

	useEffect(() => {
		filterProductsByIds(Products, wishlist);
		if (wishlist?.length === 0) {
			InfoAC(
				"Your Wishlist Is Now Empty\nLet's Go To The Homepage",
				3000 //duration of the message
			);
			navigate("/Metromart/");
		}
		// Check if updatedWishlistProducts has length > 0 and navigate accordingly
	}, [wishlist, Products]);

	return (
		<>
			{/* Wishlist and For You list content */}
			<div className="container my-container mt-5 mb-5">
				<div className="row wishlist-row">
					<h4 className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col my-h4">
						Wishlist ( {wishlistProducts && wishlistProducts.length}{" "}
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
							<div className="col-8 col-sm-6 col-md-4 col-lg-3 .col-xl-2">
								<Card key={item.id} item={item} />
							</div>
						))}
				</div>

				{/* Slider */}
				
			</div>
		</>
	);
}

// Export the component
export default WishList;
