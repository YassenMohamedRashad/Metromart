import "../assets/css/Slider.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export const Slider = () => {
	const [data, setData] = useState(null); // Create a state variable to store the data
	const bigImageRef = useRef(); // Create a ref for the big image

	const handleClick = (e) => {
		const smallImageSrc = e.target.src; // Store the src of the clicked small image
		e.target.src = bigImageRef.current.src; // Set the src of the small image to the src of the big image
		bigImageRef.current.src = smallImageSrc; // Set the src of the big image to the stored src of the small image
	};

	useEffect(() => {
		/* Request to the Actual Database
		axios
			.get("http://localhost:5011/products/5")
			.then((res) => {
				setData([res.data.data]);
				console.log([res.data.data]); // Store the data in the state variable
			})
			.catch((error) => {
				console.log(error);
			}); */
		/* Request for testing */
		axios
			.get("https://dummyjson.com/products/8")
			.then((res) => {
				setData(res.data); // Store the data in the state variable
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return (
		<div className="product">
			<div className="product-small-img">
				{data &&
					data.images
						.filter((path) => path !== data.images[0])
						.map((path, index) => (
							<img key={index} src={path} onClick={handleClick} />
						))}
			</div>
			<div className="big-img-container">
				<img ref={bigImageRef} src={data && data.images[0]} />
			</div>
		</div>
	);
};
