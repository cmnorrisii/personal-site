import React from "react";
import { CollectibuddyGif } from "../assets";

const Projects = () => {
  const myProjects = [
    {
      title: "Collecti🤖Buddy",
      gif: CollectibuddyGif,
      alt: "collectibuddy demo",
      description:
        "Collectibuddy is a React in Rails web application that allows users to add, edit, view, and delete items that they collect in a RESTful database.As the product manager for this application, I was responsible for providing support to the team when big picture app decisions needed to be made, as well as keeping the team unblocked throughout the development process and keekping the README up to date with the status of the application.",
      link: "",
    },
  ];
  return (
    <>
      <div className="component-header">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {myProjects.map((value) => {
          return (
            <div className="projects-item">
              <img className="projects-item-gif" src={value.gif} />
              <div className="projects-info">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
