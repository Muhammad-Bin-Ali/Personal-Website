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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  idunt ut labore et ",
      technologies: ["Node", "Express", "Google", "React", "MongoDB"],
      link: "https://github.com/Muhammad-Bin-Ali",
      images: "../../DSC_8529.jpg",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  aliqua. ",
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
    <section className="w-[950px] py-24 mx-auto ">
      <h1 className="flex items-center after:w-1/4 after:flex-initial font-Poppins text-3xl font-semibold after:ml-4 after:top-1/2 after:h-0.5  after:bg-myGray mb-20">
        Other Projects
      </h1>
      <div className="grid grid-cols-3">
        {projects.map((project) => (
          <OtherProject project={project} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
