// Importing useEffect, useState, and other dependencies
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, Close } from "./SweetAlert.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useAuth } from "../Hooks/useAuth.jsx";
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
	const [Products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const handleDeletion = (id) => {
		dispatch({ type: "removeFromWishlist", payload: id });
		if (wishlist.length === 1) navigate("/Metromart/");
	};

	async function getProducts(ids = []) {
		try {
			const requests = ids.map((id) =>
				axios.get(`http://localhost:5011/products/${id}`)
			);
			const responses = await Promise.all(requests);
			const productsData = responses.map((res) => res.data.data);
			console.log(productsData);
			setLoading((prev) => false);
			Close();
			return productsData;
		} catch (error) {
			console.warn(error);
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (loading) Loader();
				const wishlistProducts = await getProducts(wishlist);
				const formattedProducts = wishlistProducts.map((item) => {
					item.images = JSON.parse(item.image_path);
					return item;
				});
				console.table(formattedProducts)
				setProducts(formattedProducts);
			} catch (error) {
				console.log(error);
			}
		};

		if (wishlist.length > 0) fetchData();
		else setProducts([]);
	}, [wishlist, loading]);

	return (
		<>
			{/* Wishlist and For You list content */}
			<div className="container my-container">
				<div className="row wishlist-row">
					<h4 className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col my-h4">
						Wishlist ({Products && Products?.length})
					</h4>
					<button className="col btn btn-outline-dark btn-lg">
						Move All To Cart
					</button>
				</div>

				{/* Wishlist row */}
				<div className="row">
					{/* Dynamic cards from API */}
					{Products &&
						Products.map((item) => (
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
				{Products && Products.length > 0 && (
					<Carousel responsive={responsive}>
						{/* Dynamic cards from API */}
						{Products &&
							Products.map((item) => (
								<Card key={item.id} item={item} />
							))}
					</Carousel>
				)}
			</div>
		</>
	);
}

// Export the component
export default WishList;
