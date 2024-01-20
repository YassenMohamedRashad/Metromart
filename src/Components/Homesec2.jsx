import 'swiper/css';
import "../assets/css/Homesec2.css";
import Cardsslider from "./CardsSlider/Cardsslider";
import { IoShirtSharp } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { FiHeadphones } from "react-icons/fi";
import { MdOutlineChair } from "react-icons/md";


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
                                <a href="/Metromart/SearchForProducts/1" className="text-white">
                                    <div className="mt-4">
                                        <div className="card-img-top">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                            </svg>
                                        </div><br />

                                        <div>Electronics</div>
                                        <br />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* computer category */ }
                        <div className="col">
                            <div className="card-category card m-1">
                                <a href="/Metromart/SearchForProducts/2" className="text-white">
                                    <div className="mt-4">
                                        <div className="card-img-top">
                                            <IoShirtSharp size={60}/>
                                        </div><br />

                                        <div>Clothes</div>
                                        <br />
                                    </div>
                                </a>
                            </div>

                        </div>

                        {/* smartwatch category */ }
                        <div className="col">
                            <div className="card-category card m-1">
                                <a href="/Metromart/SearchForProducts/3" className="text-white">
                                    <div className="mt-4">
                                        <div className="card-img-top">
                                            <MdOutlineChair size={60}/>
                                        </div><br />

                                        <div>Furniture</div>
                                        <br />
                                    </div>
                                </a>
                            </div>

                        </div>

                        {/* camera category */ }
                        <div className="col">

                            <div className="card-category card m-1">
                                <a href="/Metromart/SearchForProducts/4" className="text-white">
                                    <div className="mt-4">
                                        <div className="card-img-top">
                                            <GiRunningShoe size={ 60 } />
                                        </div><br />

                                        <div>Shoes</div>
                                        <br />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* headphones category */ }
                        <div className="col">

                            <div className="card-category card m-1">
                                <a href="/Metromart/SearchForProducts/5" className="text-white">
                                    <div className="mt-4">
                                        <div className="card-img-top">
                                            <FiHeadphones size={60}/>
                                        </div><br />

                                        <div>Miscellaneous</div>
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
            <Cardsslider title1={ "Last added products" } title2={ "New products" } />
            
            <Cardsslider title1={"People love this"} title2={"Most purchased"}/>
        </div>

    );
}

export default Homesec2;