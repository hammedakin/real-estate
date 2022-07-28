import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ConsultingForm = () => {
  const [username, setusername] = useState("");
  const [userlocation, setuserlocation] = useState("");
  const [usermail, setusermail] = useState("");
  const [consulttype, setconsulttype] = useState("");
  const [requestdetails, setrequestdetails] = useState("");
  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  function SendConsultingForm(e) {
    if ((username, userlocation, usermail, consulttype, requestdetails)) {
      setissending(true);
      setTimeout(() => {
        setshowalert(true);
        setusername("");
        setuserlocation("");
        setusermail("");
        setconsulttype("0");
        setrequestdetails("");
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
    if ((username, userlocation, usermail, consulttype, requestdetails)) {
      setshowalert(true);
      window.open(`https://wa.me/2348062474043?text=I want to Request a Consultation. Name: *${username}* Email: *${userlocation}* Address: *${usermail}* Message: *${requestdetails}* `, '_blank')
    } else {
      setshowalert(true)
      setalert('Check Fields')
    }
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      <section class="requestavisit mt-3">
        <div class="container pt-3">
          <div class="mt-5">
            <h3 class="text-center pt-5">CONSULTING PAGE</h3>

            <div class="col-md-10 ml-auto mr-auto ">
              <div class=" mb-5">
                <div class=" mt-5 con-bg">
                  <h5 class="font-weight-bold">OUR CONSULTATION SERVICES</h5>
                  <p>
                    Enquiries/Consultations{" "}
                    <span class="font-weight-bold">
                      {" "}
                      (Realtor, Surveyor, Quantity Surveyor, Engineer,
                      Architect){" "}
                    </span>
                  </p>
                  {/* <p>
                    Telephone Consultation with any of the specialists: 6,000n{" "}
                    <br />
                    Video Consultation with any of the specialists: 10,000n
                  </p> */}
                </div>
              </div>
            </div>

            <div class="mt-5">
              <h3 class="text-center pt-5">CONSULTING FORM</h3>
            </div>

            <div class="col-md-10 ml-auto mr-auto">
              <div class=" mb-5">
                <div class=" mt-5 ">
                  <p class="font-weight-bold">
                    Please, fill out the form below to submit a consulting form
                  </p>
                </div>
              </div>
            
              <form enctype="multipart/form-data">
                <div class="row">
                  <div class="col-md-12 col-lg-12">
                    <label> Full Name</label>

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

                  <div class="col-md-12 col-lg-12">
                    <label> Email </label>

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

                  <div class="col-md-12 col-lg-12">
                    <label> Address </label>

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

                  <div class="col-md-12 mb-3">
                    <div class="">
                      <label> Type of Consulting </label>

                      <div class="input-group ">
                        <select
                          class="browser-default custom-select drop-down"
                          onChange={(e) => setconsulttype(e.target.value)}
                          required
                        >
                          <option value="" selected>
                            -- All Types --
                          </option>
                          <option value="Realtor">Realtor</option>
                          <option value="Surveyor">Surveyor</option>
                          <option value="Quantity Surveyor">
                            Quantity Surveyor
                          </option>
                          <option value="Engineer">Engineer</option>
                          <option value="Architect">Architect</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12 col-lg-12">
                    <label> Message </label>

                    <div class="input-group mb-4">
                      <textarea
                        class="form-control md-textarea"
                        row="4"
                        onChange={(e) => setrequestdetails(e.target.value)}
                        value={requestdetails}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {showalert ? (
                  <>
                    <Alert color="success">{alert}</Alert>
                  </>
                ) : (
                  <></>
                )}
                <div class="col-md-12  mx-auto text-center">
                  <div class=" mb-4 ">
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
                          onClick={(e) => SendConsultingForm(e)}
                        >
                          {" "}
                          <strong> Send </strong>{" "}
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
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ConsultingForm;
