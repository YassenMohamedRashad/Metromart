import React from "react";
import "../assets/css/Error.css";
import error from "../assets/images/404_error_page.png"

function Error() {
    return (
        
        <div className="text-center mb-5 mt-5">
            <img src={error} className="error-image" alt="" />
            <h5 className="fw-bold">your visited page not found, you may go home page.</h5>
            <a href="/Metromart/" className="btn-danger btn mt-3 pt-3 pb-2 pe-5 ps-5"><h6>Back to home page</h6></a>
        </div>

    );
}

export default Error;
