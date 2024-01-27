import React from "react";

function SliderTitle({ title, subTitle }) {
    return (
        <div>
            <div className="row mt-5 mb-4 position-relative">
                <div className="rounded today"></div>
                <h5 className="text-danger position-absolute mt-3 ms-4 fw-bold today-text">
                    {subTitle || "This Month"}
                </h5>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h2 className="text-black mb-4 fw-bold">
                    {title || "Exclusive offers"}
                </h2>
                <a
                    href="/Metromart/SearchForProducts/allProducts"
                    className="btn text-white pt-3 pb-3 ps-5 pe-5 view-all-product"
                    style={{ backgroundColor: "#DC4345" }}>
                    View All
                </a>
            </div>
        </div>
    );
}

export default SliderTitle;
