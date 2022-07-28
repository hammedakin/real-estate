import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RequestAVisit2 = (props) => {
  // const [propstoken, setpropstoken] = useState(props.propstoken);
  const [propsname, setpropsname] = useState("");
  const [propslocation, setpropslocation] = useState("");
  const [visittype, setvisittype] = useState("");
  const [username, setusername] = useState("");
  const [userlocation, setuserlocation] = useState("");
  const [usermail, setusermail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");


  function SendRequestForm(e) {
    if (username && usermail && userlocation && phone && message) {
      setissending(true)
      setTimeout(() => {
        setshowalert(true);
        setusername("");
        setuserlocation("");
        setusermail("");
        setphone("");
        setvisittype("0");
        setpropsname("");
        setpropslocation("");
        setmessage("");
        setalert('SENT!!!');
        setissending(false);
      }, 2500);
    } else {
      setissending(false)
      setshowalert(true)
      setalert('Not Sent, Check Fields')
    }
    e.preventDefault();
  }

  function SendWhatsapp(e) {
    if ((username && usermail && userlocation && phone && message)) {
      setshowalert(true);
      window.open(`https://wa.me/2348062474043?text=I want to Request a Visit on a Property I saw on your website. `, '_blank')
    } else {
      setshowalert(true)
      setalert('Check Fields')
    }
    e.preventDefault();
  }


  return (
    <>
      <Navbar />
      <section class="requestavisit">
        <div class="container">
          <div class="mt-5">
            <h3 class="text-center">REQUEST A VISIT </h3>

            <div class="">
           
              <form enctype="multipart/form-data">
                <div class="col-md-10 ml-auto mr-auto ">
                  <div class=" mb-5">
                    <div class=" mt-5 ">
                      <h6 class="font-weight-bold">
                        Please, fill out the form below so to request a property
                        visit !{" "}
                      </h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label> Full Name </label>

                      <div class="input-group mb-4">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setusername(e.target.value)}
                          value={username}
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <label> Phone Number </label>

                      <div class="input-group mb-4">
                        <input
                          type="number"
                          class="form-control"
                          onChange={(e) => setphone(e.target.value)}
                          value={phone}
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <label> E-mail </label>

                      <div class="input-group mb-4">
                        <input
                          type="email"
                          class="form-control"
                          onChange={(e) => setusermail(e.target.value)}
                          value={usermail}
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-12 mb-3">
                      <div class="">
                        <label> Type of Visit </label>

                        <div class="input-group ">
                          <select
                            class="browser-default custom-select drop-down"
                            onChange={(e) => setvisittype(e.target.value)}
                            required
                          >
                            <option value="" selected>
                              -- All Types --
                            </option>
                            <option value="House Inspection">
                              House Inspection
                            </option>
                            <option value="Land Inspection">
                              Land Inspection
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <label>Your Location </label>

                      <div class="input-group mb-4">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setuserlocation(e.target.value)}
                          value={userlocation}
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <label> Name of Property </label>

                      <div class="input-group mb-4">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setpropsname(e.target.value)}
                          value={propsname}
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <label> Location of Property </label>

                      <div class="input-group mb-4">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setpropslocation(e.target.value)}
                          value={propslocation}
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <label> Message </label>

                      <div class=" mb-4">
                        <textarea
                          type="text"
                          class="form-control md-textarea"
                          rows="4"
                          placeholder="Drop any message for us."
                          onChange={(e) => setmessage(e.target.value)}
                          value={message}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div class="col-md-12  mx-auto text-center">
                      {showalert ? (
                        <>
                          <Alert color="success">{alert}</Alert>
                        </>
                      ) : (
                        <></>
                      )}
                      <div class=" mb-4 mr-auto ">
                        {issending ? (
                          <>
                            <button
                              type="button"
                              class="btn shadow"
                              action="submit"
                            >
                              {" "}
                              <strong>
                                {" "}
                                Sending <Spinner color="light" />{" "}
                              </strong>
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              class="btn shadow waves-effect"
                              action="submit"
                              onClick={(e) => SendRequestForm(e)}
                            >
                              {" "}
                              <strong> Submit </strong>{" "}
                            </button>
                          </>
                        )}
                      </div>

                      <div class="row justify-content-center">
                        <div class="col-md-10 ml-auto mr-auto">
                          <div class=" ">
                            <a
                              type="button"
                              onClick={(e) => SendWhatsapp(e)}
                              class="whatsapp-btn"
                            >
                              <span
                                class="input-group-text border-0"
                                id="search-addon"
                              >
                                <h5 class=" whatsapp ml-4 white-text mt-2">
                                  Preferably on WhatsApp
                                </h5>
                                <box-icon
                                  class="box-icon"
                                  size="35px"
                                  color=" #fff"
                                  name="whatsapp"
                                  type="logo"
                                ></box-icon>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RequestAVisit2;
