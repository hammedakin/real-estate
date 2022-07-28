import React from "react";
import img from "./img/team.jpg";


const Testimonials = () => {
  return (
    <>
      <section class="testimonials">
        <div class=" text-center">
        <div class="pb-5 red-text">
            <h4> Our Customers Love What We Do </h4>
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">



              <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                    The property acquisition experience through abulesowo.ng was simply WOW! It was totally hassle-free, devoid of the headaches of regular real estate people. Their exceptional customer service coupled with remarkable integrity & professionalism is simply OUT OF THIS WORLD!!!              
                  </p>
                  <h5 class="mt-4"><span ><box-icon name='pen' size='1rem' type='solid' color='black' ></box-icon></span> -Mayowa Kolade MD, FISQua</h5>
                </div>
              </div>
            </div>

           

            </div>


            
              </div>
              <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                   <sup class="h4"></sup>I had a very good experience securing my property especially because I am out of the country. My queries were answered adequately and on time, the administration of the process was uncomplicated and the payment process was easy. The team does know its job and the agent handled me excellently. I would recommend them - and I do not say this lightly. 
                  </p>
                  <h5 class="mt-4"><span ><box-icon name='pen' size='1rem' type='solid' color='black' ></box-icon></span> - Godwin</h5>
                </div>
              </div>
            </div>

            </div>
              </div>

              <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                   <sup class="h4"></sup>The process was seamless and transparent. The facilitation by Abulesowo.ng ensured that I was dealing with the right people, consequently avoiding any future heartache.
I strongly recommend them.

                  </p>
                  <h5 class="mt-4"><span ><box-icon name='pen' size='1rem' type='solid' color='black' ></box-icon></span>  - Chuks Nwabueze</h5>
                </div>
              </div>
            </div>

            </div>
              </div>

              <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                   <sup class="h4"></sup> I was simply amazed at the level of professionalism and integrity considering what's obtainable in this line of business. Also is their work ethic which is being detailed, consistent, diligent and provides value for all services paid for. Doing business with abulesowo.ng made me sleep well at night and would recommend them all day.
                  </p>
                  <h5 class="mt-4"><span ><box-icon name='pen' size='1rem' type='solid' color='black' ></box-icon></span>  -Akaniru David, CCNP.</h5>
                </div>
              </div>
            </div>

            </div>
              </div>

              <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                   <sup class="h4"></sup> You guys have been able to build trust which is Key. Your customer service has been tremendous, keep it up!
                  </p>
                  <h5 class="mt-4"><span ><box-icon name='pen' size='1rem' type='solid' color='black' ></box-icon></span>  Funmilayo Oluwasola</h5>
                </div>
              </div>
            </div>

            </div>
              </div>

              <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                   <sup class="h4"></sup> I particularly liked the location offered and the fact that securing lands was made easier with flexible installmental payments by the agents on abulesowo.ng. 
                  </p>
                  <h5 class="mt-4"><span ><box-icon name='pen' size='1rem' type='solid' color='black' ></box-icon></span>  -Fabunmi Oludare</h5>
                </div>
              </div>
            </div>

            </div>
              </div>

              <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                   <sup class="h4"></sup> For a young starter such as myself, Flexibility in payment and confidence in purchase where the two most important things I looked out for when trying to acquire a property....... And this is what abulesowo.ng, offered with the agent involved, with the flexible payment plan "my little counts" and with the confidence in purchase "authenticity of property" preparing for the future was made easier.  I look forward to many more properties dealings on www.abulesowo.ng  Tested and trusted.
                  </p>
                  <h5 class="mt-4"><span ><box-icon name='pen' size='1rem' type='solid' color='black' ></box-icon></span>  - Laolu </h5>
                </div>
              </div>
            </div>

            </div>
              </div>
             
             
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
