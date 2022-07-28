import React from "react";
import { Link } from "react-router-dom";
import img from "../Header/img/logo.jpeg";

const PostHeaderSoon = () => {
  var sectionStyle = {
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${img})`,
    borderRadius: "2rem"
  };

  return (
    <>

    
      <div class="col-md-6 mb-3">
        <div class="card card-image h-100" style={sectionStyle}>
          <div class="text-white header text-center align-items-center h-100 rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> BLOG{" "}
              </h5>

              <p>
                A New Intresting Blog Post
              </p>
              <a href="#!" class="btn btn-pink">
                <i class="fas fa-clone left"></i> Coming Soon ...
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default PostHeaderSoon;
