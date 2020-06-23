import React from "react";
import "./style.css";
import API from "../../utils/API";
import Project from '../../components/Project';

function Projects() {
  const projects = API.getProjects();
  return (
    <div class="container">
      <div class="title">PROJECTS</div>
      <section id="projects" class="row">
      {projects.map(project => {
        return <Project 
            img={project.img}
            title={project.title}
            description={project.description}
            repo={project.repo}
            page={project.page}
        />
      })}
      </section>
    </div>
  );
}

export default Projects;
