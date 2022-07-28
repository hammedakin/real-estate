import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminDeleteProps from "./AdminDeleteProps";
import AdminNav from "./AdminNav";
import AdminFooter from "./AdminFooter";
import { Spinner } from "reactstrap";

const AdminAllProperty = () => {
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

  const [allproperty, setallproperty] = useState([]);

  // Get all Properties
  const fetchproperty = () => {
    const data = {
      apptoken: "ZC20AD91QR",
      action: "06",
    };
    axios
      .get(`https://api.abulesowo.ng/`, { params: data })
      .then((response) => {
        if (response.data.response == "00") {
          console.log(response.data);
        } else {
          setallproperty(response.data);
          console.log(response.data);
        }
      })

      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    fetchproperty();
  }, [count]);
  // Get all Properties

  // Pause a Property 

  const PauseProps = (ptoken) => {
    setload(true);
    const data = new FormData();
    data.append("apptoken", "ZC20AD91QR");
    data.append("action", "100");
    data.append("token", ptoken);
    axios
      .post(`https://api.abulesowo.ng/`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
    console.log(res.data)
        if (res.data.success == "00") {
          setload(false);
          alert(res.data.message);
        } else {
          setload(false);
          alert(res.data.message);
          fetchproperty();
        }
      })
      .catch((error) => {
        setload(false);
        alert("Check your Network Connection!!!");
      });
  };
  // Pause a Property 

  const property = allproperty.map((item, i) => {
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
                class="btn btn-primary btn-rounded btn-sm my-0"
                disabled >
                 <Spinner color="light" size="sm" />
              </button>
              </>
            ) : (
              <>
                 <button
                type="button"
                class="btn btn-primary btn-rounded btn-sm my-0"
                onClick={(e) => PauseProps(item.propstoken)}
              >
                Pause
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
    .reverse();

  return (
    <>
      <AdminNav />
      <section class="adminproperty">
        <div class="container-fluid">

          <div class="mt-5">
            <div class="card">
              <h3 class="card-header text-center font-weight-bold text-uppercase py-4">
                ALL Properties
              </h3>
              <div class="card-body">
              <Link to="/admin/property-paused">
              <button className="btn btn-success float-right">view Paused Props</button>
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
                    <tbody>{property}</tbody>
                  </table>
                </div>
              </div>
            </div>
            <AdminDeleteProps
              callback={fetchproperty}
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

export default AdminAllProperty;
