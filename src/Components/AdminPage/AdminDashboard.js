import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import AdminNav from './AdminNav';
import AdminFooter from './AdminFooter';


const AdminDashboard = (props) => {

  

  const [numland, setnumland] = useState("");
  const [numhouse, setnumhouse] = useState("");
  const [numrent, setnumrent] = useState("");
  const [numhotdeals, setnumhotdeals] = useState("");
  const [totalprops, settotalprops] = useState("");
  const [adminname, setadminname] = useState("");
  const [admintoken, setadmintoken] = useState("");




  const fetchStat=()=> {
    const data = {
      apptoken: "ZC20AD91QR",
      action:"13",
    }
    axios.get(`https://api.abulesowo.ng/`, {params:data})
    .then((response) => {
      if (response.data.response == "00") {

      console.log(response.data);
      }else {
        setnumhouse((response.data.numhouse))
        setnumland((response.data.numland))
        setnumrent((response.data.numrent))
        setnumhotdeals((response.data.numhotdeals))
        settotalprops((response.data.totalprops))
        setadmintoken((  localStorage.getItem('admintoken')
        ))
        setadminname((  localStorage.getItem('adminname')
        ))
        

      console.log(response.data);
        
      }
    })
    .catch((error) => {
      console.log(error);
      // alert(error.name);
      // alert("Check your Internet Connection!!!");
    });
    
  } 
  useEffect(()=>{
    fetchStat()
  }, 0 )
  console.log(props)



  






  return (
    <>
    <AdminNav/>
      <section class="admindashboard">
        <div class="container-fluid">
          <div class="bg-admin shadow">
            <div class="mt-5">
              <h3 class="text-center">ADMIN DASHBOARD</h3>
            </div>

            <div class="mb-5">
              <h5> Welcome - {adminname}</h5>
            </div>

            {/* Upper cards */}

            <div class="">
              <div class="row text-center details justify-content-center">
                <div class="col-12 col-md-4 mb-3 col-lg-3">
                  <div class="card h-100 ">
                    <div class="card-body">
                      <h5>
                        {" "}
                        ADMIN ID:
                        <span class="red-text">
                          {" "}
                          <br /> {admintoken}
                        </span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 mb-3 col-lg-3">
                  <div class="card h-100 ">
                    <div class="card-body">
                      <h5>
                        {" "}
                        TOTAL PROPERTY:
                        <span class="red-text">
                          {" "}
                          <br /> {totalprops} PROPERTIES{" "}
                        </span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 mb-3 col-lg-3">
                  <div class="card h-100 ">
                    <div class="card-body">
                      <h5>
                        {" "}
                        TOTAL HOUSE FOR SALE: <br />
                        <span class="red-text"> {numhouse} HOUSES </span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 mb-3 col-lg-3">
                  <div class="card h-100 ">
                    <div class="card-body">
                      <h5>
                        {" "}
                        TOTAL HOUSE FOR RENT:
                        <br />
                        <span class="red-text"> {numrent} HOUSES </span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 mb-3 col-lg-3">
                  <div class="card  h-100 ">
                    <div class="card-body">
                      <h5>
                        {" "}
                        TOTAL LAND: <br />
                        <span class="red-text"> {numland} LANDS </span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 mb-3 col-lg-3">
                  <div class="card  h-100 ">
                    <div class="card-body">
                      <h5>
                        {" "}
                        TOTAL HOTDEALS: <br />
                        <span class="red-text"> {numhotdeals} HOTDEALS </span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Upper cards */}

            {/* Nav Cards  */}
            <div class="row text-center nav justify-content-center mt-5">
              <div class=" col-md-4 mb-3">
              <Link to="/admin/property-upload">

                <div class="card hoverable h-100 ">
                  <div class="card-body">
                    <h5>
                     UPLOAD NEW PROPERTY
                    </h5>
                  </div>
                </div>
              </Link>

              </div>


              <div class=" col-md-4 mb-3">
              <Link to="/admin/property-update">

                <div class="card hoverable h-100 ">
                  <div class="card-body">
                    <h5>
                     VIEW ALL PROPERTIES
                    </h5>
                  </div>
                </div>
              </Link>

              </div>


              <div class=" col-md-4 mb-3">
              <Link to="/admin/blog-upload">

                <div class="card hoverable h-100 ">
                  <div class="card-body">
                    <h5>
                     UPLOAD NEW BLOG
                    </h5>
                  </div>
                </div>
              </Link>

              </div>

              <div class=" col-md-4 mb-3">
              <Link to="/admin/blog-update">

                <div class="card hoverable h-100 ">
                  <div class="card-body">
                    <h5>
                     VIEW ALL BLOG
                    </h5>
                  </div>
                </div>
              </Link>

              </div>
              
            
            </div>
          </div>
          {/* Nav Cards  */}

        </div>
      </section>
    <AdminFooter/>

      
    </>
  );
};

export default AdminDashboard;
