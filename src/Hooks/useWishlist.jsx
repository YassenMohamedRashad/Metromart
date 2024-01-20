import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";

const useWishlist = (itemId) => {
	itemId = +itemId;
	const { wishlist, dispatch } = useAuth();
	const [inWishlist, setInWishlist] = useState(false);

	useEffect(() => {
		if (wishlist && wishlist.length != 0)
			setInWishlist(wishlist.includes(itemId));
	}, [wishlist, itemId]);

	const handleWishlistToggle = () => {
		if (inWishlist)
			dispatch({ type: "removeFromWishlist", payload: itemId });
		else dispatch({ type: "addToWishlist", payload: itemId });
	};

	return { inWishlist, handleWishlistToggle };
};

export default useWishlist;
