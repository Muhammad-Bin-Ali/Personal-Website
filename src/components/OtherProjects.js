import React from "react";
import OtherProject from "./OtherProject";
import { useStaticQuery, graphql } from "gatsby";
import { Masonry } from "@mui/lab";
import Box from "@mui/material/Box";

const OtherProjects = () => {
  const fetchedData = useStaticQuery(graphql`
    query {
      Project {
        projects {
          name
          description
          technologies
          url
        }
      }
    }
  `);

  const data = fetchedData.Project.projects;

  return (
    <section className={"max-w-[950px] py-12 md:py-24 mx-auto "}>
      <div className="grid grid-cols-3 h-20 px-6 md:px-0  mb-7 md:mb-10 items-center ">
        <h1 className="text-[1.3em] max-[460px]:col-span-2 min-[460px]:col-span-1 font-Poppins md:text-3xl font-semibold">
          Other Projects
        </h1>
        <span className="bg-myGray col-span-1 h-0.5 rounded"></span>
      </div>
      <Box sx={{ p: { xs: 2, md: 0 } }}>
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
          sx={{ width: "auto" }}
          spacing={2}
        >
          {data.map((project, index) => (
            <OtherProject project={project} />
          ))}
        </Masonry>
      </Box>
    </section>
  );
};

export default OtherProjects;
