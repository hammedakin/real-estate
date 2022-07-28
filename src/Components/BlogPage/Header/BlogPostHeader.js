import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import img from "../Header/img/IMG_8102.JPG";
import Post1Header from "../Header/Post1Header";
import PostHeaderSoon from "./PostHeaderSoon";

const BlogPostHeader = () => {


  const [allblog, setallblog] = useState([]);
  const [count, setcount] = useState(0)

  const fetchblog = () => {
    const data = {
      apptoken: "ZC20AD91QR",
      action:"36"
    }
    axios
      .get(`https://api.abulesowo.ng/`, {params:data})
      .then((response) => {
        if (response.data.response == "00") {

        console.log(response.data);
        }else {
        setallblog(response.data);

        console.log(response.data);
          
        }
      })
      
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    fetchblog();
  }, [count]);


  const blog = allblog.map((item, i) => {


     // Style
  var sectionStyle = {
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${item.avatar})`,
    borderRadius: "2rem",
  };
  // Style


    return (

      <div class="col-md-6 text-center mb-3">
        <div class="card card-image h-100" style={sectionStyle}>
            <div class="text-white header align-items-center h-100 rgba-black-strong py-5 px-4">
              <div>
                {/* Category  */}
                <h5 class="pink-text"> {item.category} </h5>
                {/* Category  */}

                {/* Title  */}
                <p>
                {item.title}
                </p>
                {/* Title  */}

                {/* Button  */}

                <Link to={`/blog/${item.token}`} class="btn btn-pink">
                   View blog post
                </Link>
                {/* Button  */}
              </div>
            </div>
          </div>
        </div>

    );
  });



  return (
    <>
      <div class="row">
        <Post1Header />

        {blog}

        <PostHeaderSoon/>
      </div>
    </>
  );
};

export default BlogPostHeader;
