import React, { useRef } from "react";
import NotableProject from "./NotableProject";
import { useStaticQuery, graphql } from "gatsby";

const NotableProjects = () => {
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

  const decorationBoxClass =
    "absolute rounded z-[0] outline outline-black outline-2 outline-offset-4";

  return (
    <section
      ref={ref}
      className={
        "flex flex-col max-w-[1000px] py-12 md:py-24 mx-auto relative "
      }
    >
      <div className="grid grid-cols-3 h-20 px-6 md:px-0  mb-7 md:mb-10 items-center ">
        <h1 className="text-[1.3em] max-[460px]:col-span-2 min-[460px]:col-span-1 font-Poppins md:text-3xl font-semibold">
          Notable Projects
        </h1>
        <span className="bg-myGray col-span-1 h-0.5 rounded"></span>
      </div>

      <div className="flex flex-col items-center w-full">
        <NotableProject project={data[0]} rightSide={false} />
        <div
          className={
            decorationBoxClass +
            " bg-myPink h-52 w-96 -right-20 top-[205px] md:top-[420px] md:-right-20"
          }
        ></div>
        <NotableProject project={data[1]} rightSide={true} />
        <div
          className={
            decorationBoxClass +
            " bg-myYellow h-60 md:h-80 w-96 top-[660px] -left-40 md:top-[820px] md:-left-20"
          }
        ></div>
        <NotableProject project={data[2]} rightSide={false} />
        <div
          className={
            decorationBoxClass +
            " bg-myGreen h-72 w-80 bottom-[325px] -right-[200px] md:bottom-[120px] md:-right-16"
          }
        ></div>
      </div>
    </section>
  );
};

export default NotableProjects;
