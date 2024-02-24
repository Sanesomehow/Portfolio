import React from "react";

const Projects = () => {
  return (
    <section className="light" id="projects">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        <div className="project-cell">Project 1</div>
        <div className="project-cell">Project 2</div>
        <div className="project-cell">Project 3</div>
        <div className="project-cell">Project 4</div>
      </div>
    </section>
  );
};

export default Projects;
