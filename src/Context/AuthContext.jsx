import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

export const authReducer = (state, action) => {
	switch (action.type) {
		case "Login":
			return {
				user: action.payload[0],
				user_token: action.payload[1],
				wishlist: [...action.payload[2]],
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
		wishlist: localStorage.getItem("wishlist") || null,
	};
	const [state, dispatch] = useReducer(
		authReducer,
		isObjectEmpty(initState) ? null : initState
	);
	console.table(state);
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
