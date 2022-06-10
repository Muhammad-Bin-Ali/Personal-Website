import React from "react";
import gitHubButton from "./gitHubButton";

const Project = ({ image, name, description }) => {
  return (
    <div>
      <div>
        <img src={image}></img>
        <h2>{name}</h2>
        <p>{description}</p>
        <gitHubButton />
      </div>
    </div>
  );
};

export default Project;
