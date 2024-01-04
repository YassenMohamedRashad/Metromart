import Line from "../assets/images/icons/line 13.svg";
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
						<div className="row">img1</div>
						<div className="row">img2</div>
						<div className="row">img3</div>
						<div className="row">img4</div>
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
