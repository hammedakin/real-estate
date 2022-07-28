import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AllProperties from "../Components/Properties/AllProperties"
import PropertySearch from "../Components/Properties/PropertySearch";

const PropertyPage = () => {
  return (
    <>
    <Navbar/>
      <section class="propertypage">
       
      {/* Property Search  */}
      
        <PropertySearch/>

      {/* Property Search  */}


      {/* All Properties */}

        <AllProperties/>

      {/* All Properties */}
   
      </section>
      <Footer/>
    </>
  );
};

export default PropertyPage;
