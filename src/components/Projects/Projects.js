import React from 'react';
import { ProjectsStyled } from './Projects.styled';
import Project from './Project/Project';
import { projects } from './projectData';

function Projects() {

  return (
    <ProjectsStyled id="Projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <Project image={project.img} name={project.name} description={project.description} />
        ))}
      </ul>
    </ProjectsStyled>
  )
}

export default Projects;