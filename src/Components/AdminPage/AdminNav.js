import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

const AdminNav = () => {
  let history = useHistory();

  const HandleLogout = () => {
    history.push("/home");
    localStorage.removeItem("admintoken");
    localStorage.removeItem("adminname");
    localStorage.removeItem("adminmail");
    localStorage.removeItem("alert");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
        <div class="container">
          <Link to="/admindashboard" className="navbar-brand">
            <h5>
              {" "}
              ABULESOWO <span class="h6 red">admin</span>{" "}
            </h5>
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
            <ul class="navbar-nav ml-auto mr-auto text-center animated fadeInUp">
              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1 "
                  to="/admindashboard"
                >
                  DASHBOARD
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
                  UPLOAD
                </a>
                <div
                  class="dropdown-menu dropdown-secondary text-center"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink
                    tag={Link}
                    activeClassName="active1"
                    to="/admin/property-upload"
                  >
                    PROPERTY
                  </NavLink>
                  <NavLink
                    tag={Link}
                    activeClassName="active1"
                    to="/admin/blog-upload"
                  >
                    BLOG
                  </NavLink>
                </div>
              </li>

              <li class="nav-item ">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/admin/property-update"
                >
                  ALL PROPERTIES
                </NavLink>
              </li>

              <li class="nav-item ">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/admin/blog-update"
                >
                  ALL BLOGS
                </NavLink>
              </li>
            </ul>
            <ul class="navbar-nav text-center">
              <a onClick={HandleLogout}>
                <li>
                  <button type="btn" class="btn shadow">
                    LOGOUT
                  </button>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
