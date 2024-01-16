// importing react
import React from "react";
// importing css file
import "../assets/css/LastSection.css";
// importing bootstrap files
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// importing images
import img1 from "../assets/images/ps5-slim-goedkope-playstation_large 1.png";
import img2 from "../assets/images/attractive-woman-wearing-hat-posing-black-background 1.png";
import img3 from "../assets/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import img4 from "../assets/images/652e82cd70aa6522dd785109a455904c.png";
// Last section component
function LastSection(){
  return(
    <>
    {/* page's container */}
    <div className="container my-container">
        {/* Featured row */}
      <div className="row featured-row">
        <h4><span class="bg-danger space">&nbsp;&nbsp;&nbsp;</span>Featured</h4>
      </div>
      {/* new arrival header */}
      <div className="row new-arrival-row">
          <h1>New Arrival</h1>
      </div>
      {/* the whole row of images  */}
      <div className="row">
        {/* the biggest image and first column */}
        <div className="col-sm-12 col-md-12 col-lg-6">
          <img src={img1} className="big"/>
          {/* the text info on the image */}
          <div className="img-info">
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5<br/> coming out on sale.</p>
            {/* the shop now link */}
            <a className="link" href=""><u>Shop Now</u></a>
          </div>
        </div>
        {/* the second column */}
        <div className="col">
            {/* the medium image and the first image in the second column */}
          <div className="row ">
            <div className="col">
              <img src={img2} className="medium"/>
              {/* the text info on the image */}
              <div className="img-info">
                <h2>Women's Collections</h2>
                <p>Featured women's collections that<br/>give you another vibe.</p>
                {/* the shop now link */}
                <a className="link" href=""><u>Shop Now</u></a>
              </div>
            </div>
          </div>
          {/* the second row in the second column and the two smallest images */}
          <div className="row ">
            <div className="col-sm-12 col-md-6">
              <img src={img3} className="small"/>
              {/* the text info on the image */}
              <div className="img-info">
                <h2>Speakers</h2>
                <p>Amazon wireless speakers</p>
                {/* the shop now link */}
                <a className="link" href=""><u>Shop Now</u></a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src={img4} className="small"/>
              {/* the text info on the image */}
              <div className="img-info">
                <h2>Perfume</h2>
                <p>GUCCI INTENSE OUD EDP</p>
                {/* the shop now link */}
                <a className="link" href=""><u>Shop Now</u></a>
              </div>           
            </div>
          </div>
        </div>
      </div>
    {/* the second row which contains the icons and text */}
      <div className="row last-row">
        {/* first column (fast delivery) */}
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="icons-div">
            <div className="icons">
                <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="icon-delivery" clip-path="url(#clip0_261_4843)">
                    <path id="Vector" d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_3" d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_4" d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_5" d="M5 11.8182H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_6" d="M1.81836 15.4545H8.48503" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_7" d="M5 19.0909H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_261_4843">
                    <rect width="35" height="35" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
          </div>
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        {/* second column (customer services) */}
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="icons-div">
            <div className="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
            </svg>
            </div>
          </div>
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        {/* third column (Money back) */}
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="icons-div">
            <div className="icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
              </svg>
            </div>
          </div>
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default LastSection;