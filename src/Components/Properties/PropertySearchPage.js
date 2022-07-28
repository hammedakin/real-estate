import React, {  useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { randomProp } from "../Random";
import PropCard from "./PropCard";
import PropertySearch from "./PropertySearch";

const PropertySearchPage = (props) => {
  const [searchproperty] = useState(
    props.location.state.results
  );
let key = useLocation()

  const [newL] = useState(randomProp(searchproperty));


  const property =  newL.map((item, i) => {
          const { img, name, price, token, location, type, bedroom, bathroom } = item
          return (
            <PropCard img={img} name={name} price={price} token={token} location={location} type={type} bedroom={bedroom} bathroom={bathroom} key={i} />
          )
        })

  return (
    <>
      <Navbar />
      <PropertySearch />

      <section class="allproperties">
        <div class="container">
          <div class="">
            <h5>
              
              Availabe Properties from Search - Based on 
              <span className="font-weight-light text-lowercase"> Keyword - "{key.state.keyword}" </span> 
              {key.state.type ? <span className="font-weight-light text-lowercase">, Type - "{key.state.type}" </span> : ''}
              {key.state.bed ? <span className="font-weight-light text-lowercase">, Bedrooms - "{key.state.bed} bedrooms" </span> : ''}
            
        
            </h5>
          </div>

          <div class="row justify-content-center">
          {property}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PropertySearchPage;
