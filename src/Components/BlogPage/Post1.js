import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Post1 = () => {
  return (
    <>
      <section class="blogpost">
        <Navbar />
        <div class="container">
          <div class="crumbs">
          <h6> <Link to="/" class="red-text" >Home</Link>  / <Link to="/blog" class="red-text" >Blog</Link> /  1 - Have you heard ... </h6>
           
          </div>

          <div class="col-md-7 text-justify pink-text">
            <h5>
              {" "}
              Have you heard that some properties now sell for 1Billion Naira as
              in N1, 000,000,000 in Ibadan?{" "}
            </h5>
          </div>
          <hr />
          <div class="text-justify">
            <p>
              There are new realities on the property market within Ibadan. The
              Ibadan you used to know has experienced transformations in just a
              short period.
            </p>

            <p>
              Ibadan is one place you should consider owning a property;
              provided you have done your due diligence and are satisfied with
              your findings.
            </p>

            <p>
              I will attempt to shed light on the current Ibadan property market
              for individuals, corporate investors, those purchasing or leasing
              and even those procrastinating on getting a property within the
              city.
            </p>

            <p>
              Do you think commercial property affect the cost of purchasing and
              renting residential property?
            </p>

            <p>
              The popular commercial stretch of Queen Elizabeth road, which runs
              from the University of Ibadan down to the State Secretariat is a
              major business hub!
            </p>

            <p>
              We have: <br />
              Banks, Major Restaurants: Ola Mummy, Skye Amala, KFC, Chicken
              Republic, Ultima ... <br />
              Major Fuel Station: BOVAS, MOBIL, MRS ... <br />
              Popular Supermarkets: Foodco, Grandex, Zooma, Feedwell ... Office
              Plazas <br />
              Shopping complex <br />
              Telecommunications Office: Airtel, MTN <br />
              The famous Bodija market, and so on... (To be continued)
            </p>

            <p>
              You see, to own a property on this "wall street", you should not
              think anything lower than N120M.
            </p>

            <p>
              With the proposed fourteen (14) floors Radisson blu hotel
              structure which is already on-going and is speculated to relocate
              Ultima restaurant towards the Nigeria custom office; the
              purchasing or leasing figures on that axis is about to further
              shoot.
            </p>

            <p>
              Another major hub on the rise is the stretch from Chicken
              Republic, Idi-Ape junction to Iwo Road. On that main road, you
              should have a budget cap of 70-100M nara only!
            </p>

            <p>
              There's no property on the main road that will sell for less,
              except it's a distress sales. Size and visibility would give room
              for negotiations.
            </p>

            <p>
              Iwo Road - Alakia is taking a major face-lift with the on-going
              bus-terminal construction. The Alakia local Airport recently got
              commendations from FAAN and Catergory 6 status with a naval base
              approval. Talks are on-going to upgrade the airport for
              international flights. With all these on that axis and the popular
              Gbagi market, the Alakia - Iwo Road is one area you might want to
              consider for property investment.
            </p>

            <p>
              Invariably, commercial property pricing affects the market cap for
              residential property- either sales, or letting within the same
              area.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Post1;
<></>;
