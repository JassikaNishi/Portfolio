import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  const projectList = [
    {
      name: 'ROSE',
      description: 'Developed a dynamic React web application with a responsive layout...',
      link: 'GitHub Link: ROSE',
    },
    {
      name: 'Portfolio Website',
      description: 'Designed a personal portfolio website to showcase projects, achievements...',
      link: '[Insert Link]',
    },
  ];

  return (
    <ProjectsPage>
      <h1>My Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <Project key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>GitHub Link</a>
          </Project>
        ))}
      </div>
    </ProjectsPage>
  );
};

const ProjectsPage = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Project = styled.div`
  margin: 2rem 0;
`;

export default Projects;