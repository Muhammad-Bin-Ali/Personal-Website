import React, { useRef } from "react";
import NotableProject from "./NotableProject";
import { useIsVisible } from "../customHooks/isVisible";

const NotableProjects = () => {
  const projects = [
    {
      name: "Project Name.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      technologies: ["Node", "Express", "Google", "React", "MongoDB"],
      link: "https://github.com/Muhammad-Bin-Ali",
      images: "../../DSC_8529.jpg",
    },
    {
      name: "Project Name.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      technologies: ["Node", "Express", "Google", "React", "MongoDB"],
      link: "https://github.com/Muhammad-Bin-Ali",
      images: "../../DSC_8529.jpg",
    },
    {
      name: "Project Name.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      technologies: ["Node", "Express", "Google", "React", "MongoDB"],
      link: "https://github.com/Muhammad-Bin-Ali",
      images: "../../DSC_8529.jpg",
    },
  ];

  const ref = useRef();
  const visible = useIsVisible(ref);

  return (
    <section
      ref={ref}
      className={
        "flex flex-col w-[1000px] py-24 mx-auto " +
        (visible ? "animate-fadeIn" : "")
      }
    >
      <h1 className="flex items-center after:w-1/4 after:flex-initial font-Poppins text-3xl font-semibold after:ml-4 after:top-1/2 after:h-0.5  after:bg-myGray mb-20">
        Notable Projects
      </h1>

      <div class="flex flex-col items-center">
        <NotableProject project={projects[0]} rightSide={false} />
        <NotableProject project={projects[1]} rightSide={true} />
        <NotableProject project={projects[2]} rightSide={false} />
      </div>
    </section>
  );
};

export default NotableProjects;
