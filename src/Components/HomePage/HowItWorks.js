import React from "react";
// import img1 from "./img/Rectangle 5.png";
// import img2 from "./img/Rectangle 6.png";
// import img3 from "./img/Rectangle 7.png";

const HowItWorks = () => {
  return (
    <>
      <section class="howitworks">
        <div class="container">
          <div class="text-center mb-5 ">
            {/* <h3>
              {" "}
              How <span class="abulesowo"> Abulesowo </span>{" "}
              <span class="works"> works</span>{" "}
            </h3> */}
            <h6 class="   ml-auto mr-auto ">
              Abulesowo helps you easily find a home or apartment for rent, Sell
              and buy Land
            </h6>
          </div>

          {/* Card 1  */}

          <div class="card1">
            <div class="row">
              <div class="col-md-6 ">
                {/* <img src={img1} alt="" class="shadow" width="100%" /> */}
              </div>
              <div class="col-md-4 align-self-center ml-auto mr-auto text-center p-5 ">
                <h5>Find a Home or any Apartment you want </h5>
                <p class="my-5 ">
                  Abulesowo helps you easily find a home or apartmen you love
                </p>

                <div
                  class=""
                  style={{ backgroundColor: "#fc4746", padding: "2px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Card 1  */}

          {/* Card 2  */}

          <div class="card2">
            <div class="row">
              <div class="col-md-4 align-self-center ml-auto mr-auto text-center p-5 ">
                <h5>Request to visit Location</h5>
                <p class="my-5 ">
                Abulesowo takes you on a tour inspection to the location Based on you scheduled free time
                </p>

                <div
                  class=""
                  style={{ backgroundColor: "#fc4746", padding: "2px" }}
                ></div>
              </div>
              <div class="col-md-6 ">
                {/* <img src={img2} alt="" class="shadow" width="100%" /> */}
              </div>
            </div>
          </div>

          {/* Card 2  */}


             {/* Card 3  */}

             <div class="card1">
            <div class="row">
              <div class="col-md-6 ">
                {/* <img src={img3} alt="" class="shadow" width="100%" /> */}
              </div>
              <div class="col-md-4 align-self-center ml-auto mr-auto text-center p-5 ">
                <h5>Pay</h5>
                <p class="my-5 ">
                After being satisfied with the Properties you wish to Purchase then You get your official document after payment.
                </p>

                <div
                  class=""
                  style={{ backgroundColor: "#fc4746", padding: "2px" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Card 3  */}


        </div>
      </section>
    </>
  );
};

export default HowItWorks;
