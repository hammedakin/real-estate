import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import AdminNav from "./AdminNav";
import AdminFooter from "./AdminFooter";
import { useHistory } from "react-router";

const PropertyUpload = () => {
  const [propsname, setpropsname] = useState("");
  const [propstype, setpropstype] = useState("");
  const [propsdesc, setpropsdesc] = useState("");
  const [propslocation, setpropslocation] = useState("");
  const [yearbuilt, setyearbuilt] = useState("");
  const [hotdeals, sethotdeals] = useState("");
  const [sqmeter, setsqmeter] = useState("");
  const [bedrooms, setbedrooms] = useState("");
  const [bathroom, setbathroom] = useState("");
  const [toilet, settoilet] = useState("");
  const [parkingspace, setparkingspace] = useState("");
  const [propsprice, setpropsprice] = useState("");
  const [avatar, setavatar] = useState("");
  const [propscat, setpropscat] = useState("");
  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");
  const [admintoken, setadmintoken] = useState("");
  let history = useHistory();


  function AdminUpload(e) {
    if (
      (propsname, propstype, propsdesc, propslocation, yearbuilt, hotdeals, sqmeter, bedrooms, bathroom, toilet, parkingspace, propsprice, avatar, propscat)) {
      setissending(true);
      const data = new FormData();
      data.append("propsname", propsname);
      data.append("propstype", propstype);
      data.append("propsdesc", propsdesc);
      data.append("propslocation", propslocation);
      data.append("yearbuilt", yearbuilt);
      data.append("hotdeals", hotdeals);
      data.append("sqmeter", sqmeter);
      data.append("bedrooms", bedrooms);
      data.append("bathroom", bathroom);
      data.append("toilet", toilet);
      data.append("parkingspace", parkingspace);
      data.append("propsprice", propsprice);
      data.append("avatar", avatar);
      data.append("propscat", propscat);
      // data.append("type", type);
      data.append("action", "03");
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
          if (res.data.response == "03") {
            setshowalert(true);
            history.push( {
              pathname: `/admin/property-update/${res.data.token}`
            })
            setalert(res.data.message);
            setissending(false);
          
            setadmintoken((  localStorage.getItem('admintoken')
            ))
            // settype("")
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

  const ResetForm = () => {
    setavatar("");
    setpropsname("");
    setpropstype("");
    setpropsdesc("");
    setpropslocation("");
    setyearbuilt("");
    setsqmeter("");
    setbedrooms("");
    setbathroom("");
    settoilet("");
    setparkingspace("");
    setpropsprice("");
    setpropstype("0");
    sethotdeals("0");
    setpropscat("0");
  }

  return (
    <>
      <AdminNav />
      <section class="requestavisit mt-3">
        <div class="container">
          <div class="mt-5">
            <h3 class="text-center pt-5">Property Upload</h3>

            <div class="col-md-10 ml-auto mr-auto">
              <div class=" mb-5">
                <div class=" mt-5 ">
                  <h6 class="font-weight-bold">
                    Please, fill out the form below upload a new property
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
                    <div class="">
                      <label> Type of Property <sup class="red-text h6">*</sup> </label>

                      <div class="input-group ">
                        <select
                          class="browser-default custom-select drop-down"
                          onChange={(e) => setpropstype(e.target.value)}
                          required
                        >
                          <option value="" selected>
                            -- All Types --
                          </option>
                          <option value="rent">House Rent</option>
                          <option value="sale">House Sale</option>
                          <option value="land">Land</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 mb-3">
                    <div class="">
                      <label> Category of Property  <sup class="red-text h6">*</sup></label>

                      <div class="input-group ">
                        <select
                          class="browser-default custom-select drop-down"
                          onChange={(e) => setpropscat(e.target.value)}
                          required
                        >
                          <option value="" selected>
                            -- All Categories --
                          </option>
                          <option value="none">None</option>

                          <option value="Shops">Shops</option>
                          <option value="Office-space">Office Space</option>
                          <option value="Bungalow">Bungalow</option>
                          <option value="Duplex">Duplex</option>
                          <option value="Warehouse">Warehouse</option>
                          <option value="Self-Contain">Self-Contain</option>
                          <option value="Mini-Flat">Mini-Flat</option>
                          <option value="Commercial Property">Commercial Property</option>
                          <option value="Hotel">Hotel</option>
                          <option value="Complex">Complex</option>
                          <option value="Filling Station">Filling Station</option>
                          <option value="Vacant Land">Vacant Land</option>
                          <option value="Land with Structure">Land with Structure</option>
                          
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label> Cover Image  <sup class="red-text h6">*</sup> </label>

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
                    <label> Title of the Property  <sup class="red-text h6">*</sup></label>

                    <div class="input-group mb-4">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setpropsname(e.target.value)}
                        value={propsname}
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label> Price (₦)  <sup class="red-text h6">*</sup> - <i>(Do not include the Naira Sign)</i> </label>

                    <div class="input-group mb-4">
                      <input
                        type="number"
                        class="form-control"
                        onChange={(e) => setpropsprice(e.target.value)}
                        value={propsprice}
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label> Address <sup class="red-text h6">*</sup> </label>

                    <div class="input-group mb-4">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setpropslocation(e.target.value)}
                        value={propslocation}
                        required
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

                  <div class="col-md-6 mb-3">
                    <div class="">
                      <label> Hot Deals </label>

                      <div class="input-group ">
                        <select
                          class="browser-default custom-select drop-down"
                          onChange={(e) => sethotdeals(e.target.value)}
                          required
                        >
                          <option value="0" selected>
                            No
                          </option>

                          <option value="1">Yes</option>
                          {/* <option value="0">No</option> */}
                         
                        </select>
                      </div>
                    </div>
                  </div>

                

                  <div class="col-md-12">
                    <label> Description <sup class="red-text h6">*</sup></label>

                    <div class="input-group mb-4">
                      <textarea
                        class="form-control md-textarea"
                        rows="8"
                        onChange={(e) => setpropsdesc(e.target.value)}
                        value={propsdesc}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-md-12 ml-auto mr-auto mt-3">
                    <h6 class="font-weight-bold">Other Features (Optional) - <span class="font-weight-normal">
                    <i> if field is not available, leave empty</i>
                        </span> 
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
                          onClick={(e) => AdminUpload(e)}
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

export default PropertyUpload;
