import React from "react";
import "../assets/css/Roadmap.css";
import pipeLine from "../assets/images/Line 13.svg";
export const Roadmap = () => {
	return (
		<>
			{/* <div className="tabs px-2">
				<p className="tab">text1</p>
				<img src={pipeLine} className="img-fluid rounded-top" alt="" />
				<span className="pipeline"></span>

				<p className="tab">text2</p>
				<p className="tab">text3</p>
			</div> */}
			<h6 className="tabs">
				<a className="tab">Account</a> /{" "}
				<a className="tab">Gaming</a> /{" "}
				<a className="tab">Product Name</a>{" "}
			</h6>
			<br />
			<br />
		</>
	);
};
