import DeliveryIcon from "../../assets/images/icon-delivery.svg";
import ReturnIcon from "../../assets/images/Icon-return.svg";
import "../../assets/css/Delivery.css";

export const Delivery = () => {
	return (
		<>
			<div className="frame deliveryFrame mt-4">
				<div className="deliveryCont">
					<img src={DeliveryIcon} alt="" />
					<div className="textCont">
						<div className="text-wrapper">Free Delivery</div>
						<p>Enter your postal code for Delivery Availability</p>
					</div>
				</div>
				<span className="Line"></span>
				<div className="deliveryCont">
					<img src={ReturnIcon} alt="" />
					<div>
						<div className="text-wrapper mb-2">Return Delivery</div>
						<p>
							Free 30 Days Delivery Returns.
							<span className="text-wrapper details">Details</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
