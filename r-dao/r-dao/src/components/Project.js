import React from 'react';



function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <p>Funding Goal: X tokens</p>
          <p>Deadline: Month XX, 20XX</p>
          <a href="#" className="btn btn-primary">Back this Project</a>
        </li>
        <li>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <p>Funding Goal: X tokens</p>
          <p>Deadline: Month XX, 20XX</p>
          <a href="#" className="btn btn-primary">Back this Project</a>
        </li>
        {/* Repeat for all projects */}
      </ul>
    </section>
  );
}

export default Projects;
