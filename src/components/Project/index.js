import React from "react";
import "./style.css";
import AOS from "aos";
import 'aos/dist/aos.css';

function Project({ img, title, description, repo, page, delay }) {
 
  AOS.init({});

  delay = delay * 100 + 1200;

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-out-back" data-aos-duration={delay}>
      <div class="col m6 l4 z-depth-5">
        <div class="profile image hvr-shrink">
          <img src={img} alt="Garrett Gassensmith" />
          <div class="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <p class="btn-large project-link hvr-grow">
              <a class="" href={repo}>
                Github
              </a>
            </p>
            <p class="btn-large project-link hvr-grow">
              <a class="" href={page}>
                Live Page
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
