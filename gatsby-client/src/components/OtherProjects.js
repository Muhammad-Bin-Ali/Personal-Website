import React from "react";
import OtherProject from "./OtherProject";

const OtherProjects = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      technologies: ["Node", "Express", "Google", "React", "MongoDB"],
      link: "https://github.com/Muhammad-Bin-Ali",
      images: "../../DSC_8529.jpg",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      technologies: ["Node", "Express", "Google", "React", "MongoDB"],
      link: "https://github.com/Muhammad-Bin-Ali",
      images: "../../DSC_8529.jpg",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      technologies: ["Node", "Express", "Google", "React", "MongoDB"],
      link: "https://github.com/Muhammad-Bin-Ali",
      images: "../../DSC_8529.jpg",
    },
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      technologies: ["Node", "Express", "Google", "React", "MongoDB"],
      link: "https://github.com/Muhammad-Bin-Ali",
      images: "../../DSC_8529.jpg",
    },
  ];

  return (
    <section className="w-[900px] py-24 mx-auto grid grid-cols-3">
      {projects.map((project) => (
        <OtherProject />
      ))}
    </section>
  );
};

export default OtherProjects;
