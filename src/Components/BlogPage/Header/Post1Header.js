import React from "react";
import { Link } from "react-router-dom";
import img from "../Header/img/IMG_8102.JPG";

const Post1Header = () => {
  var sectionStyle = {
    width: "100%",
    // height: "200px",
    backgroundSize: "cover",
    backgroundImage: `url(${img})`,
    borderRadius: "2rem"
  };

  return (
    <>

    
      <div class="col-md-6 mb-3 ">
        <div class="card card-image h-100" style={sectionStyle}>
          <div class="text-white header text-center d-flex align-items-center h-100 rgba-black-strong py-5 px-4">
            <div>
              <h5 class="pink-text">
                <i class="fas fa-chart-pie"></i> Housing{" "}
              </h5>

              <p>
                Have you heard that some properties now sell for{" "}
                <b> 1Billion Naira as in N1, 000,000,000 in Ibadan? </b>
              </p>
              <Link to="/blog/post1" class="btn btn-pink">
                 View blog post
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Post1Header;
