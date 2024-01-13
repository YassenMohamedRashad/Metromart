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
				<div className="row d-flex justify-content-between">
					<div className="col">
						<div className="slider-Container mb-5">
							{data && <Slider images={data.images} />}
							{/* Check if data is not null before rendering Slider */}
						</div>
					</div>
					<div className="col">
						<div className="details-container">
							<div className="label">
								<div className="text-wrapper">
									{data && data.title}
								</div>
							</div>
							{/* frame 1 ratingFrame*/}
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
							{/* frame 2 descriptionFrame */}
							<div className="frame descriptionFrame my-2">
								<div className="label">
									<p className="productDescription">
										{data && data.description}
									</p>
								</div>
							</div>
							{/* frame 3 lineFrame */}
							<div className="frame lineFrame">
								<span className="Line"></span>
							</div>
							{/* frame 4 formFrame */}
							<div className="formFrame">
								<div className="frame quantityFrame mt-4">
									{/* minus button */}
									<button
										type="button"
										className="btn btn-light minus"
										onClick={() => {
											if (quantity > 0)
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
										className="btn plus"
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
