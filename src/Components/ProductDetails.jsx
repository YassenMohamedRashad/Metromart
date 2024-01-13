/* dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
/* assets */
import { Roadmap } from "./Roadmap";
import { Slider } from "./Slider";
import "../assets/css/ProductDetails.css";

const ProductDetails = () => {
	const [data, setData] = useState(null);
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
	useEffect(() => {
		axios
			.get("https://dummyjson.com/products/8")
			.then((res) => {
				setData(res.data);
			})
			.catch((error) => {
				alert(error);
			});
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
						<div className="details-container">hello</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
