/* eslint-disable no-unused-vars */
import Line from "../assets/images/icons/Line 13.svg";
import controller_1 from "../assets/images/controller-1.png";
import controller_2 from "../assets/images/controller-2.png";
import controller_3 from "../assets/images/controller-3.png";
import controller_4 from "../assets/images/controller-4.png";
import controller_5 from "../assets/images/controller-5.png";
const ProductDetails = () => {
	return (
		<>
			<div className="container">
				{/* small navigator */}
				<div className="row mb-5">
					<div className="tabs">
						<div>Account</div>
						<div className="lineWrapper">
							<img src={Line} className="lineIcon" />
						</div>
						<div>Gaming</div>
						<div className="lineWrapper">
							<img src={Line} className="lineIcon" />
						</div>
						<div>Havic HV G-92 Gamepad</div>
					</div>
				</div>
				{/* main product details */}
				<div className="row">
					{/* 4 small images */}
					<div className="col-4">
						<div className="row">
							<div className="img-Wrapper">
								<img className="img-fluid" src={controller_1} />
							</div>
						</div>
						<div className="row">
							<div className="img-Wrapper">
								<img className="img-fluid" src={controller_2} />
							</div>
						</div>
						<div className="row">
							<div className="img-Wrapper">
								<img className="img-fluid" src={controller_3} />
							</div>
						</div>
						<div className="row">
							<div className="img-Wrapper">
								<img className="img-fluid" src={controller_4} />
							</div>
						</div>
					</div>
					{/* big image for the product */}
					<div className="col-4">bigImg</div>
					{/* product info */}
					<div className="col-4">
						{/* text about the product */}
						<div className="row justify-content-center align-items-center g-2">
							<div className="col">Column</div>
							<div className="col">Column</div>
							<div className="col">Column</div>
						</div>
					</div>
				</div>
				{/* related items */}
				<div className="row">
					<div className="col-3">product</div>
					<div className="col-3">product</div>
					<div className="col-3">product</div>
					<div className="col-3">product</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
