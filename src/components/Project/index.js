import React from "react";
import "./style.css";
import AOS from "aos";
import 'aos/dist/aos.css';

function Project({ img, title, description, repo, page, delay }) {
 
  AOS.init({});

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-out-back" data-aos-duration={delay}>
      <div className="col m6 l4 z-depth-5">
        <div className="profile image hvr-shrink">
          <img src={img} alt="Garrett Gassensmith" />
          <div className="text">
            <h4>{title}</h4>
            <p className="proj-description">{description}</p>
            <p className="btn project-link hvr-grow">
              <a className="" href={repo}>
                Github
              </a>
            </p>
            <p className="btn project-link hvr-grow">
              <a className="" href={page}>
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
