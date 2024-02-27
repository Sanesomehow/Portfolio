import React from "react";

const Skills = () => {
  return (
    <section className="light" id="skills">
      <h2 style={{ textAlign: "center" }}>Skills</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "10px",
        }}
      >
        <div className="skill-cell">skill 1</div>
        <div className="skill-cell">skill 2</div>
        <div className="skill-cell">skill 3</div>
        <div className="skill-cell">skill 4</div>
        <div className="skill-cell">skill 5</div>
        <div className="skill-cell">skill 6</div>
        <div className="skill-cell">skill 7</div>
        <div className="skill-cell">skill 8</div>
        <div className="skill-cell">skill 9</div>
        <div className="skill-cell">skill 10</div>
        <div className="skill-cell">skill 11</div>
        <div className="skill-cell">skill 12</div>
      </div>
    </section>
  );
};

export default Skills;
