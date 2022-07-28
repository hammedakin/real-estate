import React from "react";
import Footer from '../Footer';
import Navbar from '../Navbar';
import PropertySearch from './PropertySearch';
import { listing } from "../PropertyListing";
import PropCard from "./PropCard";
import { useState } from "react";
import { randomProp } from "../Random";

const LandProperty = () => {

  const [newL] = useState(randomProp(listing));

    return ( 
        <>
        <Navbar/>
        <PropertySearch/>


        <section class="allproperties">
        <div class="container">
          <div class="">
            <h5> Lands for Sale </h5>
          </div>

          <div class="row justify-content-center">
              {newL.filter((x) => x.type.includes("land")).map((item, i) => {
                const { img, name, price, token, location, type, bedroom, bathroom } = item
                return (
                  <PropCard img={img} name={name} price={price} token={token} location={location} type={type} bedroom={bedroom} bathroom={bathroom} key={i} />
                )
              })

              }

          </div>
        </div>
      </section>

        <Footer/>
        </>
     );
}
 
export default LandProperty;