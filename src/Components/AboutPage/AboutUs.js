import React from "react";
import house from "./img/house.svg";

const AboutUs = () => {
  return (
    <>
      <section class="aboutus">
        <div class="">
          <div class="">
            <div class="col-md-11 ml-auto mr-auto">
              <div class="row justify-content-center">
                <div class="">
                  <img src={house} width="150" />
                </div>
              </div>
              <h4 class="text-center"> ABOUT US </h4>
              <h6 class="text-justify">
                {" "}
                Abulesowo is the Yoruba meaning “literally turn earth (real
                estate /property) into wealth” typifying what we represent, the
                foremost property hub and leading real-estate company, being the
                most trusted property marketplace with comprehensive listings
                for sale, rent, lease, development and construction within the
                ancient city of Ibadan, Oyo state. We give every property
                seekers or broker a level playing field to display or choose
                from our catalogue of property offers, ranging from homes,
                houses, lands, shops, office spaces, warehouses and other
                commercial property for their use.{" "}
              </h6>
              <h4 class="text-center" id="whatwedo"> WHAT WE DO </h4>

              <h6 class="text-justify">
                We advise property owners, investors and operators on how to
                optimize project investments, enhance asset value and maximize
                profitability. We also build, develop, sell and manage
                properties based on customer’s needs. Our range of services also
                extend from standard furnished apartments to serviced apartment
                for rents, branded estates and other real estate related
                entities. AbulesowoNG has a substantial out-of-state experience,
                having advised prominent owners and investors in estate
                development and building.
              </h6>

              <h4 class="text-center"> WHY US? </h4>

<h6 class="text-justify">
We deliver our clients extensive real estate experience using innovative and creative tailor-made solutions. 
We are flexible using our client-focused approach with personal service.

</h6>

              {/* <h6 class="text-center">
                {" "}
                Abulesowo.ng is the first and leading real-estate website for the pace-setting OYO State, being the most trusted property marketplace with the most comprehensive property listings for sale, rent and lease in the ancient city.{" "}
              </h6>

              <h6 class="text-center">
               
                Abulesowo.ng gives every property seekers or broker a level playing field to display or choose from our catalogue of property, ranging from homes, houses, lands, shops, office spaces, warehouses and other commercial property for their use.
              </h6> */}
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 aaa">
              <h6 class="text-left ">
                {" "}
                Abulesowo.ng combines the integrity, reliability & peace-of-mind
                of well experienced realtors with cutting-edge technology to
                provide you with an exceptional experience in your property
                search.{" "}
              </h6>
            </div>
            <div class="col-md-6 bbb">
              <h6 class="text-right ">
                {" "}
                Our affiliation with strategic ministry and security agency,
                eases out the burden of fraudulent practice within the property
                sphere of Oyo state.{" "}
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
