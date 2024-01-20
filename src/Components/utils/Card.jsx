import axios from "axios";
import { useAuth } from "../../Hooks/useAuth";
import { Success } from "../SweetAlert";
import useWishlist from "../../Hooks/useWishlist";
import { StarRating } from "../productDetailsComponents/StarRating";

function Card({ item }) {
	const { user, user_token } = useAuth();
	const { inWishlist, handleWishlistToggle } = useWishlist(item.id);
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${user_token}`,
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		let res = axios
			.post(
				"http://localhost:5011/Carts/addProductToCart",
				{
					user_id: user.id,
					product_id: item.id,
					quantity: 1,
				},
				{ headers }
			)
			.then(() => {
				Success("<i>Product Added to Cart successfully ✔</i>");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
			<div class="card border-0 ">
				{/* Heart Icon */}
				<button
					onClick={handleWishlistToggle}
					className="btn position-absolute translate-middle badge rounded-pill bg-white heart_icon_container "
					style={{ top: 30, right: -5 }}
				>
					<svg
						width="22"
						height="18"
						viewBox="0 0 24 21"
						fill="none"
						className={
							inWishlist ? "heart_icon hover" : "heart_icon"
						}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>

				{/* Eye Icon */}
				<button
					className="btn position-absolute translate-middle badge rounded-pill bg-white eye_icon_container "
					style={{ top: 70, right: -5 }}
				>
					<svg
						fill="#000000"
						className="eye_icon"
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						XMLHttpRequest="http://www.w3.org/1999/xlink"
						width="23px"
						height="20px"
						viewBox="0 0 442.04 442.04"
						xmlSpace="preserve"
					>
						<g>
							<g>
								<path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z" />
							</g>
							<g>
								<path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z" />
							</g>
							<g>
								<path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
							</g>
						</g>
					</svg>
				</button>
				<div className="d-flex justify-content-center product-img">
					<img
						src={JSON.parse(item.image_path)[0]}
						className=" border-0 rounded-2 shadow"
						alt="Title"
					/>
				</div>

				<div className="overlay" style={{ bottom: 115 }}>
					<form
						className="text-center"
						action=""
						method="post"
						onSubmit={handleFormSubmit}
					>
						<input
							type="submit"
							className="btn text-white"
							value={"Add to cart"}
						/>
					</form>
				</div>

				{/* Product Body */}
				<div class="card-body ps-0">
					<div className="d-flex justify-content-between">
						<h5 className="card-title fw-bold text-start product-card-title">
							{item.name.slice(0, 25)}{" "}
						</h5>
						<div>
							<h6
								className="card-text product-card-price "
								style={{ color: "#DC4345" }}
							>
								${item.price}
							</h6>
						</div>
					</div>

					{/* Starts Rating */}
					<div className="d-flex rating-starts">
						<StarRating rate={item.rate} />
						<h6 className="text-secondary ms-2 product-card-reviews">
							({item.stock})
						</h6>
					</div>
				</div>
			</div>

	);
}

export default Card;
