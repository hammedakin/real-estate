import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";

const AdminDeleteProps = (props) => {
  const [propstoken, setpropstoken] = useState(props.propstoken);
  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alertt, setalert] = useState("");

useEffect(()=>{
  console.log(props.propstoken)
})

  const PropertyDelete = () => {
    setissending(true);
    const data = {
      apptoken: "ZC20AD91QR",
      action: "04",
      admintoken: localStorage.getItem('admintoken'),
        propstoken: props.propstoken,
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
          setpropstoken(response.data.propstoken);
            setshowalert(true);
            setalert(response.data.message);
            alert(response.data.message)
            reload();
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
  function reload() {
    window.location.reload();
  }
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
                <h4> Are you sure you want to delete this Property -  <span class=" h4 font-weight-bold red-text"> {props.propstoken} </span></h4>
              </div>

              <div class="text-center h5">
              {showalert ? (
           <>
             <Alert color="danger">{alertt}</Alert>
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
                  onClick={(e) => PropertyDelete(e)}
                  >
                Delete Property
                
                </button>
              </>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminDeleteProps;
