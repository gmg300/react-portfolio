import React from "react";
import "./style.css";
import API from "../../utils/API";
import Project from '../../components/Project';

function Projects() {
  const projects = API.getProjects();
  return (
    <div class="container">
      <div class="title"
          data-aos="fade-right"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800">
          PROJECTS
      </div>
      <section id="projects" class="row">
      {projects.map((project,i) => {
        return <Project 
            img={project.img}
            title={project.title}
            description={project.description}
            repo={project.repo}
            page={project.page}
            delay={i}
        />
      })}
      </section>
    </div>
  );
}

export default Projects;
