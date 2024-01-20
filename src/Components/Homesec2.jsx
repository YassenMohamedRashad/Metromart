import 'swiper/css';
import "../assets/css/Homesec2.css";
import Cardsslider from "./CardsSlider/Cardsslider";

function Homesec2 ()
{
    return (
        <div>
            <div style={ { backgroundColor:"#181818"}} className="p-5">
                <div className="container">
                    <div className="row position-relative">
                        <div className="rounded	today" ></div>
                        <h5 className="text-danger position-absolute mt-3 ms-4 fw-bold today-text"> Category</h5>
                    </div>

                    {/* Brows By Category word */ }
                    <div className="row">
                        <h2 className='text-white mb-4 mt-4 fw-bold'>Browse By Category</h2>
                    </div>


                    {/* cards of category */ }
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 mb-5 justify-content-center">
                        {/* phone category */ }
                        <div className="col">
                            <div className="card-category card m-1">
                                <a href="#1" className="text-white">
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

                        {/* computer category */ }
                        <div className="col">
                            <div className="card-category card m-1">
                                <a href="#2" className="text-white">
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

                        {/* smartwatch category */ }
                        <div className="col">
                            <div className="card-category card m-1">
                                <a href="#3" className="text-white">
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

                        {/* camera category */ }
                        <div className="col">

                            <div className="card-category card m-1">
                                <a href="#4" className="text-white">
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

                        {/* headphones category */ }
                        <div className="col">

                            <div className="card-category card m-1">
                                <a href="#5" className="text-white">
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

                    </div>
                </div>
                {/* category word */ }
                
            </div>

            {/* Browse By Category word and view button  */ }
            <Cardsslider />
        </div>

    );
}

export default Homesec2;