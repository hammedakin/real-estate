import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Testimonials from "../Components/CLSpage/Testimonials";
import ClsAvailable from "../Components/CLSpage/Clsavailable"
import ClsSoldOut from "../Components/CLSpage/ClsSoldOut"
import img from "../Components/CLSpage/img/CLS Identity logo.png"

const ClsPage = () => {
  return (
    <>
      <Navbar />

      <section class="cls">
    <div class="container">
        <div class="">
            <h3 class="clsh3">
            COLE’S LAND SCHEME (C.L.S)
            </h3>
            <div class="col-md-8 ml-auto mr-auto text-center ">
              <img class="" width="30%" src={img} alt="cls_img" />
            </div>

            <div class="mt-4  ml-auto mr-auto text-center col-md-8 ">
              <h6>
              COLE’S LAND SCHEME (C.L.S) Is  Abulesowo’s  service product, primarily designed to allow corporate bodies, individuals acquire genuine  land for residential, commercial, or investment purposes within Ibadan Metropolis, free from omo onile or litigation issues.
              </h6>
            </div>
        </div>

      <ClsAvailable/>
      <ClsSoldOut/>

    </div>
</section>
      <Testimonials/>
      <Footer />
    </>
  );
};

export default ClsPage;
