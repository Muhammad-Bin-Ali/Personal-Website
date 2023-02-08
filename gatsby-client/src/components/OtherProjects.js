import React, { useRef } from "react";
import OtherProject from "./OtherProject";
import { useStaticQuery, graphql } from "gatsby";
import { useIsVisible } from "../customHooks/isVisible";

const OtherProjects = () => {
  const fetchedData = useStaticQuery(graphql`
    query {
      Project {
        projects {
          name
          description
          technologies
          url
          images
        }
      }
    }
  `);

  const data = fetchedData.Project.projects;
  const ref = useRef();
  const visible = useIsVisible(ref);
  console.log(fetchedData);

  return (
    <section
      ref={ref}
      className={"w-[950px] py-24 mx-auto " + (visible ? "animate-fadeIn" : "")}
    >
      <h1 className="flex items-center after:w-1/4 after:flex-initial font-Poppins text-3xl font-semibold after:ml-4 after:top-1/2 after:h-0.5  after:bg-myGray mb-20">
        Other Projects
      </h1>
      <div className="grid grid-cols-3">
        {data.map((project, index) => (
          <OtherProject project={project} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
