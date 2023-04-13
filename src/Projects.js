import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const handleProjectSubmit = (event) => {
    event.preventDefault();
    const projectName = event.target.elements.projectName.value;
    const project = {
      name: projectName,
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      tasks: []
    };
    setProjects([...projects, project]);
    event.target.reset();
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={`/projects/${index}/tasks`}>{project.name}</Link>
            <p>Created at: {project.createdAt}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleProjectSubmit}>
        <input type="text" name="projectName" placeholder="Project name" required />
        <button type="submit">Create project</button>
      </form>
    </div>
  );
};

export default Projects;
