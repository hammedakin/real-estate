import React from 'react';
import { Link } from 'react-router-dom';
import bathhub from "./img/bathtub.svg";
import bed from "./img/bed.svg";


const PropCard = ({img, name, price, token, location, type, bedroom, bathroom, key}) => {
    return ( 
        <>
            <div class="col-md-6 col-xl-3 col-lg-4 mt-5 mx-auto" key={key}>
                <div class="card h-100">
                    <div class="view overlay zoom first">
                        <img
                            src={img}
                            alt=""
                            class="card-img-top img-fluid "
                            width="100%"
                        />
                        <a>
                            <div class="mask rgba-red-slight"></div>
                        </a>
                    </div>

                    <Link
                        to={`/property/${token}`}
                        class="action-button ml-auto mr-4"
                    >
                        <box-icon
                            class="box-icon action-icon"
                            size="1.5rem"
                            color=" #fff"
                            type="solid"
                            name="chevron-right"
                        ></box-icon>{" "}
                    </Link>

                    <div class="card-body">
                        <p class="description">{name}</p>

                        {type === "rent" ? <p class="amount">₦ {price} <span className="font-weight-light"> per annum </span></p> : <p class="amount">₦ {price} </p>}

                        <p class="address"> {location} </p>

                        <p class="address text-capitalize badge badge-danger px-2">
                            property type: {type}{" "}
                        </p>


                        {/* <p class="add-ons">
                            <ul>

                                <li>
                                    {bedroom == "" ? (
                                        <></>
                                    ) : (
                                        <>
                                            <span>
                                                {" "}
                                                <img src={bed} width="10%" />{" "}
                                            </span>
                                            {bedroom} Bedrooms
                                        </>
                                    )}
                                </li>
                                <li>
                                    {bathroom == "" ? (
                                        <></>
                                    ) : (
                                        <>
                                            <span>
                                                {" "}
                                                <img src={bathhub} width="10%" />{" "}
                                            </span>
                                            {bathroom} Bathroom
                                        </>
                                    )}
                                </li>
                            </ul>
                        </p> */}
                    </div>

                    <Link to={`/property/visit/${token}`}>
                        <div style={{ zIndex: "100000" }} class="card-footer text-center">
                            <h6>I AM INTERESTED</h6>
                        </div>
                    </Link>
                </div>
            </div>
        
        
        </>
     );
}
 
export default PropCard;