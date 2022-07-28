import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import AdminNav from "./AdminNav";
import AdminFooter from "./AdminFooter";

const AdminPropertyEdit = (props) => {
  const [endPoint, setendPoint] = useState("https://api.abulesowo.ng");
  const [apptoken, setapptoken] = useState("ZC20AD91QR");
  const [propstoken, setpropstoken] = useState("");
  const [propsname, setpropsname] = useState("");
  const [propsdesc, setpropsdesc] = useState("");
  // const [type, settype] = useState("");

  const [propstype, setpropstype] = useState("");
  const [propslocation, setpropslocation] = useState("");
  const [propsprice, setpropsprice] = useState("");
  const [yearbuilt, setyearbuilt] = useState("");
  const [hotdeals, sethotdeals] = useState("");
  const [sqmeter, setsqmeter] = useState("");
  const [bedrooms, setbedrooms] = useState("");
  const [bathroom, setbathroom] = useState("");
  const [toilet, settoilet] = useState("");
  const [propscat, setpropscat] = useState("");
  const [parkingspace, setparkingspace] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");
  const [admintoken, setadmintoken] = useState("");

  useEffect(() => {
    fetchProperty();
  }, 0);

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const fetchProperty = () => {
    setloading(true);
    const data = {
      apptoken: "ZC20AD91QR",
      action: "07",
      propstoken: props.match.params.propstoken,
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
          setpropstoken(response.data.propstoken);
          setpropsname(response.data.propsname);
          setpropsprice(response.data.propsprice);
          setpropstype(response.data.propstype);
          setpropslocation(response.data.propslocation);
          setpropsdesc(response.data.propsdesc);
          setyearbuilt(response.data.yearbuilt);
          sethotdeals(response.data.hotdeals);
          setsqmeter(response.data.sqrmeter);
          setbedrooms(response.data.bedroom);
          setbathroom(response.data.bathroom);
          settoilet(response.data.toilet);
          setpropscat(response.data.propscat);
          setparkingspace(response.data.parking);

          console.log(response.data);
        }
      })
      .catch((error) => {
        fetchProperty();
        setloading(false);
      });
  };

  console.log(props);

  function EditProperty(e) {
    if (
      (propsname,
      propsdesc,
      propslocation,
      propsprice,
      propstype,
      yearbuilt,
      hotdeals,
      bedrooms,
      bathroom,
      toilet,
      parkingspace,
      sqmeter,
      propscat)
    ) {
      setissending(true);
      const data = new FormData();
      data.append("propsname", propsname);
      data.append("propsdesc", propsdesc);
      data.append("propslocation", propslocation);
      data.append("propsprice", propsprice);
      data.append("propstype", propstype);
      data.append("yearbuilt", yearbuilt);
      data.append("hotdeals", hotdeals);
      data.append("sqmeter", sqmeter);
      data.append("bedrooms", bedrooms);
      data.append("bathroom", bathroom);
      data.append("toilet", toilet);
      data.append("parkingspace", parkingspace);
      data.append("propscat", propscat);
      data.append("action", "05");
      data.append("propstoken", propstoken);
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
          if (res.data.response == "05") {
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

  const [uploading, setuploading] = useState(false);
  function uploadImg(file, img) {
    console.log(file, img);
    setuploading(true);

    const data1 = new FormData();
    data1.append("apptoken", apptoken);
    data1.append("action", "12");
    data1.append("propstoken", propstoken);
    data1.append("avatar", file);
    data1.append("imgtype", img);

    axios
      .post(endPoint, data1, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        if (res.data.response == "12") {
          fetchProperty();
          setuploading(false);
          setalert(res.data.message);
        } else {
          setalert(res.data.message);
          setuploading(false);
        }
      })
      .catch((error) => {
        setalert("Network disconnected");
        setuploading(false);
      });
  }

  // item.hotdeals
  let hotdealss;
  if (hotdeals == "0") {
    hotdealss = "No";
  } else {
    hotdealss = "Yes";
  }

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
              <div class="my-5">
                <Link to="/admin/property-update">
                  <button class="btn btn1"> BACK </button>
                </Link>
              </div>

              <div class="mt-5">
                <h3 class="text-center pt-1">
                  Property Edit -{" "}
                  <span class=" h4 font-weight-bold black-text">
                    {" "}
                    {propstoken}{" "}
                  </span>{" "}
                </h3>

                <div class=" mb-5">
                  <div class=" mt-5 ">
                    <h6 class="font-weight-bold">
                      Please, fill out the form below Edit{" "}
                      <span class="red-text"> {propstoken} </span> property
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
                        <label> Title of the Property</label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setpropsname(e.target.value)}
                            value={propsname}
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label>
                          {" "}
                          Price (₦) - Do not include the Naira Sign{" "}
                        </label>

                        <div class="input-group mb-4">
                          <input
                            type="number"
                            class="form-control"
                            onChange={(e) => setpropsprice(e.target.value)}
                            value={propsprice}
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Type </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setpropstype(e.target.value)}
                            value={propstype}
                            disabled
                          />
                          <div class="input-group ">
                            <select
                              class="browser-default custom-select drop-down"
                              onChange={(e) => setpropstype(e.target.value)}
                            >
                              <option value="" selected>
                                All Types{" "}
                              </option>
                              <option value="rent">Rent</option>
                              <option value="sale">House</option>
                              <option value="land">Land</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Category </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setpropscat(e.target.value)}
                            value={propscat}
                            disabled
                          />
                          <div class="input-group ">
                            <select
                              class="browser-default custom-select drop-down"
                              onChange={(e) => setpropscat(e.target.value)}
                            >
                              <option value="" selected>
                                All Categories{" "}
                              </option>
                              <option value="none">None</option>

                              <option value="shops">Shops</option>
                              <option value="office-space">Office Space</option>
                              <option value="bungalow">Bungalow</option>
                              <option value="duplex">Duplex</option>
                              <option value="warehouse">Warehouse</option>
                              <option value="self-Contain">Self-Contain</option>
                              <option value="mini-Flat">Mini-Flat</option>
                              <option value="Commercial Property">
                                Commercial Property
                              </option>
                              <option value="Hotel">Hotel</option>
                              <option value="Complex">Complex</option>
                              <option value="Filling Station">
                                Filling Station
                              </option>
                              <option value="Vacant Land">Vacant Land</option>
                              <option value="Land with Structure">
                                Land with Structure
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Address </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setpropslocation(e.target.value)}
                            value={propslocation}
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Area Covered </label>

                        <div class="input-group mb-4">
                          <input
                            type="number"
                            class="form-control"
                            onChange={(e) => setsqmeter(e.target.value)}
                            value={sqmeter}
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Year Built </label>

                        <div class="input-group mb-4">
                          <input
                            type="number"
                            class="form-control"
                            onChange={(e) => setyearbuilt(e.target.value)}
                            value={yearbuilt}
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Hotdeals </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => sethotdeals(e.target.value)}
                            value={hotdealss}
                            disabled
                          />
                          <div class="input-group ">
                            <select
                              class="browser-default custom-select drop-down"
                              onChange={(e) => sethotdeals(e.target.value)}
                            >
                              <option value="" selected>
                                -- Edit Hotdeals --{" "}
                              </option>

                              <option value="1">Yes</option>
                              <option value="0">No</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <label> Description </label>

                        <div class="input-group mb-4">
                          <textarea
                            class="form-control md-textarea"
                            rows="8"
                            onChange={(e) => setpropsdesc(e.target.value)}
                            value={propsdesc}
                          ></textarea>
                        </div>
                      </div>

                      <div class="col-md-12 ml-auto mr-auto mt-3">
                        <h6 class="font-weight-bold">
                          Other Features (Optional)
                        </h6>
                      </div>

                      <div class="col-md-6">
                        <label> Number of Bedrooms </label>

                        <div class="input-group mb-4">
                          <input
                            type="number"
                            class="form-control"
                            onChange={(e) => setbedrooms(e.target.value)}
                            value={bedrooms}
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Number of Bathrooms </label>

                        <div class="input-group mb-4">
                          <input
                            type="number"
                            class="form-control"
                            onChange={(e) => setbathroom(e.target.value)}
                            value={bathroom}
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Number of Toilet </label>

                        <div class="input-group mb-4">
                          <input
                            type="number"
                            class="form-control"
                            onChange={(e) => settoilet(e.target.value)}
                            value={toilet}
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label> Number of Parking Spaces </label>

                        <div class="input-group mb-4">
                          <input
                            type="number"
                            class="form-control"
                            onChange={(e) => setparkingspace(e.target.value)}
                            value={parkingspace}
                          />
                        </div>
                      </div>

                      {/* Image Upload   */}
                      {/* Image Upload   */}

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
                              {data.img1 == "0" ? (
                                <>
                                  <p>
                                    {" "}
                                    Upload Image 1<br />
                                    <form encType="multipart/form-data">
                                      <input
                                        type="file"
                                        class="form-control"
                                        onChange={(e) =>
                                          uploadImg(e.target.files[0], "img1")
                                        }
                                      />
                                    </form>
                                  </p>
                                </>
                              ) : (
                                <>
                                  <img src={data.img1} width="100%" />
                                </>
                              )}
                            </div>
                            <div class="col-6 col-md-3 ">
                              {data.img2 == "0" ? (
                                <>
                                  <p>
                                    {" "}
                                    Upload Image 2<br />
                                    <form encType="multipart/form-data">
                                      <input
                                        type="file"
                                        class="form-control"
                                        onChange={(e) =>
                                          uploadImg(e.target.files[0], "img2")
                                        }
                                      />
                                    </form>
                                  </p>
                                </>
                              ) : (
                                <>
                                  <img src={data.img2} width="100%" />
                                </>
                              )}
                            </div>
                            <div class="col-6 col-md-3 ">
                              {data.img3 == "0" ? (
                                <>
                                  <p>
                                    {" "}
                                    Upload Image 3<br />
                                    <form encType="multipart/form-data">
                                      <input
                                        type="file"
                                        class="form-control"
                                        onChange={(e) =>
                                          uploadImg(e.target.files[0], "img3")
                                        }
                                      />
                                    </form>
                                  </p>
                                </>
                              ) : (
                                <>
                                  <img src={data.img3} width="100%" />
                                </>
                              )}
                            </div>
                            <div class="col-6 col-md-3 ">
                              {data.img4 == "0" ? (
                                <>
                                  <p>
                                    {" "}
                                    Upload Image 4<br />
                                    <form encType="multipart/form-data">
                                      <input
                                        type="file"
                                        class="form-control"
                                        onChange={(e) =>
                                          uploadImg(e.target.files[0], "img4")
                                        }
                                      />
                                    </form>
                                  </p>
                                </>
                              ) : (
                                <>
                                  <img src={data.img4} width="100%" />
                                </>
                              )}
                            </div>
                            <div class="col-6 col-md-3 ">
                              {data.img5 == "0" ? (
                                <>
                                  <p>
                                    {" "}
                                    Upload Image 5<br />
                                    <form encType="multipart/form-data">
                                      <input
                                        type="file"
                                        class="form-control"
                                        onChange={(e) =>
                                          uploadImg(e.target.files[0], "img5")
                                        }
                                      />
                                    </form>
                                  </p>
                                </>
                              ) : (
                                <>
                                  <img src={data.img5} width="100%" />
                                </>
                              )}
                            </div>
                          </div>
                        </>
                      )}

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
                                onClick={(e) => EditProperty(e)}
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

export default AdminPropertyEdit;
