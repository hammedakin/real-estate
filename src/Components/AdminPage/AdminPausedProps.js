import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminDeleteProps from "./AdminDeleteProps";
import AdminNav from "./AdminNav";
import AdminFooter from "./AdminFooter";
import { Spinner } from "reactstrap";

const AdminPausedProps = () => {
  const [count, setcount] = useState(0);
  // For the Delete Button
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
  const [propertytoken, setpropertytoken] = useState("");
  const [pausetoken, setpausetoken] = useState("");
  const [resumetoken, setresumetoken] = useState("");

  const [load, setload] = useState(false);

  function workModal(token) {
    setpropertytoken(token);
    handleShowremove();
  }

  const [pausedproperty, setpausedproperty] = useState([]);

  // Get paused Properties
  const fetchpausedproperty = () => {
    const data = {
      apptoken: "ZC20AD91QR",
      action: "100.2",
    };
    axios
      .get(`https://api.abulesowo.ng/`, { params: data })
      .then((response) => {
        if (response.data.response == "00") {
          console.log(response.data);
        } else {
          setpausedproperty(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    fetchpausedproperty();
  }, [count]);
  // Get paused Properties


  // Resume a Property

  const ResumeProps = (rtoken) => {
    setload(true);
    const data = new FormData();
    data.append("apptoken", "ZC20AD91QR");
    data.append("action", "100.1");
    data.append("token", rtoken);
    axios
      .post(`https://api.abulesowo.ng/`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success == "100.1") {
            setload(false);
            alert(res.data.message);
            fetchpausedproperty();
          } else {
            setload(false);
            alert(res.data.message);
          }
        })
        .catch((error) => {
          setload(false);
          alert("Check your Network Connection!!!");
        });
  };
  // Resume a Property

  const property = pausedproperty
    .map((item, i) => {
      let hotdealss;
      if (item.hotdeals == "0") {
        hotdealss = "No";
      } else {
        hotdealss = "Yes";
      }
      return (
        <tr>
          <td class="pt-3-half">{item.propstoken}</td>
          <td class="pt-3-half">{item.admintoken}</td>
          <td class="pt-3-half">{item.propsname}</td>
          {/* <td class="pt-3-half" >{item.propsdesc}</td> */}
          <td class="pt-3-half">{item.propslocation}</td>
          <td class="pt-3-half">{item.propstype}</td>
          <td class="pt-3-half">₦ {item.propsprice_th}</td>
          <td class="pt-3-half"> {hotdealss}</td>
          <td class="pt-3-half">
            <span class="table-up">
              <Link to={`/admin/property-update/${item.propstoken}`}>
                <button
                  type="button"
                  class="btn btn-success btn-rounded btn-sm my-0"
                >
                  Edit
                </button>
              </Link>{" "}
            </span>
          </td>
          <td class="pt-3-half">
            <span class="table-up">
              {load ? (
                <>
                  <button
                    type="button"
                    class="btn btn-warning btn-rounded btn-sm my-0"
                    disabled
                  >
                    <Spinner color="light" size="sm" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    class="btn btn-warning btn-rounded btn-sm my-0"
                    onClick={(e) => ResumeProps(item.propstoken)}
                  >
                    Resume
                  </button>
                </>
              )}
            </span>
          </td>
          <td>
            <span class="table-remove">
              <button
                type="button"
                onClick={(e) => workModal(item.propstoken)}
                class="btn btn-danger btn-rounded btn-sm my-0"
              >
                Remove
              </button>
            </span>
          </td>
        </tr>
      );
    })
    

  return (
    <>
      <AdminNav />
      <section class="adminproperty">
        <div class="container-fluid">
          <div class="mt-5">
            <div class="card">
              <h3 class="card-header text-center font-weight-bold text-uppercase py-4">
                Paused Properties
              </h3>
              <div class="card-body">
                <Link to="/admin/property-update">
                  <button className="btn btn-success float-right">view All Props</button>
                </Link>
                <div id="table">
                  <span class="table-add float-right mb-3 mr-2">
                    <a href="#!" class="text-success">
                      <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                    </a>
                  </span>
                  <table class="table table-bordered table-responsive-lg table-striped text-center">
                    <thead>
                      <tr>
                        <th class="text-center">Property ID</th>
                        <th class="text-center">Admin ID</th>
                        <th class="text-center">Name</th>
                        {/* <th class="text-center">Description</th> */}
                        <th class="text-center">Location</th>
                        <th class="text-center">Type</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Hotdeals</th>
                        <th class="text-center">Edit</th>
                        <th class="text-center">Pause</th>
                        <th class="text-center">Remove</th>
                      </tr>
                    </thead>
                    {property == "" ? (<h5 className="mt-4 mb-4 grey-text"> Paused Property is Empty </h5>) : (<tbody> {property}</tbody> ) }
                     
                        {/* {property} */}
                    
                  </table>
                </div>
              </div>
            </div>
            <AdminDeleteProps
              callback={fetchpausedproperty}
              show={showremove}
              onHide={handleCloseremove}
              animation={false}
              propstoken={propertytoken}
            />
          </div>
        </div>
      </section>
      <AdminFooter />
    </>
  );
};

export default AdminPausedProps;
