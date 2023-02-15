import React, { useRef } from "react";
import OtherProject from "./OtherProject";
import { useStaticQuery, graphql } from "gatsby";

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

  return (
    <section ref={ref} className={"max-w-[950px] py-12 md:py-24 mx-auto "}>
      <div className="grid grid-cols-3 h-20 px-6 md:px-0  mb-7 md:mb-10 items-center ">
        <h1 className="text-[1.3em] max-[460px]:col-span-2 min-[460px]:col-span-1 font-Poppins md:text-3xl font-semibold">
          Other Projects
        </h1>
        <span className="bg-myGray col-span-1 h-0.5 rounded"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 gap-y-6 px-6 md:px-0">
        {data.map((project, index) => (
          <OtherProject project={project} />
        ))}
        {data.map((project, index) => (
          <OtherProject project={project} />
        ))}
        {data.map((project, index) => (
          <OtherProject project={project} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
