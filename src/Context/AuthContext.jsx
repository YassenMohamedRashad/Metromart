import { createContext, useReducer, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext(null);

// Add a function to parse the wishlist data
const parseWishlist = (wishlistData) => {
	try {
		return JSON.parse(wishlistData) || [];
	} catch (error) {
		console.error("Error parsing wishlist data:", error);
		return [];
	}
};

let initState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	user_token: localStorage.getItem("user_token") || null,
	wishlist: parseWishlist(localStorage.getItem("wishlist")) || [],
};

export const authReducer = (state, action) => {
	switch (action.type) {
		case "addToWishlist":
			return {
				...state,
				wishlist: [...new Set([...state.wishlist, action.payload])],
			};
		case "removeFromWishlist":
			return {
				...state,
				wishlist: state.wishlist.filter(
					(item) => item !== action.payload
				),
			};

		case "Login":
			return {
				user: action.payload[0],
				user_token: action.payload[1],
				wishlist: action.payload[2] ? [...action.payload[2]] : [],
			};
		default:
			return state;
	}
};

function isObjectEmpty(obj) {
	return Object.keys(obj).every((key) => obj[key] === null);
}

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		authReducer,
		isObjectEmpty(initState) ? null : initState
	);
	useEffect(() => {
		if (!isObjectEmpty(initState)) {
			localStorage.setItem("user", JSON.stringify(state.user));
			localStorage.setItem("user_token", state.user_token);
			localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
		} else localStorage.clear();
	}, [state]);
	console.table(state)
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
