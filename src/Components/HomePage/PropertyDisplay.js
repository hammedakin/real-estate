import React, { useRef, useState, useEffect } from "react";
// import Glide, { Slide } from "react-glidejs";
// import "react-glidejs/dist/index.css";

import { listing } from "../PropertyListing";
import PropCard from "../Properties/PropCard";
import { randomProp } from "../Random";

const PropertyDisplay = () => {
 
  // Glide
  // const gliderRef = useRef(null);
  // Glide

const [newL] = useState(randomProp(listing, 3));
  return (
    <>
      <section class="allproperties">
        <div class="container">
          <div class="">
            <h5> AVAILABLE PROPERTIES </h5>
          </div>

          <div class="row justify-content-center">
            {newL.map((item, i) => {
              const { img, name, price, token, location, type, bedroom, bathroom } = item
              return (
                <PropCard img={img} name={name} price={price} token={token} location={location} type={type} bedroom={bedroom} bathroom={bathroom} key={i} />
              )
            })
            }

            {/* <Glide
              ref={gliderRef}
              startAt={0}
              perView={2}
              type="carousel"
              hoverPause="true"
              gap={20}
              autoplay={5000}
              animationDuration={2000}
              animationTimingFunc="ease"
              slideClassName="slider__frame"
              breakpoints={{
                1000: {
                  perView: 2,
                },
                768: {
                  perView: 1,
                },
              }}
            >
              {allproducts}
            </Glide> */}
            </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDisplay;
