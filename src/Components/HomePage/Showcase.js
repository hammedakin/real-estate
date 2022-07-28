import React from "react";
import PropertySearch from "../Properties/PropertySearch";

const Showcase = () => {
  return (
    <>
      <section class="showcase ">
        <div class="container ">
          <div class="showcase-content ">
            <div class=" animated fadeInUp content col-md-8 ml-auto mr-auto ">
              <h1 class="text-left ">
                {" "}
                Let’s find a home that’s perfect for you
              </h1>

              <div class="mt-5">
                <h5> Search properties for rent or sale in Oyo state.</h5>
              </div>
              </div>
          </div>

            

              <PropertySearch/>
           
        </div>
      </section>
    </>
  );
};

export default Showcase;
