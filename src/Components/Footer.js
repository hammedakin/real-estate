import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <footer class="page-footer font-small">
          <div class="container text-center text-md-left mb-5 pt-5">
            <div class="row">
              <div class="col-md-3 mx-auto">
                <h5 class=" mt-3 mb-4">Ready to get started?</h5>
                <Link to="/properties">
                  <button class="btn "> Get Started</button>
                </Link>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/abulesowong?ref_src=twsrc%5Etfw"
                  class="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @abulesowong
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-2 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">Services</h6>

                <ul class="list-unstyled">
                  <li>
                    <Link to="/properties/houses">Buy Houses</Link>
                  </li>
                  <li>
                    <Link to="/properties/rents">Rent an Apartmment</Link>
                  </li>
                  <li>
                    <Link to="/properties/lands">Buy Land</Link>
                  </li>
                  <li>
                    <Link to="/consulting">Request Consulting</Link>
                  </li>
                  <li>
                    <Link to="/property/request">Request a Visit</Link>
                  </li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-2 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">About</h6>

                <ul class="list-unstyled">
                  <li>
                    <Link to="/about">Our Story </Link>
                  </li>
                  <li>
                    <Link to="/">Benefits</Link>
                  </li>
                  <li>
                    <Link to="/privacy-and-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">Terms & Conditions </Link>
                  </li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-3 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">Contact Us</h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">
                      <span class="mr-2">
                        {" "}
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name="location-plus"
                          type="solid"
                        ></box-icon>
                      </span>
                      26, Ladoke Akintola, Bodija.{" "}
                    </a>
                  </li>
                  <li>
                    <a href="tel:+2348062474043">
                      <span class="mr-2">
                        {" "}
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name="phone"
                          type="solid"
                        ></box-icon>
                      </span>
                      +234 80 6247 4043{" "}
                    </a>
                  </li>

                  <li>
                    <a href="mailto:info@abulesowo.ng">
                      <span class="mr-2">
                        {" "}
                        <box-icon
                          class="box-icon"
                          size="12px"
                          color=" #fff"
                          name="envelope"
                          type="solid"
                        ></box-icon>
                      </span>
                      info@abulesowo.ng{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div class="ml-auto mr-auto">
                <h6 class="font-weight-bold white-text text-center mt-3 mb-4">
                  CONNECT WITH US
                </h6>
                <div class="text-center mb-3 boxicons">
                  <a
                    href="https://www.facebook.com/AbulesowoNG/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      type="logo"
                      name="facebook"
                    ></box-icon>
                  </a>

                  <a href="https://instagram.com/abulesowo.ng?utm_medium=copy_link">
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="instagram"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="https://twitter.com/AbulesowoNG?s=08"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="twitter"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="https://youtube.com/channel/UC0vSXXkEMpc4rw74Rl2bB9w"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="youtube"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="https://g.page/abulesowoNG?ad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="google-plus"
                      type="logo"
                    ></box-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright white black-text text-center py-3">
            Copyright © 2021{" "}
            <a href="#" class="red-text ">
              {" "}
              Abulesowo NG{" "}
            </a>{" "}
            || All rights reserved

          <hr class="my-1 w-50"/>

          <div style={{fontSize: "smaller"}}>
              Developed with <span className="red-text">
                ❤ </span>by
            <a href="https://hammedakin.xyz" class="red-text ">
              {" "}
              hammedakin.xyz{" "}
            </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
