import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext(null);

export const authReducer = (state, action) => {
	switch (action.type) {
		case "addToWishlist":
			return {
				...state,
				wishlist: [...new Set([...state.wishlist, action.payload])],
			};
		case "Login":
			return {
				user: action.payload[0],
				user_token: action.payload[1],
				wishlist: [...new Set([...state.wishlist, JSON.parse(action.payload[2])])],
			};
		case "Logout":
			localStorage.clear();
			return null;
		default:
			return state;
	}
};

function isObjectEmpty(obj) {
	return Object.keys(obj).every((key) => obj[key] === null);
}

export const AuthContextProvider = ({ children }) => {
	const initState = {
		user: JSON.parse(localStorage.getItem("user")) || null,
		user_token: localStorage.getItem("user_token") || null,
		wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
	};

	const [state, dispatch] = useReducer(
		authReducer,
		isObjectEmpty(initState) ? null : initState
	);
	useEffect(() => {
		if (state) {
			localStorage.setItem("user", JSON.stringify(state.user));
			localStorage.setItem("user_token", state.user_token);
			localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
		} else localStorage.clear();
	}, [state]);
	console.table(state);
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
