import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

export const authReducer = (state, action) => {
	switch (action.type) {
		case "Login":
			return { user: action.payload[0], user_token: action.payload[1] };
		case "Logout":
			return { user: null };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});
	console.log("AuthContext state: ", state);
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
