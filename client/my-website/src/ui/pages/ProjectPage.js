import React, { useState } from "react";
import Project from "../components/projectPageComponents/Project";
import testImage from "../../static/images/test.jpg";

const ProjectPage = () => {
  const [projects, setProjects] = useState([
    {
      image: testImage,
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: testImage,
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: testImage,
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  return (
    <div>
      <h1>Projects.</h1>

      {/* creating a Project component for each project item in projects state item */}
      {projects.map((project) => {
        return (
          <Project
            image={project.image}
            name={project.name}
            description={project.description}
          />
        );
      })}
    </div>
  );
};

export default ProjectPage;
