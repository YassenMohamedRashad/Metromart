import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used inside here");
	return context;
};
