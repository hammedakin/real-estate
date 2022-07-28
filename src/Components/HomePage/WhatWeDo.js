import React from "react";
import { Link } from "react-router-dom";
// import img1 from "./img/IMG_8068.JPG";
import img2 from "./img/IMG_8080.JPG";
import img3 from "./img/IMG_8093.JPG";
import img4 from "./img/IMG_8102.JPG";
import img5 from "./img/Abuleinvest.jpg";
import img6 from "./img/Landlord Direct.jpg";
import img7 from "./img/Sell It.jpg";
import cls from "./img/CLS Identity logo.png";

const WhatWeDo = () => {
  return (
    <>
      <section class="whatwedo">
        <div class="container">
          <div class="text-center text-uppercase mb-5">
            <h3>
              <span class="here  "> What </span> we do
            </h3>
          </div>
          <div class="text-center ml-auto mr-auto text-justify col-md-9 mb-3">
            <p>
              We advise property owners, investors and operators on how to
              optimize project investments, enhance asset value and maximize
              profitability.
              <Link to="/about#whatwedo">
                {" "}
                <span class="">
                  {" "}
                  <i> read more </i>
                </span>{" "}
              </Link>
            </p>
          </div>
          <div class="row justify-content-center">
            {/* CLS Page  */}

            <div class="col-md-5 mb-3 ">
              <Link to="/cls">
                <div class="card black-text h-100">
                  <div class="">
                    <img src={cls} alt="" class="" width="100%" />
                  </div>
                  <div class="card-body pt-5 pb-5 hoverable">
                    <h5 class="mb-5">
                      <span class="mr-2">
                        <box-icon
                          class="box-icon"
                          size="15px"
                          color=" #393939"
                          name="message-rounded-edit"
                          type="solid"
                        ></box-icon>
                      </span>
                      COLE’S LAND SCHEME (C.L.S)
                    </h5>
                    <p>
                      COLE’S LAND SCHEME (C.L.S) Is Abulesowo’s service product.
                    </p>
                  </div>

                  <div class="card-footer text-center">
                    <h6>
                      <span class="mr-2">
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name=""
                          type="logo"
                        ></box-icon>
                      </span>
                      VISIT PAGE
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* CLS Page  */}

            {/* Abule Invest Page  */}

            <div class="col-md-5 mb-3 ">
              <Link to="/abule-invest">
                <div class="card black-text h-100">
                  <div class="">
                    <img src={img5} alt="" class="" width="100%" />
                  </div>
                  <div class="card-body pt-5 pb-5 hoverable">
                    <h5 class="mb-5">
                      <span class="mr-2">
                        <box-icon
                          class="box-icon"
                          size="15px"
                          color=" #393939"
                          name="message-rounded-edit"
                          type="solid"
                        ></box-icon>
                      </span>
                      ABULE INVEST
                    </h5>
                    <p>
                      Abule-Invest makes real estate investments accessible to
                      everyone in a way that is simple, secure and profitable.
                    </p>
                  </div>

                  <div class="card-footer text-center">
                    <h6>
                      <span class="mr-2">
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name=""
                          type="logo"
                        ></box-icon>
                      </span>
                      VISIT PAGE
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* Abule Invest Page  */}

            {/* Landlord Direct Page  */}

            <div class="col-md-5 mb-3 ">
              <Link to="/landlord-direct">
                <div class="card black-text h-100">
                  <div class="">
                    <img src={img6} alt="" class="" width="100%" />
                  </div>
                  <div class="card-body pt-5 pb-5 hoverable">
                    <h5 class="mb-5">
                      <span class="mr-2">
                        <box-icon
                          class="box-icon"
                          size="15px"
                          color=" #393939"
                          name="message-rounded-edit"
                          type="solid"
                        ></box-icon>
                      </span>
                      LANDLORD DIRECT
                    </h5>
                    <p>
                    Landlord Direct is a solution project of AbulesowoNG adding value to intending tenant, land or property purchaser to reduce, cut away unnecessary bickering and bottlenecks with Agents.  
                    </p>
                  </div>

                  <div class="card-footer text-center">
                    <h6>
                      <span class="mr-2">
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name=""
                          type="logo"
                        ></box-icon>
                      </span>
                      VISIT PAGE
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* Landlord Direct Page  */}

           {/* Abule Sell It Page  */}

           <div class="col-md-5 mb-3 ">
              <Link to="/properties">
                <div class="card black-text h-100">
                  <div class="">
                    <img src={img7} alt="" class="" width="100%" />
                  </div>
                  <div class="card-body pt-5 pb-5 hoverable">
                    <h5 class="mb-5">
                      <span class="mr-2">
                        <box-icon
                          class="box-icon"
                          size="15px"
                          color=" #393939"
                          name="message-rounded-edit"
                          type="solid"
                        ></box-icon>
                      </span>
                      SELL IT
                    </h5>
                    <p>
                    Abule Sell It is a solution project of AbulesowoNG adding value to intending tenant, land or property purchaser to reduce, cut away unnecessary bickering and bottlenecks with Agents.  
                    </p>
                  </div>

                  <div class="card-footer text-center">
                    <h6>
                      <span class="mr-2">
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name=""
                          type="logo"
                        ></box-icon>
                      </span>
                      VISIT PAGE
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* Abule Sell It Page  */}


            
            {/* Buy a Land  */}

            {/* <div class="col-md-5 mb-3">
              <div class="card h-100">
                <div class="">
                  <img src={img5} alt="" class="" width="100%" />
                </div>
                <div class="card-body pt-5 pb-5 hoverable">
                  <h5 class="mb-5">
                    
                    <span class="mr-2">
                      
                      <box-icon
                        class="box-icon"
                        size="15px"
                        color=" #393939"
                        name="current-location"
                        type="solid"
                      ></box-icon>
                    </span>
                    BUY A LAND
                  </h5>
                  <p>
                    
                    With over 1 million houses for sale, all available on
                    Abulesowo website
                  </p>
                </div>
                <Link to="/properties/lands">
                
                <div class="card-footer text-center">
                  <h6>
                    
                    <span class="mr-2">
                      
                      <box-icon
                        class="box-icon"
                        size="12px"
                        color=" #fff"
                        name="search-alt-2"
                        type="logo"
                      ></box-icon>
                    </span>
                    SEARCH LANDS
                  </h6>
                </div>
</Link>
              </div>
            </div> */}

            {/* Buy a Land  */}

            {/* Consulting Service  */}
            {/* 
            <div class="col-md-5 mb-3 ">
              <Link to="/consulting">
                <div class="card black-text h-100">
                  <div class="">
                    <img src={img2} alt="" class="" width="100%" />
                  </div>
                  <div class="card-body pt-5 pb-5 hoverable">
                    <h5 class="mb-5">
                      
                      <span class="mr-2">
                        
                        <box-icon
                          class="box-icon"
                          size="15px"
                          color=" #393939"
                          name="message-rounded-edit"
                          type="solid"
                        ></box-icon>
                      </span>
                      CONSULTING SERVICES
                    </h5>
                    <p>
                      
                      Abulesowo can help you easily find a home apartment for
                      rent that you’ii love
                    </p>
                  </div>

                  <div class="card-footer text-center">
                    <h6>
                      
                      <span class="mr-2">
                        
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name="envelope"
                          type="logo"
                        ></box-icon>
                      </span>
                      WRITE TO US
                    </h6>
                  </div>
                </div>
              </Link>
            </div> */}

            {/* Consulting Service  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
