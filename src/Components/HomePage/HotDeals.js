import React, {useState} from "react";
import img1 from "./img/logo.jpeg";
import PropCard from "../Properties/PropCard";
import { listing } from "../PropertyListing";
import { randomProp } from "../Random";

const HotDeals = () => {
  const [newL] = useState(randomProp(listing));

  const property = newL.filter((x) => x.hotdeals.includes("1")).map((item, i) => {
          const { img, name, price, token, location, type, bedroom, bathroom } = item
          return (
            <div class="carousel-item ">
         
            <PropCard img={img} name={name} price={price} token={token} location={location} type={type} bedroom={bedroom} bathroom={bathroom} key={i} />
      </div>
          )
        })

        
 

  return (
    <>
      <section class="allproperties">
        <div class="container">
          <div class="">
            <h5> HOT DEALS!!! </h5>
          </div>

          <div
            id="carousel-example-1z"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carousel-example-1z"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carousel-example-1z" data-slide-to="1"></li>
              <li data-target="#carousel-example-1z" data-slide-to="2"></li>
              <li data-target="#carousel-example-1z" data-slide-to="3"></li>
              <li data-target="#carousel-example-1z" data-slide-to="4"></li>
              <li data-target="#carousel-example-1z" data-slide-to="5"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
              <div class="">
                <div class="carousel-item active ">
                  <div class="col-md-6 col-xl-6 col-lg-6 mb-4 ml-auto mr-auto">
                    <div class="card h-100">
                      <div class="view overlay">
                        <img
                          src={img1}
                          alt="abulesowo-hotdeals"
                          class="card-img-top img-fluid"
                          width="100%"
                        />
                        <a>
                          <div class="mask rgba-red-slight"></div>
                          <div class="mask1 ">
                            <span class="py-2 ml-2 ">
                              <p class="font-weight-light deals red-text animated zoomIn slow infinite">
                                {" "}
                                Hot Deals{" "}
                              </p>
                            </span>
                          </div>
                        </a>
                      </div>

                      <div class="card-body">
                        <h5 class="mt-3 text-center">ABULESOWO HOTDEALS</h5>
                      </div>
                    </div>
                  </div>
                </div>

                {property}
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#carousel-example-1z"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-example-1z"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotDeals;
