import React, { useState } from "react";
import { Spinner, Alert } from "reactstrap";
import { useHistory } from "react-router";
import { listing } from "../PropertyListing";
import { useLocation } from "react-router";

const PropertySearch = () => {
  const [keyword, setkeyword] = useState("");
  const [min, setmin] = useState("");
  const [max, setmax] = useState("");
  const [bed, setbed] = useState("");
  const [type, settype] = useState("");
  const [results, setresults] = useState([]);

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  let history = useHistory();
  let path = useLocation()

  console.log(type);

  let search = listing.filter((x) => x.name.toLowerCase().includes(keyword.toLowerCase())
    && x.type.includes(type)
    && x.bedroom
  )
  console.log(search);

  function Search(e) {
    if (keyword || type || bed) {
      setissending(true);
      if (path.pathname === '/properties/search') {
        console.log('here');
        setshowalert(false);
        setissending(false);
        history.push({
          pathname: `/properties/search`,
          state: { results: search, keyword: keyword, type: type, bed: bed },
        });
        window.location.reload()

      } else {
        console.log(search);
        setshowalert(false);
        setissending(false);
        history.push({
          pathname: `/properties/search`,
          state: { results: search, keyword: keyword, type: type, bed: bed },
        });
      }
    } else {
      setshowalert(true);
      setalert("Empty fields, search again!");
    }
    e.preventDefault();
  }




  return (
    <>
      <section class="propertysearch">
        <div class="container-fluid">
          <div class="">
            <form enctype="multipart/form-data">
              {/* Search Bar */}

              <div class="col-md-10 ml-auto mr-auto">
                <div class="input-group white">
                  <input
                    type="search"
                    class="form-control py-4"
                    placeholder="Enter an Address, Landmark, Neighbourhood, City"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={(e) => setkeyword(e.target.value)}
                    value={keyword}
                    required
                  />

                  {issending ? (
                    <>
                      <a>
                        <span
                          class="input-group-text border-0 "
                          id="search-addon"
                        >
                          <Spinner
                            color="light"
                            className="box-icon"
                            size="0.1rem"
                          />
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        type="button"
                        action="submit"
                        onClick={(e) => Search(e)}
                      >
                        <span
                          class="input-group-text border-0"
                          id="search-addon"
                        >
                          {" "}
                          <box-icon
                            class="box-icon"
                            size="2rem"
                            color=" #fff"
                            name="search-alt-2"
                            type="logo"
                          ></box-icon>
                        </span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Search Bar */}

              {/* Dropdown Menus */}

              <div class="row justify-content-center align-items-center">
                <div class="col-md-3 col-6 col-lg-2">
                  <div class="mt-4">
                    <label> Type </label>

                    <div class="input-group ">
                      <select
                        class="browser-default custom-select drop-down"
                        onChange={(e) => settype(e.target.value)}
                      >
                        <option value="" selected>
                          All Types
                        </option>
                        <option value="rent">Rent</option>
                        <option value="sale">House</option>
                        <option value="land">Land</option>

                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-6 col-lg-2">
                  <div class="mt-4">
                    <label> Bedrooms </label>

                    <div class="input-group ">
                      <select
                        class="browser-default custom-select drop-down"
                        onChange={(e) => setbed(e.target.value)}
                      >
                        <option value="" selected>
                          Any{" "}
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                </div>


                <div class="col-md-12 text-center ">
                  {issending ? (
                    <>
                      <button type="button" class="btn shadow" action="submit">
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
                        onClick={(e) => Search(e)}
                      >
                        {" "}
                        <strong> get a request </strong>{" "}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </form>
            <div class="row justify-content-center">
              <div class="col-md-8 text-center">
                {showalert ? (
                  <>
                    <Alert color="danger">{alert}</Alert>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertySearch;
