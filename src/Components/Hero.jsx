import React from "react";
import "../assets/css/Hero.css";

function Hero() {
    return (
        <div className="HeroPart mb-5">
            <div>
                <h1 className="text-white text-center">
                    Welcome to{" "}
                    <div className="fw-bolder d-inline">
                        <div className="text-danger d-inline">Metro</div>Mart
                    </div>
                </h1>
                <p className="text-center text-white-50">
                    buy every thing you need it from one place with best offers
                    !
                </p>
            </div>
        </div>
    );
}

export default Hero;
