import React, { Component, useState, useEffect } from "react";
import Project from "../components/projectPageComponents/Project";
import testImage from "../../static/images/test.jpg";
import axios from "axios";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  //Retrieving data from API
  //the [] as the second argument prevents useEffect() from running in an infinite loop
  useEffect(() => {
    axios.get("http://localhost:8000/api/projects/").then((res) => {
      setProjects(res.data);
    });
  }, []);

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
