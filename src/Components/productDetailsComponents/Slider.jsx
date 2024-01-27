import { useRef } from "react";
import "../../assets/css/Slider.css";

export const Slider = ({ images }) => {
	const bigImageRef = useRef(); // Create a ref for the big image

	const handleClick = (e) => {
		const smallImageSrc = e.target.src; // Store the src of the clicked small image
		e.target.src = bigImageRef.current.src; // Set the src of the small image to the src of the big image
		bigImageRef.current.src = smallImageSrc; // Set the src of the big image to the stored src of the small image
	};

	return (
		<div className="product">
			<div className="product-small-img">
				{images &&
					images
						.filter((path) => path !== images[0])
						.map((path, index) => (
							<img key={index} src={path} onClick={handleClick} />
						))}
			</div>
			<div className="big-img-container">
				<img ref={bigImageRef} src={images && images[0]} />
			</div>
		</div>
	);
};
