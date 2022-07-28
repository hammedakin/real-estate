import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.jpeg";
const Navbar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
        <div class="container">
          <Link to="/home" className="navbar-brand">
            <img src={logo} width="50%" alt="logo" loading="lazy" />
          </Link>

          <a
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon toggler">
              <box-icon
                class="box-icon"
                size="2rem"
                color=" #FC4746"
                name="menu"
                type="logo"
              ></box-icon>
            </span>
          </a>

          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav mr-auto text-center animated fadeInUp">
              <li class="nav-item">
                <NavLink tag={Link} activeClassName="active1 " to="/home">
                  HOME
                </NavLink>
              </li>


              <li class="nav-item dropdown ml-auto mr-auto">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  REQUEST
                </a>
                <div
                  class="dropdown-menu dropdown-secondary text-center"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink
                    tag={Link}
                    activeClassName="active2 mb-1"
                    to="/property/request"
                    
                  >
                    Visit
                  </NavLink>
                  <NavLink
                    tag={Link}
                    activeClassName="active2"
                    to="/consulting"
                    id="con"
                  >
                    Consulting
                  </NavLink>
                
                </div>
              </li>


              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/properties/houses"
                >
                  SALE
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/properties/rents"
                >
                  RENT
                </NavLink>
              </li>


             

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/blog"

                >
                  BLOG
                </NavLink>
              </li>
            </ul>
            <ul class="navbar-nav text-center animated fadeInRight">
              <Link to="/contact">
                <li class=" btn-contact">
                  <button type="btn" class="btn shadow">
                    contact us
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
