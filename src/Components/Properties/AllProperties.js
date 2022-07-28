import React, { useState } from "react";
import PropertyCategories from "./PropertyCategories";
import { listing } from "../PropertyListing";
import PropCard from "./PropCard";
import { randomProp } from "../Random";

const AllProperties = () => {  

  const [newL] = useState(randomProp(listing));


  return (
    <>
      <section class="allproperties">
        <div class="container-fluid">
          <div class="">
            <h5> PROPERTY CATEGORIES</h5>
            <PropertyCategories />
          </div>

          <div class="mt-5">
            <h5> PROPERTY FOR SALE </h5>
          </div>

          <div class="row justify-content-center">
            {newL.map((item, i)=> {
              const { img, name, price, token, location, type, bedroom, bathroom } = item
              return(
              <PropCard img={img} name={name} price={price} token={token} location={location} type={type} bedroom={bedroom} bathroom={bathroom} key={i}/>
              )
            })

            }
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProperties;
