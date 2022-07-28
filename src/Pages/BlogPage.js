import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BlogShowcase from "../Components/BlogPage/BlogShowcase";
import BlogPostHeader from "../Components/BlogPage/Header/BlogPostHeader";
import Post1Header from "../Components/BlogPage/Header/Post1Header";

const BlogPage = () => {
  return (
    <>
      <Navbar />
    <BlogShowcase/>
      <section class="blogpage">
        <div class="container">
          <div class="mb-5">
            <h3 class="clsh3">BLOG PAGE</h3>
            <div class="col-md-8 ml-auto mr-auto text-center ">
             <h6>You can read all our blog here.</h6>
            </div>

          </div>


            <BlogPostHeader/>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
