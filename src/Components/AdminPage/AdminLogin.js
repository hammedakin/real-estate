import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import AdminNav from "./AdminNav";
import AdminFooter from "./AdminFooter";

const AdminLogin = () => {
  const [adminmail, setadminmail] = useState("");
  const [password, setpassword] = useState("");
  const [adminname, setadminname] = useState("");
  const [admintoken, setadmintoken] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");
  let history = useHistory();

  function Login(e) {
    if ((adminmail, password)) {
      setissending(true);

      const data = new FormData();
      data.append("adminmail", adminmail);
      data.append("password", password);
      data.append("action", "02");
      // data.append("admintoken", "ABULESOWO")
      data.append("apptoken", "ZC20AD91QR");

      axios
        .post(`https://api.abulesowo.ng`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.response == "02") {
            localStorage.setItem("admintoken", res.data.admintoken);
            localStorage.setItem("adminmail", res.data.mail);
            localStorage.setItem("adminname", res.data.name);
            setshowalert(true);
            setadminmail(res.data.mail);
            setadminname(res.data.name);
            setadmintoken(res.data.admintoken);
            setalert(res.data.message);
            setissending(false);
            history.push("/admindashboard");
          } else {
            setshowalert(true);
            setalert(res.data.message, "error");
            setissending(false);
          }
        })
        .catch((error) => {
          console.log(error.name);
          setshowalert(true);
          setalert("Check your Network Connection!!!");
          setissending(false);
        });
    } else {
      setshowalert(true);
      setalert("Empty fields, Check form again!");
      setissending(false);
    }
    e.preventDefault();
  }

  return (
    <>
      <section class="adminlogin">
        <div class="container">
          <h3 class="text-center">Admin Login</h3>
          {showalert ? (
            <>
              <Alert color="success">{alert}</Alert>
            </>
          ) : (
            <></>
          )}
          <form>
            <div class="row justify-content-center mt-5">
              <div class="col-md-8">
                <label> Email </label>

                <div class="input-group mb-4">
                  <input
                    type="email"
                    class="form-control"
                    onChange={(e) => setadminmail(e.target.value)}
                    value={adminmail}
                    required
                  />
                </div>
              </div>

              <div class="col-md-8">
                <label> Password </label>

                <div class="input-group mb-4">
                  <input
                    type="password"
                    class="form-control"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
              </div>
              <div class="col-md-12  mx-auto text-center">
                {issending ? (
                  <>
                    <button type="button" class="btn shadow" action="submit">
                      {" "}
                      <strong>
                        {" "}
                        Logging In <Spinner color="light" size="0.1rem" />{" "}
                      </strong>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      class="btn shadow waves-effect"
                      action="submit"
                      onClick={(e) => Login(e)}
                    >
                      {" "}
                      <strong> Login </strong>{" "}
                    </button>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
      <AdminFooter />
    </>
  );
};

export default AdminLogin;
