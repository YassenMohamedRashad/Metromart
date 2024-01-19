/* dependencies */
import { useEffect, useState } from "react";
import axios from "axios";
/* components */
import { Roadmap } from "./Roadmap";
import { StarRating } from "./productDetailsComponents/StarRating";
import { Slider } from "./productDetailsComponents/Slider";
import { Delivery } from "./productDetailsComponents/Delivery";
/* assets */
import MinusIcon from "../assets/images/icon-minus.svg";
import PlusIcon from "../assets/images/icon-plus.svg";
import "../assets/css/ProductDetails.css";
import { RelatedItems } from "./productDetailsComponents/RelatedItems";

const ProductDetails = () => {
	const [data, setData] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [fav, setFav] = useState(false);
	const handleClick = () => setFav(!fav);

	/* Request to the Actual Database
		axios
			.get("http://localhost:5011/products/5")
			.then((res) => {
				setData([res.data.data]);
				console.log([res.data.data]); // Store the data in the state variable
			})
			.catch((error) => console.log(error)); 
			*/

	/* add to cart request */
	const handleBuying = async (quantity) => {
		/* data = {
					userId, userId,
					productId: productId
					quantity: quantity
				};
				await axios.post("http://localhost:5011/carts/addProductToCart", data)
		*/
	};

	/* Request for testing */
	useEffect(() => {
		axios
			.get("https://dummyjson.com/products/8")
			.then((res) => setData(res.data))
			.catch((error) => alert(error));
	}, []);

	return (
		<>
			<div className="container-fluid">
				<Roadmap />
				<div className="row flex-nowrap">
					<div className="col">
						<div className="slider-Container mb-5">
							{data && <Slider images={data.images} />}
							{/* Check if data is not null before rendering Slider */}
						</div>
					</div>
					<div className="col">
						<div className="details-container w-75">
							<div className="label">
								<div className="text-wrapper">
									{data && data.title}
								</div>
							</div>
							{/* ratingFrame start */}
							<div className="frame ratingFrame">
								{/* ratings stars */}
								<StarRating />
								<div className="frame stockFrame">
									<div className="text-wrapper">
										(150 Reviews)
									</div>
									<div className="text-wrapper text-success">
										<span className="text-success pe-1">
											|
										</span>
										In Stock
									</div>
								</div>
							</div>
							<div className="label">
								<div className="text-wrapper">$192.00</div>
							</div>
							{/* ratingFrame end */}

							{/* descriptionFrame start */}
							<div className="frame descriptionFrame my-2">
								<div className="label">
									<p className="productDescription">
										{data && data.description}
									</p>
								</div>
							</div>
							{/* descriptionFrame end */}

							{/* lineFrame start */}
							<div className="frame lineFrame">
								<span className="Line"></span>
							</div>
							{/* lineFrame end */}

							{/* formFrame start */}
							<div className="formFrame">
								{/* quantityFrame start */}
								<div className="frame quantityFrame mt-4">
									{/* minus button */}
									<button
										type="button"
										className="btn btn-light minus"
										onClick={() => {
											if (quantity > 1)
												setQuantity(quantity - 1);
										}}
									>
										<div className="icon-screen">
											<img
												className="minusIcon"
												src={MinusIcon}
											/>
										</div>
									</button>
									{/* value display */}
									<div className="text-wrapper quantityCont">
										<p className="quantity">{quantity}</p>
									</div>
									{/* plus button */}
									<button
										type="button"
										className="btn plus btn-second"
										onClick={() =>
											setQuantity(quantity + 1)
										}
									>
										<div className="icon-screen">
											<img
												className="plusIcon"
												src={PlusIcon}
											/>
										</div>
									</button>
									{/* buttonsFrame start */}
									<div className="frame buttonsFrame mx-3">
										<button
											className="btn btn-second BuyNow"
											onClick={() =>
												handleBuying(quantity)
											}
										>
											Buy Now
										</button>
									</div>
									{/* favFrame start */}
									<div className="frame favFrame">
										<button
											onClick={handleClick}
											className={
												fav
													? "btn btn-light favoriteBtn fav"
													: "btn btn-light favoriteBtn"
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="32"
												height="32"
												viewBox="0 0 32 32"
												fill="none"
											>
												<g id="Wishlist">
													<path
														id="Vector"
														d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
														stroke="black"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</g>
											</svg>
										</button>
									</div>
									{/* favFrame end */}

									{/* buttonsFrame end */}
								</div>
								{/* quantityFrame end */}
							</div>
							{/* formFrame end */}
							<Delivery />
						</div>
					</div>
				</div>
				<div className="row my-5">
					<div className="col RelatedItems-col mb-5">
						<RelatedItems />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
