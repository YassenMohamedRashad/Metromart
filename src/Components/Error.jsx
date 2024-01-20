import { Link } from "react-router-dom";
import "../assets/css/Error.css";
import { useNavigate } from "react-router-dom";

function Error ()
{
    const ErrorStyle = {
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const heading = {
        fontSize:"70px"
    }
    return (
        <div className="container" style={ErrorStyle}>
                <div className="text-center">
                <h1 className="" style={ heading }>404 Not Found</h1>
                    <p className="">
                        your visited page not found, you may go home page.
                    </p>
                    <a href="/Metromart/" className="btn-danger btn">
                        Back to home page
                    </a>
                </div>
        </div>
    );
}

export default Error;
