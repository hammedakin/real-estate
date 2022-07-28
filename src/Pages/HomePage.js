import React from "react";
import Showcase from "../Components/HomePage/Showcase";
import WhatWeDo from "../Components/HomePage/WhatWeDo";
import HotDeals from "../Components/HomePage/HotDeals";
import BlogPost from "../Components/HomePage/HomePageBlogPost";
import HowItWorks from "../Components/HomePage/HowItWorks";
import Testimonials from "../Components/CLSpage/Testimonials"
import PropertyDisplay from "../Components/HomePage/PropertyDisplay";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div id="top"></div>
      <Showcase />
      <PropertyDisplay />
      <div class=" view-btn mb-4 mr-auto text-center">
        <Link to="/properties">
          <button type="button" class=" btn shadow">
            {" "}
            <strong> View More Properties </strong>{" "}
          </button>
        </Link>
      </div>
      <WhatWeDo />

      <div class=" view-btn mb-4 mr-auto text-center">
        <Link to="/about">
          <button type="button" class=" btn shadow">
            {" "}
            <strong> More About Abulesowo </strong>{" "}
          </button>
        </Link>
      </div>

      <HotDeals/>
      <BlogPost/>
      <Testimonials />
      {/* <HowItWorks /> */}
      <Footer/>
    </>
  );
};

export default Home;
