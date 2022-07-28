import React from "react";
import { Link } from "react-router-dom";
import Post1Header from "../BlogPage/Header/Post1Header"
import PostHeaderSoon from "../BlogPage/Header/PostHeaderSoon";

const HomePageBlogPost = () => {
  return (
    <>
      <section class="blog" id="blog">
        <div class="container">
          <div class="text-center mb-5">
            <h5> BLOG POST  </h5>
              
          </div>

          <div class="row ">
              <Post1Header/>
              <PostHeaderSoon/>
          </div>


          <div class=" view-btn mb-4 mr-auto text-center">
        <Link to="/blog">
          <button type="button" class=" btn btn-pink shadow">
            {" "}
            <strong> View More Blog post </strong>{" "}
          </button>
        </Link>
      </div>
        </div>
      </section>
    </>
  );
};

export default HomePageBlogPost;
