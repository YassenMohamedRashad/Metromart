/* dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
/* assets */
import { Roadmap } from "./Roadmap";
import { Slider } from "./Slider";
import "../assets/css/ProductDetails.css";
import star from "../assets/images/y-star.svg";
import whiteStar from "../assets/images/w-star.svg";
import MinusIcon from "../assets/images/icon-minus.svg";
import PlusIcon from "../assets/images/icon-plus.svg";
import favIcon from "../assets/images/Wishlist.svg";
import "../assets/css/ProductDetails.css";

const ProductDetails = () => {
	const [data, setData] = useState(null);
	const [quantity, setQuantity] = useState(2);
	/* Request to the Actual Database
		axios
			.get("http://localhost:5011/products/5")
			.then((res) => {
				setData([res.data.data]);
				console.log([res.data.data]); // Store the data in the state variable
			})
			.catch((error) => console.log(error)); 
			*/
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
								<div className="four-star">
									<img className="vector" src={star} />
									<img className="vector" src={star} />
									<img className="vector" src={star} />
									<img className="vector" src={star} />
									<img className="vector" src={whiteStar} />
								</div>
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
										<button className="btn btn-second BuyNow">
											Buy Now
										</button>
									</div>
									{/* favFrame start */}
									<div className="frame favFrame">
										<button className="btn favoriteBtn">
											<div className="favoriteCont">
												<img
													className="favIcon"
													src={favIcon}
												/>
											</div>
										</button>
									</div>
									{/* favFrame end */}

									{/* buttonsFrame end */}
								</div>
								{/* quantityFrame end */}
							</div>
							{/* formFrame end */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
