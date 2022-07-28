import React from "react";
import { Link } from "react-router-dom";

const PropertyCategories = () => {
  return (
    <>
      <section class="categories">
        <div class="">
          <div class="row justify-content-center">
             
            <div class="col-md-3 col-6">
            <Link to="/properties/houses">
            <div class="card">
                    <h5 class="white-text text-center">HOUSE FOR SALE</h5>
                </div>
              </Link>
               
            </div>

            <div class="col-md-3 col-6">
            <Link to="/properties/rents">
            <div class="card">
                    <h5 class="white-text text-center">HOUSE FOR RENT</h5>
                </div>
              </Link>
               
            </div>

            <div class="col-md-3 col-6">
            <Link to="/properties/lands">
            <div class="card">
                    <h5 class="white-text text-center">LAND FOR SALE</h5>
                </div>
              </Link>
               
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyCategories;
