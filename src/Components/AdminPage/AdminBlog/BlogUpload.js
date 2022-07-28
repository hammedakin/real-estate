import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import AdminNav from "../AdminNav";
import AdminFooter from "../AdminFooter";

const BlogUpload = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [category, setcategory] = useState("");
  const [avatar, setavatar] = useState("");
  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  function AdminBlogUpload(e) {
    if ((title, content, category, avatar)) {
      setissending(true);
      const data = new FormData();
      data.append("title", title);
      data.append("content", content);
      data.append("category", category);
      data.append("avatar", avatar);
      data.append("action", "33");
      data.append("admintoken", localStorage.getItem('admintoken'));
      data.append("apptoken", "ZC20AD91QR");

      axios
        .post(`https://api.abulesowo.ng`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.response == "33") {
            setshowalert(true);

            setalert(res.data.message);
            setissending(false);
            setavatar("");
            settitle("");
            setcontent("");
            setcategory("");
          } else {
            setshowalert(true);
            setalert(res.data.message);
            setissending(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setshowalert(true);
          setalert(error.name);
          setissending(false);
        });
    } else {
      setshowalert(true);
      setalert("Empty fields");
    }
    e.preventDefault();
  }

  return (
    <>
      <AdminNav />
      <section class="requestavisit mt-3">
        <div class="container">
          <div class="mt-5">
            <h3 class="text-center pt-5">Blog Upload</h3>

            <div class="col-md-10 ml-auto mr-auto">
              <div class=" mb-5">
                <div class=" mt-5 ">
                  <h6 class="font-weight-bold">
                    Please, fill out the form below upload a new blog
                  </h6>
                  <h6> Fields with <sup class="red-text h6">*</sup> must be filled</h6>
                </div>
              </div>

              {showalert ? (
                <>
                  <Alert color="success">{alert}</Alert>
                </>
              ) : (
                <></>
              )}
              <form enctype="multipart/form-data">
                <div class="row">
                  <div class="col-md-6">
                    <label> Cover Image <i>( Preferably Landscape )</i> <sup class="red-text h6">*</sup> </label>

                    {}

                    <div class="input-group mb-4">
                      <input
                        type="file"
                        class="form-control"
                        onChange={(e) => setavatar(e.target.files[0])}
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label> Category of Blog <sup class="red-text h6">*</sup></label>

                    <div class="input-group mb-4">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setcategory(e.target.value)}
                        value={category}
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-12">
                    <label> Title of the Blog <sup class="red-text h6">*</sup></label>

                    <div class="input-group mb-4">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                        required
                      />
                    </div>
                  </div>


                  <div class="col-md-12">
                    <label> Content <sup class="red-text h6">*</sup></label>

                    <div class="input-group mb-4">
                      <textarea
                        class="form-control md-textarea"
                        rows="20"
                        onChange={(e) => setcontent(e.target.value)}
                        value={content}
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
                <div class="col-md-2  mx-auto text-center">
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
                          onClick={(e) => AdminBlogUpload(e)}
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
          </div>
        </div>
      </section>
      <AdminFooter />
    </>
  );
};

export default BlogUpload;
