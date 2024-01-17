/* dependencies */
import { useState } from "react";
/* assets */
import Rectangle from "../../assets/images/Rectangle.svg";
import "../../assets/css/RelatedItems.css";
import eyeIcon from "../../assets/images/Fill Eye.svg";

export const RelatedItems = () => {
	const [fav, setFav] = useState(false);
	const handleClick = () => setFav(!fav);
	return (
		<>
			<div className="relatedDiv d-flex align-items-center gap-3">
				<img src={Rectangle} alt="rectangle" />
				<div className="text-wrapper fs-5 color-red">Related Items</div>
			</div>
			<div className="cards-container">
				<div class="card">
					<div class="card-header d-flex justify-content-between px-4">
						<p class="card-title fs-6">
							<div className="discount-percent">
								<div className="discount-num">
									<span>-</span>35%
								</div>
							</div>
						</p>
						<div>
							<div className="icon-holder eyeIcon">
								<img src={eyeIcon} alt="" />
							</div>
							<div className="icon-holder">
								<a
									onClick={handleClick}
									className={
										fav
											? "favoriteBtn fav"
											: "favoriteBtn"
									}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<g id="Wishlist">
											<path
												id="Vector"
												d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
												stroke="black"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</g>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div class="card-body">
						<p class="card-text">Text</p>
					</div>
					<div class="card-footer text-muted">Footer</div>
				</div>
			</div>
		</>
	);
};
