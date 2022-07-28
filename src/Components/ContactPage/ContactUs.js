import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ContactUs = () => {
  
  const [name, setname] = useState("");
  const [subject, setsubject] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  function SendContactForm(e) {
    if ((name && subject && email && message)) {
      setissending(true);
      setTimeout(() => {
        setshowalert(true);
        setname("")
        setsubject("")
        setemail("")
        setmessage("")
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

  
  return (
    <>
    <Navbar/>
      <section class="contactus">
        <div class="container mt-5">
        
          <section class="mb-4">
            <h3 class="h1-responsive font-weight-bold text-center my-4 ">
              CONTACT US
            </h3>

            <p class="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div class="row">
              <div class="col-md-7 mb-md-0 mb-5 pt-5">
            
                <form
              enctype="multipart/form-data"
                  
                >
                  <div class="row align-contents-center">
                    <div class="col-md-6">
                      
                      <div class="md-form mb-0">
                        <input
                          type="text"
                          onChange={(e) => setname(e.target.value)}
                          value={name}
                          class="form-control"
                          required
                          placeholder="Your Name"
                        />
                      
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input
                          type="email"
                          onChange={(e) => setemail(e.target.value)}
                        value={email}
                        required
                        placeholder="Your Email"
                          class="form-control"
                        />
                       
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input
                          type="text"
                          class="form-control"
                      onChange={(e) => setsubject(e.target.value)}
                          value={subject}
                          required
                          placeholder="Your Subject"
                        />
                   
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form">
                        <textarea
                          type="text"
                          rows="3"
                          class="form-control md-textarea"
                          
                          onChange={(e) => setmessage(e.target.value)}
                          value={message}
                          required
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  {showalert ? (
                <>
                  <Alert color="danger">{alert}</Alert>
                </>
              ) : (
                <></>
              )}
               <div class="col-md-12  mx-auto text-center">
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
                          onClick={(e) => SendContactForm(e)}
                        >
                          {" "}
                          <strong> Send </strong>{" "}
                        </button>
                      </>
                    )}
                  </div>
                </div>
                </form>

               
              </div>

              <div class="col-md-5 text-center align-items-center">
                <div class=" ">

                
                    <div class="contact-details">
                      <a href="#!">
                        <span class="mr-2">
                          {" "}
                          <box-icon
                            class="box-icon"
                            size="30px"
                            color=" #FC4746"
                            name="location-plus"
                            type="solid"
                          ></box-icon>
                        </span> <br/>
                        26, Ladoke Akintola, Bodija.{" "}
                      </a>
                    </div>
                    <div class="contact-details">
                      <a href="tel:+2348062474043">
                        <span class="mr-2">
                          {" "}
                          <box-icon
                            class="box-icon"
                            size="30px"
                            color=" #FC4746"
                            name="phone"
                            type="solid"
                          ></box-icon>
                        </span> <br/>
                        +234 80 6247 4043{" "}
                      </a>
                    </div>

                    <div class="contact-details">
                      <a href="mailto:info@abulesowo.ng">
                        <span class="mr-2">
                          {" "}
                          <box-icon
                            class="box-icon"
                            size="30px"
                            color=" #FC4746"
                            name="envelope"
                            type="solid"
                          ></box-icon>
                        </span> <br/>
                        info@abulesowo.ng{" "}
                      </a>
                    </div>
                  

                  <div class="text-center mb-3 boxicons">
                    <a href="https://www.facebook.com/AbulesowoNG/" target="_blank" rel="noreferrer">
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #FC4746"
                        type="logo"
                        name="facebook"
                      ></box-icon>
                    </a>

                    <a href="https://instagram.com/abulesowo.ng?utm_medium=copy_link" target="_blank" rel="noreferrer">
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #FC4746"
                        name="instagram"
                        type="logo"
                      ></box-icon>
                    </a>

                    <a href="https://twitter.com/AbulesowoNG?s=08" target="_blank" rel="noreferrer">
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #FC4746"
                        name="twitter"
                        type="logo"
                      ></box-icon>
                    </a>


                    <a href="https://youtube.com/channel/UC0vSXXkEMpc4rw74Rl2bB9w" target="_blank" rel="noreferrer">
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #FC4746"
                        name="youtube"
                        type="logo"
                      ></box-icon>
                    </a> 

                    <a href="https://g.page/abulesowoNG?ad" target="_blank" rel="noreferrer">
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #FC4746"
                        name="google-plus"
                        type="logo"
                      ></box-icon>
                    </a>
                    

                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default ContactUs;
