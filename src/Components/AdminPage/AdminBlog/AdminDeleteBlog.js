import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const AdminDeleteBlog = (props) => {
  const [token, settoken] = useState(props.token);
  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

useEffect(()=>{
  console.log(props.token)
})

  const BlogDelete = () => {
    const data = {
      apptoken: "ZC20AD91QR",
      action: "34",
      admintoken: localStorage.getItem('admintoken'),
      token: props.token,
    };

    axios
      .get(`https://api.abulesowo.ng/`, { params: data })
      .then((response) => {
        if (response.data.response == "00") {
            setshowalert(true);
            setalert(response.data.message);
            setissending(false);
          console.log(response.data);
        } else {
          settoken(response.data.token);
            setshowalert(true);
            setalert(response.data.message);
            setissending(false);
          console.log(response.data);
          props.callback()
        }
      })
      .catch((error) => {
        console.log(error);
        setshowalert(true);
        setalert(error.name);
        setissending(false);
      });
  };
//   useEffect(() => {
//     BlogDelete();
//   }, 0);
  console.log(props);

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "transparent!important" }}>
          <section class=" ">
            <div class="container">
              <div class="text-center mb-5">
                <h4> Are you sure you want to delete this Blog Post -  <span class=" h4 font-weight-bold red-text"> {props.token} </span></h4>
              </div>

              <div class="text-center h5">
              {showalert ? (
           <>
             <Alert color="danger">{alert}</Alert>
           </>
         ) : (
           <></>
         )}
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>



          <div class="ml-auto mr-auto">
            {issending ? (
              <>
                <button type="button" class="btn btn-danger  btn my-0"
                  disabled>
                Deleting <Spinner color="light" />
                
                </button>
              
              </>
            ) : (
              <>
              
                <button type="button" class="btn btn-danger  btn my-0"
                  onClick={(e) => BlogDelete(e)}
                  >
                Delete Blog Post
                
                </button>
              </>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminDeleteBlog;
