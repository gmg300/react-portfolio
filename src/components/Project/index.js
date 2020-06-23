import React from "react";
import "./style.css";

function Project({img, title, description, repo, page}) {
  return (
    <div class="col m6 l6 z-depth-5">
      <div class="profile image hvr-shrink">
        <img src={img} alt="Garrett Gassensmith" />
        <div class="text">
          <p>{title}</p>
          <p>{description}</p>
          <p class="btn project-link hvr-grow">
            <a class="" href={repo}>
              Github
            </a>
          </p>
          <p class="btn project-link hvr-grow">
            <a class="" href={page}>
              Live Page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
