import React from "react";
import { CollectibuddyGif } from "../assets";

const Projects = () => {
  return (
    <>
      <div className="component-header">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        <div className="projects-item">
          <img className="projects-item-gif" src={CollectibuddyGif} />
        </div>
      </div>
    </>
  );
};

export default Projects;
