import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Products from "./Products.json"
import "../assets/css/Homesec2.css";
import unchecked_star_icon from "../assets/images/unchecked-star-icon.png";
import checked_star_icon from "../assets/images/checked-star-icon.png";
import heart_icon from "../assets/images/heart_icon.svg";
import eye_icon from "../assets/images/eye-icon.svg";

function Homesec2() {
    return (
        <div className="container">

            {/* category word */}
            <div className="row position-relative">
                <div className="rounded	today" ></div>
                <h5 className="text-danger position-absolute mt-3 ms-4 fw-bold today-text"> Category</h5>
            </div>

            {/* Brows By Category word */}
            <div className="row">
                <h2 className='text-black mb-4 mt-4 fw-bold'>Browse By Category</h2>
            </div>


            {/* cards of category */}
            <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 mb-5 justify-content-center">
                {/* phone category */}
                <div className="col">
                    <div className="card-category card m-1">
                        <a href="#1">
                            <div className="mt-4">
                                <div className="card-img-top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                    </svg>
                                </div><br />

                                <div>Phone</div>
                                <br />
                            </div>
                        </a>
                    </div>
                </div>



                {/* computer category */}
                <div className="col">
                    <div className="card-category card m-1">
                        <a href="#2">
                            <div className="mt-4">
                                <div className="card-img-top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                    </svg>
                                </div><br />

                                <div>Computer</div>
                                <br />
                            </div>
                        </a>
                    </div>

                </div>



                {/* smartwatch category */}
                <div className="col">
                    <div className="card-category card m-1">
                        <a href="#3">
                            <div className="mt-4">
                                <div className="card-img-top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-smartwatch" viewBox="0 0 16 16">
                                        <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z" />
                                        <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3" />
                                    </svg>
                                </div><br />

                                <div>SmartWatch</div>
                                <br />
                            </div>
                        </a>
                    </div>

                </div>



                {/* camera category */}
                <div className="col">

                    <div className="card-category card m-1">
                        <a href="#4">
                            <div className="mt-4">
                                <div className="card-img-top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                                    </svg>
                                </div><br />

                                <div>Camera</div>
                                <br />
                            </div>
                        </a>
                    </div>
                </div>



                {/* headphones category */}
                <div className="col">

                    <div className="card-category card m-1">
                        <a href="#5">
                            <div className="mt-4">
                                <div className="card-img-top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                                        <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                                    </svg>
                                </div><br />

                                <div>HeadPhones</div>
                                <br />
                            </div>
                        </a>
                    </div>
                </div>


            </div><hr /><br /><br />



            {/* This Month word */}
            <div className="row mt-5 mb-4 position-relative">
                <div className="rounded	today" ></div>
                <h5 className="text-danger position-absolute mt-3 ms-4 fw-bold today-text">This Month</h5>
            </div>

            {/* Brows By Category word and view button  */}

            <div className="d-flex justify-content-between align-items-center mb-5">
                <h2 className='text-black mb-4 fw-bold'>Browse By Category</h2>
                <a href="#" className='btn text-white pt-3 pb-3 ps-5 pe-5 view-all-product' style={{ backgroundColor: "#DC4345" }} >View All</a>
            </div>

            <Swiper slidesPerView={3.5} spaceBetween={60} className="mySwiper" >
                {
                    Products && Products.map((item) => {

                        return (
                            <SwiperSlide >
                                <div className="card border-0 rounded-2 shadow-sm position-relative product-card " style={{ height: 250 }}	>

                                    <button className="btn position-absolute translate-middle badge rounded-pill bg-white heart_icon_container " style={{ top: 30, right: -5 }}>
                                        <svg width="22" height="18" viewBox="0 0 24 21" fill="none" className='heart_icon ' xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>

                                    <button className="btn position-absolute translate-middle badge rounded-pill bg-white eye_icon_container " style={{ top: 70, right: -5 }}>

                                        <svg fill="#000000" className='eye_icon' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" XMLHttpRequest="http://www.w3.org/1999/xlink" width="23px" height="20px" viewBox="0 0 442.04 442.04" xmlSpace="preserve">
                                            <g>
                                                <g>
                                                    <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z" />
                                                </g>
                                                <g>
                                                    <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z" />
                                                </g>
                                                <g>
                                                    <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                    <div className="d-flex justify-content-center product-img">
                                        <img src={item.image1} className=' border-0 rounded-2 shadow' alt="Title" />
                                    </div>
                                    <div className="overlay">
                                        <button className="btn text-white	">Add to Cart</button>
                                    </div>


                                </div>
                                <div className='mt-4 position-relative cardBody' style={{ height: 140 }}>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="card-title fw-bold text-start">{item.title}</h5>
                                        <div>
                                            <h5 className="card-text me-2  d-inline" style={{ color: "#DC4345" }}>${item.price}</h5>
                                        </div>
                                    </div>
                                    <div className='d-flex position-absolute top-50'>
                                        <img style={{ width: 20 }} src={checked_star_icon} alt="alt" />
                                        <img style={{ width: 20 }} src={checked_star_icon} alt="alt" />
                                        <img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
                                        <img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
                                        <img style={{ width: 20 }} src={unchecked_star_icon} alt="alt" />
                                        <h6 className='text-secondary ms-2'>({item.stock})</h6>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    );
}

export default Homesec2;