import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LLDirect from "../Components/LandLordDirect/LLDirect"

import img from "../Components/LandLordDirect/img/LLDirect.jpg";

const LandLordDirect = () => {
  return (
    <>
      <Navbar />
      <section class="cls">
        <div class="container">
          <div class="">
            <h3 class="clsh3">LANDLORD DIRECT</h3>
            <div class="col-md-8 ml-auto mr-auto text-center ">
              <img class="" width="60%" src={img} alt="cls_img" />
            </div>

            <LLDirect/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandLordDirect;
