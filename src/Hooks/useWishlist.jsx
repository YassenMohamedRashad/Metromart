import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { InfoAC, Loader } from "../Components/SweetAlert";

const useWishlist = (itemId) => {
    itemId = +itemId;
    const { wishlist, dispatch, user } = useAuth();
    const [inWishlist, setInWishlist] = useState(false);

    useEffect(() => {
        if (!user) return;
        if (wishlist && wishlist.length != 0)
            setInWishlist(wishlist.includes(itemId));
    }, [wishlist, itemId]);

    const handleWishlistToggle = () => {
        if (!user)
            return InfoAC(
                "You Have To Login To Add Items Into Your Wishlist!",
                2000,
            );
        if (inWishlist) {
            dispatch({ type: "removeFromWishlist", payload: itemId });
            setInWishlist((prev) => !prev);
        } else dispatch({ type: "addToWishlist", payload: itemId });
    };

    return { inWishlist, handleWishlistToggle };
};

export default useWishlist;
