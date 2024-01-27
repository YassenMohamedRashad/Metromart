import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { InfoAC } from "./SweetAlert";

const RedirectToLogin = () => {
    useEffect(() => {
        InfoAC("You Have To Login To Access This Page");
    }, []);

    return <Navigate to="/Metromart/login" />;
};

export default RedirectToLogin;
