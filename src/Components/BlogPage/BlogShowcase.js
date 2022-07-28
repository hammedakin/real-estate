import React from 'react';
import { Link } from 'react-router-dom';


const BlogShowcase = () => {
    return ( 
        <>
     <section class="blogshowcase ">
        <div class="container ">
          <div class="showcase-content about-content">
            <div class=" animated fadeInUp content col-md-8 ml-auto mr-auto ">
              <h1 class="text-center ">
                {" "}
               ABULESOWO BLOG
              </h1>

              <div class="mt-5 text-center">
                {/* <h5> Search properties for rent or sale in Oyo state.</h5> */}
                <h5  > <Link to="/" class="red-text">  Home </Link> / Blog</h5>
              </div>
              </div>
          </div>

           
        </div>
      </section>
        </>
     );
}
 
export default BlogShowcase;