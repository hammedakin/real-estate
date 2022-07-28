import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import AdminNav from "../AdminNav";
import AdminFooter from "../AdminFooter";
import Back from "../../Back";

const AdminBlogEdit = (props) => {
  const [endPoint, setendPoint] = useState("https://api.abulesowo.ng");
  const [apptoken, setapptoken] = useState("ZC20AD91QR");
  const [token, settoken] = useState("");
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [category, setcategory] = useState("");
//   const [avatar, setavatar] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");
  const [admintoken, setadmintoken] = useState("");

  useEffect(() => {
    fetchBlog();
  }, 0);

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const fetchBlog = () => {
    setloading(true);
    const data = {
      apptoken: "ZC20AD91QR",
      action: "36.1",
      token: props.match.params.token,
    };
    axios
      .get(`https://api.abulesowo.ng/`, { params: data })
      .then((response) => {
        if (response.data.response == "00") {
          setloading(false);
          console.log(response.data);
        } else {
          setloading(false);
          setdata(response.data);
          settoken(response.data.token);
          settitle(response.data.title);
          setcategory(response.data.category);
          setcontent(response.data.content);
        //   setavatar(response.data.avatar);

          console.log(response.data);
        }
      })
      .catch((error) => {
        fetchBlog();
        setloading(false);
      });
  };

  console.log(props);

  function EditBlog(e) {
    if ((title, content, category)) {
      setissending(true);
      const data = new FormData();
      data.append("title", title);
      data.append("content", content);
      data.append("category", category);
    //   data.append("avatar", avatar);
      data.append("action", "35");
      data.append("token", token);
      data.append("admintoken", localStorage.getItem("admintoken"));
      data.append("apptoken", "ZC20AD91QR");

      axios
        .post(`https://api.abulesowo.ng`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.response == "35") {
            setshowalert(true);
            setalert(res.data.message);
            setissending(false);
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
      setalert("Not Sent, Check Fields");
    }
    e.preventDefault();
  }

//   const [uploading, setuploading] = useState(false);
//   function uploadImg(file, img) {
//     console.log(file, img);
//     setuploading(true);

//     const data1 = new FormData();
//     data1.append("apptoken", apptoken);
//     data1.append("action", "35");
//     data1.append("token", token);
//     data1.append("avatar", file);

//     axios
//       .post(endPoint, data1, {
//         headers: {
//           "content-type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log(JSON.stringify(res.data));
//         if (res.data.response == "35") {
//           fetchBlog();
//           setuploading(false);
//           setalert(res.data.message);
//         } else {
//           setalert(res.data.message);
//           setuploading(false);
//         }
//       })
//       .catch((error) => {
//         setalert("Network disconnected");
//         setuploading(false);
//       });
//   }

  return (
    <>
      <AdminNav />
      <section class="requestavisit">
        {loading ? (
          <>
            <br /> <br />
            <Spinner color="danger" />
          </>
        ) : (
          <>
            <div class="container">
               <Back/>
             

              <div class="mt-5">
                <h3 class="text-center pt-1">
                  Blog Edit -{" "}
                  <span class=" h4 font-weight-bold black-text"> {token} </span>{" "}
                </h3>

                <div class=" mb-5">
                  <div class=" mt-5 ">
                    <h6 class="font-weight-bold">
                      Please, fill out the form below to Edit{" "}
                      <span class="red-text"> {token} </span> blog
                    </h6>
                  </div>
                </div>

                <div class="">
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
                        <label> Title of the Blog</label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => settitle(e.target.value)}
                            value={title}
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Category </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setcategory(e.target.value)}
                            value={category}
                          />
                        </div>
                      </div>


                      <div class="col-md-12">
                        <label> Content </label>

                        <div class="input-group mb-4">
                          <textarea
                            class="form-control md-textarea"
                            rows="15"
                            onChange={(e) => setcontent(e.target.value)}
                            value={content}
                          ></textarea>
                        </div>
                      </div>

                      {/* Image Upload   */}
                      {/* Image Upload   */}

{/* 
                      <div class="col-md-5">
                        <label> Image </label>

                        <div class="input-group mb-4">
                            <img src={avatar} width="100%" />
                        </div>
                      </div>
                      
                      <div class="col-md-5">
                        <label> Image </label>

                        <div class="input-group mb-4">
                        <input
                                        type="file"
                                        class="form-control"
                                        onChange={(e) =>
                                          setavatar(e.target.files[0], "avatar")
                                        }
                                      />
                        </div>
                      </div> */}

{/* 
                      {uploading ? (
                        <>
                          <p>
                            {" "}
                            uploading image... <Spinner color="danger" />{" "}
                          </p>
                        </>
                      ) : (
                        <>
                          <div class="row">
                            <div class="col-6 col-md-3 ">
                              {data.avatar == "0" ? (
                                <>
                                  <p>
                                    {" "}
                                    Upload Image <br />
                                    <form encType="multipart/form-data">
                                      <input
                                        type="file"
                                        class="form-control"
                                        onChange={(e) =>
                                          uploadImg(e.target.files[0], "avatar")
                                        }
                                      />
                                    </form>
                                  </p>
                                </>
                              ) : (
                                <>
                                  <img src={data.avatar} width="100%" />
                                </>
                              )}
                            </div>
                          </div>
                        </>
                      )} */}

                      {/* Image Upload   */}
                      {/* Image Upload   */}

                      <div class="col-md-12">
                        {showalert ? (
                          <>
                            <Alert color="success">{alert}</Alert>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>

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
                                  Updating <Spinner color="light" />{" "}
                                </strong>
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                class="btn shadow waves-effect"
                                action="submit"
                                onClick={(e) => EditBlog(e)}
                              >
                                {" "}
                                <strong> Submit </strong>{" "}
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <AdminFooter />
    </>
  );
};

export default AdminBlogEdit;
