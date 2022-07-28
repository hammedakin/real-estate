import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import PropertySearch from "../PropertySearch";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import bathhub from "./img/bathtub.svg";
import car from "./img/car.svg";
import bed from "./img/bed.svg";
import calendar from "./img/calendar.svg";
import home from "./img/home.svg";
import locationy from "./img/location.svg";
import pricey from "./img/price.svg";
import drag from "./img/drag.svg";
import { listing } from "../../PropertyListing";
import Back from "../../Back";

const Property = () => {

  const { propstoken } = useParams()

  const [item] = listing.filter((x) => x.token.includes(propstoken))
  const { img, name, price, token, location, type, bedroom, bathroom, toilet, sqrmeter, parking, yearbuilt, desc } = item

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{`Abulesowo - ${name}`}</title>
        <link rel="icon" src={img1} />
        <meta name="description" content={`${desc}`} />
      </Helmet> */}
      <Navbar />
      <PropertySearch />
      <section class="property">
        <div class="container">
          <Back/>

          <div class="card">
            <div class="row align-items-center">
              <div class="col-md-6">
                {/* carousel for the Images  */}
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={img} alt={name} />
                    </div>
                    {/* <div class="carousel-item">
                      <img class="d-block w-100" src={img2} alt={name} />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={img3} alt={name} />
                    </div> */}
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
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
                    href="#carouselExampleControls"
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
              {/* carousel for the Images  */}

              {/* Other Details */}
              <div class="col-md-6">
                <div class="card-body">
                  <p class="description badge badge-danger text-capitalize">
                  Property Type: {type}
                  </p>
                  <p class="description">
                    <span>
                      <img src={home} width="7%" />{" "}
                    </span>{" "}
                    {name}
                  </p>

                  <p class="amount">
                    <span>
                      <img src={pricey} width="7%" />{" "}
                    </span>
                    ₦ {price}
                  </p>

                  <p class="address">
                    <span>
                      <img src={locationy} width="7%" />{" "}
                    </span>

                    {location}
                  </p>
                  <div class="row justify-content-center ">
                    <div class="col col-8">
                      <Link to={`/property/visit/${token}`}>
                        <button class="btn float-right ">
                          I AM INTERESTED{" "}
                        </button>
                      </Link>
                    </div>
                    <div class="col col-3">
                      <a
                        href={`https://wa.me/2348062474043?text=I saw this property *${name}*, located at *${location}* with price *${price}* on abulesowo website. I want to make enqiury about it.`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <box-icon
                          class="box-icon float-left"
                          size="55px"
                          color="#049604"
                          name="whatsapp-square"
                          type="logo"
                        ></box-icon>
                      </a>
                    </div>
                  </div>

                  <p class="add-ons">
                    <ul>
                      <li>
                        {yearbuilt ? (
                          <>
                            <span>
                              <img src={calendar} width="7%" />{" "}
                            </span>
                            Year Built:{" "}
                            <span class="font-weight-bolder">{yearbuilt}</span>
                          </>
                        ) : (
                          <>
                          </>
                        )}
                      </li>

                      <li>
                        {toilet ? (
                          <>
                            <span>
                              <img src={bathhub} width="7%" />{" "}
                            </span>
                            Toilets:{" "}
                            <span class="font-weight-bolder"> {toilet}</span>
                          </>
                        ) : (
                          <>
                          </>
                        )}
                      </li>

                      <li>
                        {bathroom ? (
                          <>
                            <span>
                              <img src={bathhub} width="7%" />{" "}
                            </span>
                            Bathrooms:{" "}
                            <span class="font-weight-bolder"> {bathroom}</span>
                          </>
                        ) : (
                          <>
                          </>
                        )}
                      </li>

                      <li>
                        {bedroom ? (
                          <>
                            <span>
                              <img src={bed} width="7%" />{" "}
                            </span>
                            Bedrooms:{" "}
                            <span class="font-weight-bolder"> {bedroom}</span>
                          </>
                        ) : (
                          <>
                          </>
                        )}
                      </li>

                      <li>
                        {parking ? (
                          <>
                            <span>
                              <img src={car} width="7%" />{" "}
                            </span>
                            Parking Space:{" "}
                            <span class="font-weight-bolder"> {parking}</span>
                          </>
                        ) : (
                          <>
                          </>
                        )}
                      </li>

                      <li>
                        {sqrmeter ? (
                          <>
                            <span>
                              <img src={drag} width="7%" />{" "}
                            </span>
                            Area Covered:{" "}
                            <span class="font-weight-bolder"> {sqrmeter}</span>
                          </>
                        ) : (
                          <>
                          </>
                        )}
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* Other Details */}
            </div>
            <div class="text-justify col-md-8 ml-auto mr-auto">
              <hr />

              <span class="mt-3">
                <img src={home} width="4%" /> <b> DESCRIPTION</b>{" "}
              </span>
              <pre>{desc}</pre>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Property;
