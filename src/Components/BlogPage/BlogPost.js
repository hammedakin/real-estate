import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BlogPost = (props) => {

  const [title, settitle] = useState("");
  const [token, settoken] = useState("");
  const [content, setcontent] = useState("");
  const [avatar, setavatar] = useState("");
  const [category, setcategory] = useState("");

  const fetchBlog = () => {
    const data = {
      apptoken: "ZC20AD91QR",
      action: "36.1",
      token: props.match.params.token,
    };
    axios
      .get(`https://api.abulesowo.ng/`, { params: data })
      .then((response) => {
        if (response.data.response == "00") {
          console.log(response.data);
        } else {
          settitle(response.data.title);
          setcategory(response.data.category);
          settoken(response.data.token);
          setcontent(response.data.content);
          setavatar(response.data.avatar);

          console.log(response.data);
        }
      });
  };
  useEffect(() => {
    fetchBlog();
  }, 0);
  console.log(props);



  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{`Abulesowo Blog - ${title}`}</title>
        <link rel="icon" src={avatar} />
        <meta name="description" content={`${content}`} />
      </Helmet> */}
        <Navbar />

      <section class="blogpost">
        <div class="container">
          <div class="crumbs">
            <h6> <Link to="/" class="red-text" >Home</Link>  / <Link to="/blog" class="red-text" >Blog</Link> / {title} </h6>
          </div>

          <div class="col-md-7 text-justify pink-text">
            <h5>
              {" "}
              {title}{" "}
            </h5>
          </div>
          <hr />
          <div class="text-justify">
            <pre>
            {content}
            </pre>

          
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;
<></>;
