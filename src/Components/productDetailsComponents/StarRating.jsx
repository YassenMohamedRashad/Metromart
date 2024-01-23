import { useState } from "react";
import star from "../../assets/images/y-star.svg";
import whiteStar from "../../assets/images/w-star.svg"; // replace with your whiteStar image path
import "../../assets/css/StarRating.css";

export const StarRating = ({ rate }) => {
	const [rating, setRating] = useState(rate);
	const [hover, setHover] = useState(null);
	const handleClick = (rate) => setRating(rate);

	return (
		<>
			<div className="five-star">
				{[...Array(5)].map((item, i) => {
					const ratingValue = i + 1;
					return (
						<label key={i}>
							<img
								className="star"
								src={
									ratingValue <= (hover || rating)
										? star
										: whiteStar
								}
								alt="star"
								onMouseEnter={() => setHover(ratingValue)}
								onMouseLeave={() => setHover(null)}
							/>
							<input
								className="visually-hidden"
								type="radio"
								name="rating"
								value={ratingValue}
								onClick={() => handleClick(ratingValue)}
							/>
						</label>
					);
				})}
			</div>
		</>
	);
};
