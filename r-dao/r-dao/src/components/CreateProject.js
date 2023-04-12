import React from 'react';

function CreateProject() {
  return (
    <section id="create-project">
      <h2>Create a Project</h2>
      <form>
        <div className="form-group">
          <label htmlFor="project-title">Project Title</label>
          <input type="text" id="project-title" name="project-title" required />
        </div>
        <div className="form-group">
          <label htmlFor="project-description">Project Description</label>
          <textarea id="project-description" name="project-description" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="funding-goal">Funding Goal (in tokens)</label>
          <input type="number" id="funding-goal" name="funding-goal" required />
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Deadline</label>
          <input type="date" id="deadline" name="deadline" required />
        </div>
        <button type="submit" className="btn btn-primary">Create Project</button>
      </form>
    </section>
  );
}

export default CreateProject;
