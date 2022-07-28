import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import img from "../Components/AbuleInvest/img/AbuleInvest.jpg"

const AbuleInvest = () => {
  return (
    <>
      <Navbar />
      <section class="cls">
    <div class="container">
        <div class="">
            <h3 class="clsh3">
            ABULE- INVEST 
            </h3>
            <div class="col-md-8 ml-auto mr-auto text-center ">
              <img class="" width="30%" src={img} alt="cls_img" />
            </div>

            <div class="mt-4 mb-5 ml-auto mr-auto text-justify col-md-12 ">
              <h6>
              Abule-Invest makes real estate investments accessible to everyone in a way that is simple, secure and profitable. This is achievable because we have a reputation for quality research, fail-proof findings, investment expertise, guaranteed sales projections, and value-added services.
              </h6>
            </div>

            <div class="mt-4 mb-5 ml-auto mr-auto text-justify col-md-12 ">
              <h6 class="mb-5">
              Funds are invested in various portfolios, generating real estate assets and ventures such as Lands, distress sales, JV (joint venture) apartments, shopping malls, offices, construction, etc.  Income generated from re-sales, leasing or property partnership are shared amongst investors. We offer you simplified, rewarding real estate investment, allowing you access real property assets, and share the benefits and risks of owning portfolio of such properties. 
              </h6>

              <h6>
              <ul>
                  <li>
                  Crowd Funding: Best for those who want property investment within urban settlement and wouldn’t mind co-funding and sharing with other co-investors on percentage ratio.
                  </li>
                  <li>
                  	Premium Investor: Available upon request.
                  </li>
                  <li>
                  	Long term: This is perfect for those who wants to invest as  a sole/single investor or crowd funding to resell within minimum holding range of  5 years.
                      </li>
                </ul> 
              </h6>
            </div>
        </div>


    </div>
</section>
      <Footer />
    </>
  );
};

export default AbuleInvest;
