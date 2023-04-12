import React from 'react';
import rdaoLogo from '../images/RDAO.jpg';


function Introduction() {
  return (
    <section id="intro">
      <h2>Welcome to Roller DAO</h2>
      <img src={rdaoLogo} alt="RDAO Logo" style= {{textAling: 'center', display:'block', margin: 0, marginBottom: '3rem',borderRadius: '3rem'}}/>
      <p>Roller DAO is a crowdfunding platform that allows creators to seek funding for their projects. Backers can support these projects by locking their tokens, and if the project meets its funding goal, backers will receive rewards from the creator.</p>
      <a href="#projects" className="btn btn-primary" style={{ marginRight: '1rem' }} >View Projects</a>
      <a href="#create-project" className="btn btn-secondary" style={{ marginLeft: '1rem' }} >Create a Project</a>
    </section>
  );
}

export default Introduction;
