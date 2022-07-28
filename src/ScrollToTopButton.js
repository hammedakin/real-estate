import React from "react";

const ScrollTopTopButton = () => {
  return (
    <>


    <div class="scrollup">
      <a href="#top">
        <button onclick="topFunction()" id="myBtn" class="btn" title="Go to top">
          {" "}
          <box-icon
            class="box-icon"
            size="30px"
            color=" #fff"
            name="chevron-up"
            type="solid"
            
          ></box-icon>
        </button>
      </a>
      </div>
    </>
  );
};

export default ScrollTopTopButton;
