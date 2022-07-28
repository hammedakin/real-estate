import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import AdminDeleteBlog from "./AdminDeleteBlog";
import AdminNav from "../AdminNav";
import AdminFooter from "../AdminFooter"

 
const AdminAllBlog = () => {
  const [count, setcount] = useState(0)
  // For the Delete Button
  const [showremove, setShowremove] = useState(false);
  const handleCloseremove = () => setShowremove(false);
  const handleShowremove = () => setShowremove(true);
const [token, settoken] = useState("")

  function workModal(token) {
    // body...
    console.log(token)
    settoken(token)
    handleShowremove()
  }

  useEffect(() => {
    fetchblog()
    console.log('here')
  },[count])

    const [allblog, setallblog] = useState([]);
    

    const fetchblog = () => {

        const data = {
          apptoken: "ZC20AD91QR",
          action:"36"
        }
        axios
          .get(`https://api.abulesowo.ng/`, {params:data})
          .then((response) => {
            if (response.data.response == "00") {

            console.log(response.data);
            }else {
            setallblog(response.data);
            console.log(response.data);

            }
          })

          .catch((error) => {
            console.log(error.response);
          });
      };
      useEffect(() => {
        fetchblog();
      }, [count]);

      const blog = allblog.map((item, i) => {

        return (
        
            <tr>
            <td class="pt-3-half" >{item.token}</td>
            <td class="pt-3-half" >{item.admintoken}</td>
            <td class="pt-3-half" >{item.title}</td>
            <td class="pt-3-half" >{item.category}</td>
            <td class="pt-3-half" >
              <img src={item.avatar} alt={item.category} width="20%" />
            </td>

            <td class="pt-3-half">
              <span class="table-up"
                >
                 <Link to={`/admin/blog-update/${item.token}`}>
                 <button type="button" class="btn btn-success btn-rounded btn-sm my-0">
                Edit
              </button>
                   </Link> </span>
            </td>
            <td>
              <span class="table-remove"
                ><button type="button" onClick={e=>workModal(item.token)} class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove
                </button></span>
            </td>
          </tr>
    
        );
      });
    





  return (
    <>
    <AdminNav/>
      <section class="adminproperty">
        <div class="container-fluid">
          <h3 class="text-center">All Blog Post</h3>

          <div class="mt-5">

         
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">
    ALL Blog Post
  </h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"
        ><a href="#!" class="text-success"
          ><i class="fas fa-plus fa-2x" aria-hidden="true"></i></a
      ></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <th class="text-center">Post ID</th>
            <th class="text-center">Admin ID</th>
            <th class="text-center">Title</th>
            <th class="text-center">Category</th>
            <th class="text-center">Image</th>
            <th class="text-center">Edit</th>
            <th class="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          
          {blog}
          
        </tbody>
      </table>
    </div>
  </div>
</div>
<AdminDeleteBlog callback={fetchblog} show={showremove} onHide={handleCloseremove} animation={false} token={token} />

          </div>
        </div>
      </section>
      <AdminFooter/>
    </>
  );
};

export default AdminAllBlog;


