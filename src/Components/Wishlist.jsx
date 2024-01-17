// importing react, useStates and useEffect
import React, { useEffect, useState } from "react";
// importing bootstrap files
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// importing stylesheet
import "../assets/css/Wishlist.css"
// importing react-multi-carousel for the slider
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// importing axios
import axios from "axios";
// wishlist component
function WishList() {
  // responsibility of the slider
  const responsive = {
    hugeScreens: {
      breakpoint: { max: 5000, min: 3000 },
      items: 6
    },
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // setting the products from the api
  const [products, setProducts] = useState([])
  const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setProducts(response.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {/* wishlist and for you list content */}
      <div className="container my-container">
        <div className="row wishlist-row">
          <h4 className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col my-h4 ">Wishlist (4)</h4>
          <button class="col btn btn-outline-dark btn-lg">Move All To Bag</button>
        </div>
        {/* wishlist row */}
        <div className="row">
          {/* dynamic cards from api */}
          {
            products && products.map((item) => {
              return (
                <>
                  {/* first column */}
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-5">
                    {/* the card */}
                    <div className="card my-card">
                      <div>
                        {/* sale button */}
                        <div>
                          <button class="sale btn btn-danger align-self-end">-35%</button>
                        </div>
                        {/* trash icon */}
                        <a href="" class="trash-icon" >
                          <div  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <img class="card-img-top image" src={item.image} alt="Card image cap" />
                      {/* add to cart button */}
                      <div class="card-body my-card-body">
                        <a href="#" class="btn btn-dark text-light w-100">
                          <svg class="cart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                          </svg>
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    {/* price and sale */}
                    <p className="my-p"> <b> {item.title} <br /> <span class="text-danger">$960 &nbsp;<span class="text-secondary"> <del> $1160 </del></span></span></b></p>
                  </div>
                </>
              )
            })
          }
        </div>
        {/* for you row */}
        <div className="row foryou-row">
          <h4 className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col my-h4"><span class="bg-danger space" >&nbsp;&nbsp;</span>    Just For You</h4>
          <button class="col btn btn-outline-dark btn-lg">See All</button>
        </div>
        <div className="row">
          {/* slider */}
          <Carousel responsive={responsive}>
            {/* dynamic cards from api */}
            {
              products && products.map((item) => {
                return (
                  <>
                    {/* column */}
                    <div className="col-10">
                      {/* card */}
                      <div className="card my-card">
                        <div>
                          {/* sale button */}
                          <div>
                            <button class="sale btn btn-danger align-self-end">-35%</button>
                          </div>
                          {/* eye icon */}
                          <a href="" class="eye-icon" >
                            <div  >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                              </svg>
                            </div>
                          </a>
                        </div>
                        <img class="card-img-top image" src={item.image} alt="Card image cap" />
                        {/* add to cart button */}
                        <div class="card-body my-card-body">
                          <a href="#" class="btn btn-dark text-light w-100">
                            <svg class="cart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            Add To Cart
                          </a>
                        </div>
                      </div>
                      <p className="my-p"> <b> {item.title} <br /> <span class="text-danger">$960 &nbsp;<span class="text-secondary"> <del> $1160 </del></span></span></b></p>
                    </div>
                  </>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </>
  )
}
export default WishList;
