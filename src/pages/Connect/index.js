import React from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Connect() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });

  return (
    <div class="container">
      <div
        class="title"
        data-aos="fade-right"
        data-aos-easing="ease-in-out-back"
        data-aos-duration="800"
      >
        CONNECT
      </div>
      <section id="connect" class="row">
        <div class="col s12 m4 center social-link" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-out-back" data-aos-duration="1200">
          <a class="" href="https://github.com/gmg300">
            <i class="fab fa-github hvr-float"></i>
            <div class="icon">Github</div>
          </a>
        </div>
        <div class="col s12 m4 center social-link" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-out-back" data-aos-duration="1500">
          <a
            class=""
            href="https://www.linkedin.com/in/garrett-gassensmith-5ab01880/"
          >
            <i class="fab fa-linkedin hvr-float"></i>
            <div class="icon">LinkedIn</div>
          </a>
        </div>
        <div class="col s12 m4 center social-link" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-out-back" data-aos-duration="1800">
          <a class="" href="docs/GarrettGassensmith_Resume_200330.pdf">
            <i class="far fa-file-alt hvr-float"></i>
            <div class="icon">Resume</div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Connect;
