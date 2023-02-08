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

  const decorationBoxClass =
    "absolute rounded z-[0] outline outline-myGray outline-2 outline-offset-4";

  return (
    <section
      ref={ref}
      className={
        "flex flex-col sm:w-[800px] lg:w-[1000px] py-24 mx-auto relative " +
        (visible ? "animate-fadeIn" : "")
      }
    >
      <h1 className="flex items-center after:w-1/4 after:flex-initial font-Poppins text-3xl font-semibold after:ml-4 after:top-1/2 after:h-0.5  after:bg-myGray mb-20">
        Notable Projects
      </h1>

      <div className="flex flex-col items-center">
        <NotableProject project={projects[0]} rightSide={false} />
        <div
          className={
            decorationBoxClass + " bg-myPink h-52 w-96 top-[420px] -right-20"
          }
        ></div>
        <NotableProject project={projects[1]} rightSide={true} />
        <div
          className={
            decorationBoxClass + " bg-myYellow h-80 w-96 top-[820px] -left-20"
          }
        ></div>
        <NotableProject project={projects[2]} rightSide={false} />
        <div
          className={
            decorationBoxClass +
            " bg-myGreen h-72 w-80 bottom-[120px] -right-16"
          }
        ></div>
      </div>
    </section>
  );
};

export default NotableProjects;
