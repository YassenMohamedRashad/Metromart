import React from "react";
import "../assets/css/Error.css";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    const handleClick = () => navigate("/Metromart/");

    return (
        <div className="container hal">
            <div>
                <div className="col-12 text-center Error">
                    <h1 className="display-1">404 Not Found</h1>
                    <p className="display-5">
                        your visited page not found, you may go home page.
                    </p>
                    <button
                        className="d-block btn-danger btn w-25 p-3"
                        onClick={handleClick}
                    >
                        Back to home page
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Error;
