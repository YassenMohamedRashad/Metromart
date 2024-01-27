import axios from "axios";
import { useAuth } from "../../Hooks/useAuth";
import { Success } from "../SweetAlert";
import useWishlist from "../../Hooks/useWishlist";
import { StarRating } from "../productDetailsComponents/StarRating";
import { Link, useNavigate } from "react-router-dom";
import { InfoAC } from "../SweetAlert";

function Card({ item }) {
    const navigate = useNavigate();
    const { user, user_token } = useAuth();
    const { inWishlist, handleWishlistToggle } = useWishlist(item.id);
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user_token}`,
    };

    function formatItemName(item) {
        const maxLength = 20;

        if (item.name.length > maxLength) {
            // If item.name is longer than 20 characters, slice it
            return item.name.slice(0, maxLength);
        } else {
            // If item.name is shorter than 20 characters, add characters to make it 20
            const remainingChars = maxLength - item.name.length;
            const padding = "_".repeat(remainingChars);
            return item.name + padding;
        }
    }

    const handleFormSubmit = (e) => {
        if (user) {
            e.preventDefault();
            axios
                .post(
                    "http://localhost:5011/Carts/addProductToCart",
                    {
                        user_id: user.id,
                        product_id: item.id,
                        quantity: 1,
                    },
                    { headers },
                )
                .then(() => {
                    Success("<i>Product Added to Cart successfully ✔</i>");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            navigate("/Metromart/login");
            InfoAC("You have to login to buy products", 2000);
        }
    };

    return (
        <>
            <div className="card border-0">
                {/* Heart Icon */}
                <button
                    onClick={handleWishlistToggle}
                    className="btn position-absolute translate-middle badge rounded-pill bg-white heart_icon_container "
                    style={{ top: 30, right: -5 }}>
                    {/* Heart Icon SVG */}
                </button>

                {/* Eye Icon */}
                <Link
                    to={`/Metromart/productDetails/${item.id}`}
                    className="btn position-absolute translate-middle badge rounded-pill bg-white eye_icon_container "
                    style={{ top: 70, right: -5 }}>
                    {/* Eye Icon SVG */}
                </Link>

                <div className="d-flex justify-content-center product-img">
                    <img
                        src={JSON.parse(item.image_path)[0]}
                        className="border-0 rounded-2 shadow"
                        alt="Title"
                    />
                </div>

                {/* Product Body */}
                <div className="card-body ps-0">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title fw-bold text-start product-card-title">
                            {formatItemName(item)}
                        </h5>
                        <div>
                            <h6
                                className="card-text product-card-price"
                                style={{ color: "#DC4345" }}>
                                ${item.price}
                            </h6>
                        </div>
                    </div>

                    {/* Stars Rating */}
                    <div className="d-flex rating-starts">
                        <StarRating rate={item.rate} />
                        <h6 className="text-secondary ms-2 product-card-reviews">
                            ({item.stock})
                        </h6>
                    </div>
                </div>

                {/* Overlay */}
                <div className="overlay" style={{ bottom: 113 }}>
                    <form
                        className="text-center"
                        method="post"
                        onSubmit={handleFormSubmit}>
                        <input
                            type="submit"
                            className="btn text-white"
                            value={"Add to cart"}
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Card;
