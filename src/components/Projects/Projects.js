import React from "react";

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src={require("../../img/projects.png")} alt="hero-img" />
        </div>
        <div className="col-2">
          <h1>
            All projects started <br />
            With One GREAT IDEA
          </h1>
          <p>
            Check out our recent software development projects to see how we’ve
            helped businesses with great ideas like yours grow and take things
            to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
